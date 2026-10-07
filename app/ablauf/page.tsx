import type { Metadata } from "next";
import { CtaBand, SectionLabel } from "@/components/ui";
import { FAQ, STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ablauf",
  description:
    "In fünf Schritten zur Baugenehmigung: Erstgespräch, Bestandsaufnahme, Entwurf, Statik und Bauantrag – so arbeitet DEM Planung.",
  alternates: { canonical: "/ablauf" },
};

export default function AblaufPage() {
  return (
    <>
      <section className="bg-raster border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-16 md:px-8 md:py-[72px]">
          <SectionLabel num="04">Ablauf · LPH 1–4 + Statik</SectionLabel>
          <h1 className="display text-[clamp(36px,7.4vw,112px)]">
            In fünf Schritten
            <br />
            zur Baugenehmigung<span className="text-blue">.</span>
          </h1>
          <p className="max-w-[640px] text-lg text-ink-2">
            Klare Schritte, ein Ansprechpartner: So begleiten wir Ihr Bauvorhaben von der ersten Idee bis zum eingereichten
            Bauantrag – und darüber hinaus, bis die Genehmigung vorliegt.
          </p>
        </div>
      </section>

      <section className="border-b border-ink bg-sand">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3.5 px-4 py-14 md:px-8">
          <div className="label-sm flex justify-between text-muted">
            <span>Projektplan · schematisch</span>
            <span>Projektverlauf →</span>
          </div>
          <div className="flex flex-col border-t-2 border-ink">
            {STEPS.map((s, i) => (
              <div key={s.num} className="grid grid-cols-[minmax(120px,220px)_minmax(0,1fr)] items-center gap-4 border-b border-line py-2.5">
                <span className="font-mono text-xs uppercase tracking-[0.06em]">
                  <span className="text-blue">{s.num}</span> · {s.short}
                </span>
                <div className="relative h-[22px] bg-[linear-gradient(to_right,rgba(22,24,26,0.12)_1px,transparent_1px)] bg-[length:10%_100%]">
                  <div
                    className={`absolute bottom-[3px] top-[3px] ${i === 3 ? "bg-ink" : "bg-blue"}`}
                    style={{ left: `${s.start}%`, width: `${s.span}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <span className="font-mono text-[11px] text-muted">
            Statik und Entwurf laufen parallel – deshalb passen Tragwerk und Grundriss schon beim Einreichen zusammen.
          </span>
        </div>
      </section>

      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col px-4 pb-24 pt-6 md:px-8">
          {STEPS.map((s, i) => (
            <article key={s.num} className={`flex flex-wrap gap-x-12 gap-y-8 py-14 ${i < STEPS.length - 1 ? "border-b border-ink" : ""}`}>
              <div className="flex flex-[0_1_220px] flex-col gap-2">
                <span
                  className="display text-[120px] leading-[0.8] text-transparent"
                  style={{ WebkitTextStroke: "1.5px #16181a" }}
                  aria-hidden="true"
                >
                  {s.num}
                </span>
                <span className="label-sm mt-3 self-start border border-ink px-2.5 py-1">{s.lph}</span>
              </div>
              <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3.5">
                <h2 className="display display-75 text-[clamp(30px,3.2vw,42px)] leading-none">{s.title}</h2>
                <p className="text-[17px] text-ink-2">{s.text}</p>
              </div>
              <div className="grid min-w-0 flex-[1_1_420px] grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2 border-t-2 border-ink pt-3">
                  <span className="label-sm text-muted">Sie liefern</span>
                  {s.give.map((g) => (
                    <span key={g} className="text-[15px]">— {g}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 border-t-2 border-blue pt-3">
                  <span className="label-sm text-blue">Sie erhalten</span>
                  {s.get.map((g) => (
                    <span key={g} className="text-[15px]">→ {g}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto flex max-w-[1280px] flex-wrap gap-12 px-4 py-[88px] md:px-8">
          <div className="flex flex-[1_1_340px] flex-col gap-4">
            <span className="label text-sky">Häufige Fragen</span>
            <h2 className="display display-75 text-[clamp(36px,4.4vw,56px)] leading-none">Gut zu wissen</h2>
          </div>
          <div className="flex min-w-0 flex-[2_1_560px] flex-col">
            {FAQ.map((q) => (
              <div key={q.q} className="flex flex-col gap-2 border-t border-night py-5">
                <span className="display-80 text-[22px]">{q.q}</span>
                <span className="text-stone">{q.a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Schritt 01 beginnt hier." text="Schicken Sie uns Fotos, Lageplan oder eine kurze Beschreibung Ihres Vorhabens." />
    </>
  );
}
