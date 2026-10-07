import type { Metadata } from "next";
import { CtaBand, SectionLabel } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "DEM Planung aus Landstuhl: Architektur und Bauingenieurwesen aus einer Hand – Mehmet Ali Demirci und Furkan Demirci.",
  alternates: { canonical: "/ueber-uns" },
};

const VALUES = [
  { code: "W–01", title: "Funktionalität", text: "Grundrisse, die im Alltag funktionieren – durchdacht vom Stellplatz bis zum Abstellraum." },
  { code: "W–02", title: "Wirtschaftlichkeit", text: "Tragwerk und Flächen wirtschaftlich bemessen – damit sich Ihr Projekt rechnet." },
  { code: "W–03", title: "Gestalterische Qualität", text: "Architektur mit Anspruch, die wir schon im Entwurf als Rendering sichtbar machen." },
];

const TEAM = [
  {
    code: "T–01",
    role: "Bauingenieurwesen · Tragwerk",
    name: "Mehmet Ali Demirci",
    focus: "Architektur · Tragwerksplanung · Baukosten",
    img: "/team/mehmet.jpg",
    cv: [
      { t: "2016 – 2020", d: "Studium Bauingenieurwesen, HTW des Saarlandes" },
      { t: "02/2018 – 01/2021", d: "Planungsbüro Bohnert" },
      { t: "02/2021 – 03/2025", d: "Geschäftsführer, KD-Ingenieure" },
      { t: "03/2025 – 04/2026", d: "Geschäftsführer, DMA-Planung" },
      { t: "seit 05/2026", d: "DEM Planung" },
    ],
    skills: ["Tragwerksplanung", "Prüffähige Statik", "Genehmigungsplanung", "Kostenberechnung", "Fachbauleitung", "Statische Abnahmen"],
    quals: [
      "Ingenieurkammer des Saarlandes – bauvorlageberechtigt seit 10/2024",
      "Eingetragener Tragwerksplaner seit 10/2024",
      "Bachelor of Engineering – Bauingenieurwesen",
    ],
    mail: "ma.demirci@dem-planung.de",
    tel: SITE.phoneMehmet,
  },
  {
    code: "T–02",
    role: "Architektur · Visualisierung",
    name: "Furkan Demirci",
    focus: "Architektur · Visualisierung · Bestandsaufnahme",
    img: "/team/furkan.jpg",
    cv: [
      { t: "03/2025", d: "Abschluss Bachelor of Arts Architektur" },
      { t: "05 – 07/2025", d: "Angestellt in einem Planungsbüro" },
      { t: "seit 01/2026", d: "Freiberuflich tätig – DEM Planung" },
    ],
    skills: ["Entwurf", "Genehmigungsplanung", "Bestandsaufnahme", "Wohnflächen nach WoFlV", "Renderings", "Bauantragsunterlagen"],
    quals: ["Bachelor of Arts – Architektur"],
    mail: "f.demirci@dem-planung.de",
    tel: SITE.phoneFurkan,
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-raster border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end gap-12 px-4 py-16 md:px-8 md:py-[72px]">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <SectionLabel num="04">Über uns</SectionLabel>
            <h1 className="display text-[clamp(52px,7.4vw,112px)]">
              Gestaltung
              <br />
              trifft
              <br />
              Tragwerk<span className="text-blue">.</span>
            </h1>
          </div>
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4 text-ink-2">
            <p className="text-[19px] text-ink">
              DEM Planung wurde 2026 gegründet und steht für moderne, wirtschaftliche und präzise Planung in Architektur,
              Tragwerksplanung und Projektentwicklung.
            </p>
            <p>
              Schon vor der gemeinsamen Gründung haben wir mehrjährige praktische Erfahrung in unterschiedlichsten
              Bauvorhaben gesammelt. Heute begleiten wir Projekte von der ersten Idee bis zur genehmigungsfähigen Umsetzung.
            </p>
            <p>
              Weil Architektur, Bestandsaufnahme, Tragwerksplanung und Visualisierung im selben Büro entstehen, greifen
              Entwurf und Nachweise von Anfang an ineinander.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-ink">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-4 md:grid-cols-3 md:px-8">
          {VALUES.map((v, i) => (
            <div key={v.code} className={`flex flex-col gap-3 py-10 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === 2 ? "md:pr-0" : "border-b border-line md:border-b-0 md:border-r"}`}>
              <span className="font-mono text-xs text-blue">{v.code}</span>
              <span className="display-80 text-[28px]">{v.title}</span>
              <span className="text-ink-2">{v.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-24 md:px-8">
          <div className="flex flex-col gap-4">
            <SectionLabel num="Team">Architektur &amp; Ingenieurwesen</SectionLabel>
            <h2 className="display display-75 text-[clamp(40px,5vw,64px)] leading-[0.95]">Die Planer</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {TEAM.map((m) => (
              <article key={m.code} className="flex flex-col border border-ink">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-ink bg-card">
                  <img src={m.img} alt={m.name} className="absolute inset-0 block h-full w-full object-cover object-[center_25%] grayscale contrast-[1.05]" loading="lazy" />
                  <span className="absolute left-0 top-0 border-b border-r border-ink bg-paper px-3 py-2 font-mono text-xs">{m.code}</span>
                </div>
                <div className="flex flex-col gap-7 p-6 md:p-8">
                  <div className="flex flex-col gap-2">
                    <span className="label-sm text-blue">{m.role}</span>
                    <span className="display text-[40px] leading-none [font-stretch:78%]">{m.name}</span>
                    <span className="text-ink-2">{m.focus}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="label-sm border-b-2 border-ink pb-2 text-muted">Werdegang</span>
                    {m.cv.map((c) => (
                      <div key={c.t + c.d} className="grid grid-cols-[130px_minmax(0,1fr)] gap-4 border-b border-line py-2.5 sm:grid-cols-[150px_minmax(0,1fr)]">
                        <span className="font-mono text-[13px]">{c.t}</span>
                        <span>{c.d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className="label-sm text-muted">Kompetenzen</span>
                    <div className="flex flex-wrap gap-2">
                      {m.skills.map((s) => (
                        <span key={s} className="border border-ink px-2.5 py-1.5 text-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 bg-sand p-4">
                    <span className="label-sm text-muted">Qualifikation</span>
                    {m.quals.map((q) => (
                      <span key={q} className="font-mono text-[13px]">↳ {q}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-ink pt-4 font-mono text-[13px]">
                    <a href={`mailto:${m.mail}`} className="py-1.5 no-underline">{m.mail}</a>
                    <a href={m.tel.href} className="py-1.5 no-underline">{m.tel.label}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Lernen wir uns kennen." />
    </>
  );
}
