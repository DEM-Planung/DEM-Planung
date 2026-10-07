import Link from "next/link";
import DisciplineToggle from "@/components/DisciplineToggle";
import { SectionLabel } from "@/components/ui";
import { PROJECTS, SERVICES, STEPS } from "@/lib/content";
import { SITE } from "@/lib/site";

const FACTS = [
  { label: "Leistungsbild", value: "LPH 1–4 + Statik" },
  { label: "Qualifikation", value: "Bauvorlageberechtigt" },
  { label: "Tätigkeitsgebiet", value: "RLP · Saarland · BaWü · Hessen" },
  { label: "Gegründet", value: "2026 · Landstuhl" },
];

const HOME_PROJECTS = ["P–01", "P–03", "P–02"];

export default function Home() {
  const projects = HOME_PROJECTS.map((n) => PROJECTS.find((p) => p.num === n)!);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink bg-ink">
        <div className="relative flex min-h-[640px] flex-col overflow-hidden md:min-h-[760px]">
          <img
            src="/projekte/rathausplatz/frontansicht.jpg"
            alt="Rendering Quartier Rathausplatz Völklingen"
            className="absolute inset-0 block h-full w-full object-cover object-[center_55%]"
          />
          <div className="bg-raster-light absolute inset-0 bg-[rgba(14,15,16,0.5)]" />
          <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-between gap-12 px-4 pb-14 pt-10 text-white md:px-8">
            <div className="flex items-center gap-2 font-mono text-[11px] text-white/80">
              <span className="h-3.5 w-px bg-white" />
              <span className="h-px flex-1 bg-white/70" />
              <span className="text-center">Rathausplatz Völklingen · Quartiersentwicklung</span>
              <span className="h-px flex-1 bg-white/70" />
              <span className="h-3.5 w-px bg-white" />
            </div>
            <div className="flex max-w-[880px] flex-col gap-7">
              <SectionLabel num="01" light>
                Planungsbüro für Architektur &amp; Tragwerk
              </SectionLabel>
              <h1 className="display text-[clamp(52px,9vw,140px)] tracking-[-0.01em]">
                Planung<span className="text-sky">.</span> Statik<span className="text-sky">.</span>
                <br />
                Visualisierung<span className="text-sky">.</span>
              </h1>
              <p className="max-w-[560px] text-[19px] text-white/90">
                Architektur und Tragwerksplanung aus einer Hand – vom ersten Entwurf bis zum genehmigungsfähigen
                Bauantrag. Büro in Landstuhl, tätig in Rheinland-Pfalz, im Saarland, in Baden-Württemberg und Hessen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn bg-blue text-white hover:text-white">
                  Projekt anfragen →
                </Link>
                <Link href="/projekte" className="btn border border-white text-white hover:text-sky">
                  Referenzen ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-ink bg-paper text-ink">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
            {FACTS.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col gap-1 border-line py-5 sm:px-6 ${i < 3 ? "border-b lg:border-b-0 lg:border-r" : ""} ${i === 0 ? "sm:pl-0" : ""}`}
              >
                <span className="label-sm text-muted">{f.label}</span>
                <span className="display-80 text-[22px]">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <SectionLabel num="02">Leistungen</SectionLabel>
              <h2 className="display display-75 text-[clamp(40px,5vw,64px)] leading-[0.95]">Was wir planen</h2>
              <Link href="/leistungen" className="label self-start border-b border-ink py-3 text-[13px]">
                Alle Leistungen im Detail →
              </Link>
            </div>
            <p className="max-w-[420px] text-ink-2">
              Entwurf, Tragwerk und Nachweise entstehen im selben Büro – das spart Abstimmungsschleifen und sorgt für
              prüffähige Unterlagen beim ersten Einreichen.
            </p>
          </div>
          <div className="border-t-2 border-ink">
            <div className="label-sm hidden grid-cols-[90px_minmax(0,1.2fr)_minmax(0,2fr)_150px] gap-4 border-b border-ink py-2.5 text-muted md:grid">
              <span>Pos.</span>
              <span>Leistung</span>
              <span>Beschreibung</span>
              <span>Disziplin</span>
            </div>
            {SERVICES.map((s) => (
              <Link
                key={s.pos}
                href="/leistungen"
                className="grid grid-cols-1 items-baseline gap-2 border-b border-line py-6 text-ink no-underline md:grid-cols-[90px_minmax(0,1.2fr)_minmax(0,2fr)_150px] md:gap-4"
              >
                <span className="font-mono text-[13px] text-blue">{s.pos}</span>
                <span className="display-80 text-[28px] leading-[1.1]">{s.title}</span>
                <span className="text-ink-2">{s.text}</span>
                <span className="label-sm justify-self-start border border-ink px-2.5 py-1">{s.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zwei Disziplinen */}
      <section className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1280px] px-4 py-24 md:px-8">
          <DisciplineToggle />
        </div>
      </section>

      {/* Projekte */}
      <section id="projekte" className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <SectionLabel num="03">Projekte</SectionLabel>
              <h2 className="display display-75 text-[clamp(40px,5vw,64px)] leading-[0.95]">Auszug unserer Projekte</h2>
            </div>
            <Link href="/projekte" className="label border-b border-ink py-3.5 text-[13px]">
              Alle Projekte ansehen →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <Link key={p.num} href="/projekte" className="flex flex-col gap-4 text-ink no-underline">
                <div className="relative aspect-[4/5] overflow-hidden border border-ink bg-card">
                  <img src={p.cardImg} alt={p.name} className="absolute inset-0 block h-full w-full object-cover" loading="lazy" />
                  <span className="absolute left-0 top-0 border-b border-r border-ink bg-paper px-3 py-2 font-mono text-xs">{p.num}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-ink pt-3.5">
                  <span className="display-80 text-2xl leading-tight">{p.name}</span>
                  <span className="font-mono text-lg text-blue">→</span>
                </div>
                <div className="label-sm flex gap-4 text-muted">
                  <span>{p.cat}</span>
                  <span>·</span>
                  <span>{p.short}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestand → Entwurf */}
      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <SectionLabel num="Bauen im Bestand">Rathausstraße 29–33, Völklingen</SectionLabel>
              <h2 className="display display-75 text-[clamp(40px,5vw,64px)] leading-[0.95]">
                Vom Bestand
                <br />
                zum Entwurf
              </h2>
            </div>
            <p className="max-w-[420px] text-ink-2">
              Aufmaß, Tragwerk prüfen, neu denken: Aus der ehemaligen Röchlingbank wird ein Quartier für Wohnen und Gewerbe.
            </p>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)]">
            <figure className="m-0 flex flex-col gap-2.5">
              <div className="relative aspect-[4/5] overflow-hidden border border-ink bg-card">
                <img src="/projekte/rathausplatz/bestand.jpg" alt="Bestand Rathausstraße 29–33 vor dem Umbau" className="absolute inset-0 block h-full w-full object-cover grayscale contrast-[1.05]" loading="lazy" />
                <span className="label absolute left-0 top-0 border-b border-r border-ink bg-paper px-3 py-2">Bestand</span>
              </div>
              <figcaption className="label-sm text-muted">Vorher · Foto Bestand</figcaption>
            </figure>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="w-px flex-1 bg-ink" />
              <span className="grid h-10 w-10 place-items-center border border-ink bg-blue font-mono text-lg text-white md:h-11 md:w-11">→</span>
              <span className="w-px flex-1 bg-ink" />
            </div>
            <figure className="m-0 flex flex-col gap-2.5">
              <div className="relative aspect-[4/5] overflow-hidden border border-ink bg-card">
                <img src="/projekte/rathausplatz/entwurf-front.jpg" alt="Entwurf Frontfassade Rathausstraße 29–33" className="absolute inset-0 block h-full w-full object-cover" loading="lazy" />
                <span className="label absolute left-0 top-0 border-b border-r border-ink bg-blue px-3 py-2 text-white">Entwurf</span>
              </div>
              <figcaption className="label-sm text-muted">Nachher · Rendering DEM Planung</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="border-b border-ink bg-sand">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-4 py-24 md:px-8">
          <div className="flex flex-col gap-4">
            <SectionLabel num="04">Ablauf</SectionLabel>
            <h2 className="display display-75 text-[clamp(40px,5vw,64px)] leading-[0.95]">Von der Idee zur Genehmigung</h2>
            <Link href="/ablauf" className="label self-start border-b border-ink py-3 text-[13px]">
              Ablauf im Detail →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[STEPS[1], STEPS[2], STEPS[3], STEPS[4]].map((st) => (
              <div key={st.num} className="flex flex-col gap-4 pr-7">
                <div className="flex items-center">
                  <span className="h-3.5 w-3.5 flex-none border-2 border-ink bg-sand" />
                  <span className="h-0.5 flex-1 bg-ink" />
                </div>
                <span className="label text-blue">{st.lph}</span>
                <span className="display-80 text-[26px] leading-[1.1]">{st.title}</span>
                <span className="text-ink-2">{st.text.split(". ")[0].replace(/\.?$/, ".")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <SectionLabel num="05">Team</SectionLabel>
              <h2 className="display display-75 text-[clamp(40px,5vw,64px)] leading-[0.95]">Die Planer</h2>
            </div>
            <p className="max-w-[460px] text-ink-2">
              Architektur und Bauingenieurwesen – zwei Blickwinkel auf jedes Bauvorhaben, ein gemeinsamer Ansprechpartner für Sie.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              { img: "/team/mehmet.jpg", role: "Bauingenieurwesen · Tragwerk", name: "Mehmet Ali Demirci", focus: "Architektur · Tragwerksplanung · Baukosten", q: ["↳ Bauvorlageberechtigt, Ingenieurkammer Saarland", "↳ Tragwerksplaner · B.Eng. Bauingenieurwesen"] },
              { img: "/team/furkan.jpg", role: "Architektur · Visualisierung", name: "Furkan Demirci", focus: "Architektur · Visualisierung · Bestandsaufnahme", q: ["↳ B.A. Architektur", "↳ Entwurf, Genehmigungsplanung, Renderings"] },
            ].map((m) => (
              <Link key={m.name} href="/ueber-uns" className="flex flex-wrap border border-ink text-ink no-underline">
                <div className="relative min-h-[260px] flex-[1_1_200px] overflow-hidden border-ink bg-card sm:border-r">
                  <img src={m.img} alt={m.name} className="absolute inset-0 block h-full w-full object-cover object-top grayscale contrast-[1.05]" loading="lazy" />
                </div>
                <div className="flex flex-[2_1_260px] flex-col gap-3.5 p-7">
                  <span className="label-sm text-blue">{m.role}</span>
                  <span className="display-80 text-3xl leading-[1.05]">{m.name}</span>
                  <span className="text-ink-2">{m.focus}</span>
                  <div className="flex flex-col gap-1.5 border-t border-line pt-3.5 font-mono text-xs text-ink-2">
                    {m.q.map((q) => (
                      <span key={q}>{q}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt-CTA */}
      <section id="kontakt" className="bg-stone text-ink">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-8 px-4 py-[88px] md:px-8">
          <div className="flex max-w-[720px] flex-col gap-4">
            <span className="label">06 — Kontakt</span>
            <h2 className="display display-75 text-[clamp(40px,5.4vw,72px)] leading-[0.95]">Sie planen ein Bauvorhaben?</h2>
            <p className="text-lg">
              Schicken Sie uns Lageplan, Fotos oder eine kurze Beschreibung – Sie erhalten eine Einschätzung zu Verfahren,
              Leistungsumfang und Honorar.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/kontakt" className="btn bg-white text-ink">
              Projekt anfragen →
            </Link>
            <a href={SITE.phoneFurkan.href} className="btn border border-ink text-ink">
              {SITE.phoneFurkan.label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
