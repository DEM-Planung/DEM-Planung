import nodemailer from "nodemailer";

const MAX_FILES_BYTES = 4 * 1024 * 1024; // Vercel-Limit für Request-Bodys beachten
const ALLOWED = /\.(pdf|jpe?g|png|dwg|dxf|heic|webp)$/i;

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  const { SMTP_USER, SMTP_PASS, CONTACT_TO, SMTP_HOST, SMTP_PORT } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return Response.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "bad-request" }, { status: 400 });
  }

  // Spam-Schutz: verstecktes Feld muss leer bleiben
  if (String(form.get("firma_website") ?? "").trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(form.get("name") ?? "").trim().slice(0, 200);
  const email = String(form.get("email") ?? "").trim().slice(0, 200);
  const tel = String(form.get("tel") ?? "").trim().slice(0, 100);
  const ort = String(form.get("ort") ?? "").trim().slice(0, 200);
  const leistungen = String(form.get("leistungen") ?? "").trim().slice(0, 500);
  const nachricht = String(form.get("nachricht") ?? "").trim().slice(0, 10000);
  const datenschutz = form.get("datenschutz") === "ja";

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !nachricht || !datenschutz) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const files = form.getAll("dateien").filter((f): f is File => f instanceof File && f.size > 0);
  const total = files.reduce((sum, f) => sum + f.size, 0);
  if (total > MAX_FILES_BYTES) {
    return Response.json({ ok: false, error: "too-large" }, { status: 413 });
  }
  if (files.some((f) => !ALLOWED.test(f.name))) {
    return Response.json({ ok: false, error: "file-type" }, { status: 415 });
  }
  const attachments = await Promise.all(
    files.map(async (f) => ({ filename: f.name, content: Buffer.from(await f.arrayBuffer()) })),
  );

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.office365.com",
    port: Number(SMTP_PORT || 587),
    secure: false,
    requireTLS: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["E-Mail", email],
    ["Telefon", tel || "–"],
    ["Ort des Bauvorhabens", ort || "–"],
    ["Gewünschte Leistung", leistungen || "–"],
  ];

  try {
    await transporter.sendMail({
      from: `"Website DEM PLANUNG" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Projektanfrage über die Website – ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nVorhaben:\n${nachricht}`,
      html: `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#5e5b55">${esc(k)}</td><td style="padding:4px 0">${esc(v)}</td></tr>`)
        .join("")}</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-line">${esc(nachricht)}</p>`,
      attachments,
    });
  } catch (err) {
    console.error("Kontaktformular: Versand fehlgeschlagen", err);
    return Response.json({ ok: false, error: "send-failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
