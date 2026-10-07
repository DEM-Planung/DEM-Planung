import nodemailer from "nodemailer";

// Microsoft Graph akzeptiert Anhänge in einer einzelnen sendMail-Anfrage nur bis ca. 3 MB.
const MAX_FILES_BYTES = 3 * 1024 * 1024;
const ALLOWED = /\.(pdf|jpe?g|png|dwg|dxf|heic|webp)$/i;

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

type Mail = {
  from: string;
  to: string;
  replyName: string;
  replyEmail: string;
  subject: string;
  text: string;
  html: string;
  files: { name: string; type: string; data: Buffer }[];
};

/** Versand über Microsoft Graph (App-Registrierung, ohne Passwort, funktioniert mit MFA). */
async function sendViaGraph(mail: Mail, tenant: string, clientId: string, secret: string) {
  const tokenRes = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: secret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });
  if (!tokenRes.ok) throw new Error(`Graph-Token ${tokenRes.status}: ${await tokenRes.text()}`);
  const { access_token } = (await tokenRes.json()) as { access_token: string };

  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mail.from)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject: mail.subject,
        body: { contentType: "HTML", content: mail.html },
        toRecipients: [{ emailAddress: { address: mail.to } }],
        replyTo: [{ emailAddress: { address: mail.replyEmail, name: mail.replyName } }],
        attachments: mail.files.map((f) => ({
          "@odata.type": "#microsoft.graph.fileAttachment",
          name: f.name,
          contentType: f.type || "application/octet-stream",
          contentBytes: f.data.toString("base64"),
        })),
      },
      saveToSentItems: true,
    }),
  });
  if (!res.ok) throw new Error(`Graph-sendMail ${res.status}: ${await res.text()}`);
}

/** Fallback: Versand per SMTP (Microsoft 365, nur ohne MFA möglich). */
async function sendViaSmtp(mail: Mail, user: string, pass: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.office365.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    requireTLS: true,
    auth: { user, pass },
  });
  await transporter.sendMail({
    from: `"Website DEM PLANUNG" <${mail.from}>`,
    to: mail.to,
    replyTo: `"${mail.replyName.replace(/"/g, "")}" <${mail.replyEmail}>`,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    attachments: mail.files.map((f) => ({ filename: f.name, content: f.data })),
  });
}

export async function POST(request: Request) {
  const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MAIL_FROM, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  const useGraph = Boolean(MS_TENANT_ID && MS_CLIENT_ID && MS_CLIENT_SECRET);
  const useSmtp = Boolean(SMTP_USER && SMTP_PASS);
  if (!useGraph && !useSmtp) {
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

  const uploads = form.getAll("dateien").filter((f): f is File => f instanceof File && f.size > 0);
  const total = uploads.reduce((sum, f) => sum + f.size, 0);
  if (total > MAX_FILES_BYTES) {
    return Response.json({ ok: false, error: "too-large" }, { status: 413 });
  }
  if (uploads.some((f) => !ALLOWED.test(f.name))) {
    return Response.json({ ok: false, error: "file-type" }, { status: 415 });
  }
  const files = await Promise.all(
    uploads.map(async (f) => ({ name: f.name, type: f.type, data: Buffer.from(await f.arrayBuffer()) })),
  );

  const rows: [string, string][] = [
    ["Name", name],
    ["E-Mail", email],
    ["Telefon", tel || "–"],
    ["Ort des Bauvorhabens", ort || "–"],
    ["Gewünschte Leistung", leistungen || "–"],
  ];

  const from = MAIL_FROM || SMTP_USER || "info@dem-planung.de";
  const mail: Mail = {
    from,
    to: CONTACT_TO || from,
    replyName: name,
    replyEmail: email,
    subject: `Projektanfrage über die Website – ${name}`,
    text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nVorhaben:\n${nachricht}`,
    html: `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#5e5b55">${esc(k)}</td><td style="padding:4px 0">${esc(v)}</td></tr>`)
      .join("")}</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-line">${esc(nachricht)}</p>`,
    files,
  };

  try {
    if (useGraph) await sendViaGraph(mail, MS_TENANT_ID!, MS_CLIENT_ID!, MS_CLIENT_SECRET!);
    else await sendViaSmtp(mail, SMTP_USER!, SMTP_PASS!);
  } catch (err) {
    console.error("Kontaktformular: Versand fehlgeschlagen", err);
    return Response.json({ ok: false, error: "send-failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
