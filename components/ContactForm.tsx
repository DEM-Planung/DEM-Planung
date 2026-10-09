"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { SITE } from "@/lib/site";

const SERVICES = ["Bauantrag & Planung", "Bauvoranfrage", "Statik", "Bestandsaufnahme", "Flächenberechnung", "Renderings", "Nutzungsänderung", "Sonstiges"];

const ERRORS: Record<string, string> = {
  invalid: "Bitte füllen Sie Name, E-Mail und Ihr Vorhaben aus und bestätigen Sie die Datenschutzerklärung.",
  "too-large": "Die Anhänge sind zu groß (max. 3 MB insgesamt). Größere Dateien schicken Sie uns gern per E-Mail.",
  "file-type": "Bitte nur PDF-, Bild- oder DWG-Dateien anhängen.",
};

const field = "min-h-[46px] border-0 border-b-2 border-ink bg-paper px-3 py-2.5 text-ink outline-none focus:border-blue";
const lbl = "label-sm text-muted";

export default function ContactForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    data.set("leistungen", picked.join(", "));
    data.set("datenschutz", data.get("datenschutz") ? "ja" : "");
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/kontakt", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        formEl.reset();
        setPicked([]);
        return;
      }
      setError(
        ERRORS[json.error] ??
          `Die Anfrage konnte gerade nicht gesendet werden. Bitte schreiben Sie uns an ${SITE.email} oder rufen Sie uns an: ${SITE.phoneFurkan.label}.`,
      );
      setStatus("error");
    } catch {
      setError(`Keine Verbindung. Bitte schreiben Sie uns an ${SITE.email} oder rufen Sie uns an: ${SITE.phoneFurkan.label}.`);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 px-8 py-14">
        <span className="grid h-12 w-12 place-items-center bg-blue text-2xl text-white" aria-hidden="true">✓</span>
        <h2 className="display display-75 text-4xl leading-none">Danke für Ihre Anfrage.</h2>
        <p className="max-w-[520px] text-ink-2">Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn border border-ink text-xs">
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-8" noValidate={false}>
      <label className="flex flex-col gap-2">
        <span className={lbl}>Name *</span>
        <input name="name" type="text" autoComplete="name" required className={field} />
      </label>
      <label className="flex flex-col gap-2">
        <span className={lbl}>E-Mail *</span>
        <input name="email" type="email" autoComplete="email" required className={field} />
      </label>
      <label className="flex flex-col gap-2">
        <span className={lbl}>Telefon</span>
        <input name="tel" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="flex flex-col gap-2">
        <span className={lbl}>Ort des Bauvorhabens</span>
        <input name="ort" type="text" placeholder="PLZ, Ort" className={field} />
      </label>

      <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0 md:col-span-2">
        <legend className={`${lbl} mb-2.5 p-0`}>Gewünschte Leistung – Mehrfachauswahl</legend>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const on = picked.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => setPicked(on ? picked.filter((p) => p !== s) : [...picked, s])}
                className={`min-h-11 cursor-pointer border border-ink px-4 py-2.5 text-sm ${on ? "bg-ink text-paper" : "bg-transparent text-ink"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className={lbl}>Ihr Vorhaben *</span>
        <textarea
          name="nachricht"
          rows={6}
          required
          placeholder="Was möchten Sie bauen, umbauen oder umnutzen? Gibt es schon Pläne oder einen Termin beim Bauamt?"
          className={`${field} resize-y py-3`}
        />
      </label>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className={lbl}>Unterlagen anhängen (optional, max. 3 MB)</span>
        <span className="flex flex-wrap items-center gap-3 border border-dashed border-ink bg-paper p-4">
          <input name="dateien" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.dwg,.dxf" className="text-sm" />
          <span className="font-mono text-xs text-muted">PDF, JPG, PNG, DWG · Fotos, Lageplan, Bestandspläne</span>
        </span>
      </label>

      {/* Spam-Schutz – für Menschen unsichtbar */}
      <input type="text" name="firma_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="flex cursor-pointer items-start gap-3 md:col-span-2">
        <input type="checkbox" name="datenschutz" required className="mt-0.5 h-[22px] w-[22px] flex-none accent-ink" />
        <span className="text-sm text-ink-2">
          Ich habe die <Link href="/datenschutz" className="underline">Datenschutzerklärung</Link> gelesen und bin
          einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. *
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="border-l-4 border-blue bg-sand px-4 py-3 text-sm md:col-span-2">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 md:col-span-2">
        <span className="font-mono text-xs text-muted">Ihre Daten werden ausschließlich zur Bearbeitung der Anfrage genutzt.</span>
        <button type="submit" disabled={status === "sending"} className="btn bg-blue text-white disabled:opacity-60">
          {status === "sending" ? "Wird gesendet …" : "Anfrage senden →"}
        </button>
      </div>
    </form>
  );
}
