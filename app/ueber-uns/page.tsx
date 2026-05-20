"use client";

import { useState } from "react";

type Person = "mehmet" | "furkan";

const furkanData = {
  name: "Furkan Demirci",
  timeline: [
    [
      "2020 – 2025",
      "Studium Bachelor of Arts Architektur an der Hochschule Kaiserslautern",
    ],
    [
      "01/2026 – 05/2026",
      "Selbstständig als freiberuflicher Bachelor of Arts",
    ],
    ["Seit 05/2026", "Geschäftsführer DEM-Planung"],
  ],

  kompetenzen: [
    "Entwurf und Entwicklung moderner Wohn- und Quartierskonzepte",
    "Fotorealistische Architekturvisualisierung für Vermarktung und Planung",
    "Digitale Bestandsaufnahme und präzise Gebäudeerfassung",
    "Flächenberechnungen und Kostenermittlungen nach aktuellen Normen",
    "Optimierung von Grundrissen unter funktionalen und wirtschaftlichen Aspekten",
    "Professionelle Projektaufbereitung für Bauherren, Investoren und Behörden",
  ],

  tools: [
    "Vectorworks",
    "ArchiCAD",
    "Twinmotion",
    "Lumion",
    "Enscape",
    "Photoshop",
    "InDesign",
  ],

  email: "f.demirci@dem-planung.de",
  phone: "+49 176 724 611 07",
};

const mehmetData = {
  name: "Mehmet Ali Demirci",

  timeline: [
    ["2016 – 2020", "Studium Bauingenieurwesen an der HTW des Saarlandes"],
    ["02/2018 – 01/2021", "Angestellt bei Planungsbüro Bohnert"],
    ["02/2021 – 03/2025", "Geschäftsführer bei den KD-Ingenieuren"],
    ["03/2025 – 04/2026", "Geschäftsführer bei der DMA-Planung"],
    ["Seit 05/2026", "Geschäftsführer bei der DEM-Planung"],
  ],

  kompetenzen: [
    "Architekturplanung und Entwicklung funktionaler Gebäudekonzepte",
    "Tragwerksplanung und statische Berechnungen im Hochbau",
    "Erstellung prüffähiger Statiknachweise",
    "Genehmigungsplanung und Bauantragsunterlagen",
    "Entwurfs- und Ausführungsgrundrisse",
    "Kostenberechnung und wirtschaftliche Projektbewertung",
    "Fachbauleitung, Vor-Ort-Betreuung und statische Abnahmen",
  ],

  qualifikationen: [
    "Eingetragen in der Ingenieurkammer des Saarlandes",
  ],

  email: "ma.demirci@dem-planung.de",
  phone: "+49 176 637 814 72",
};

export default function UeberUnsPage() {
  const [activePerson, setActivePerson] =
    useState<Person>("mehmet");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f8f8] text-[#061a33]">
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <img
            src="/buro.png"
            alt="DEM Planung Büro"
            className="h-[320px] w-full rounded-2xl object-cover object-right shadow-xl md:h-[650px] md:rounded-[32px] md:shadow-2xl"
          />

          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500 md:text-sm md:tracking-[0.35em]">
              Unsere Geschichte
            </p>

            <h1 className="mb-7 text-3xl font-black leading-tight md:mb-10 md:text-5xl">
              DEM Planung
            </h1>

            <div className="space-y-5 text-sm leading-7 text-slate-600 md:space-y-8 md:text-[17px] md:leading-9">
              <p>
                Die DEM Planung wurde im Jahr 2026 gegründet
                und steht für moderne, wirtschaftliche und präzise
                Planungslösungen im Bereich Architektur,
                Tragwerksplanung und Projektentwicklung.
              </p>

              <p>
                Bereits vor der gemeinsamen Gründung sammelten die
                verantwortlichen Planer mehrjährige praktische
                Erfahrung in unterschiedlichsten Bauvorhaben.
              </p>

              <p>
                Heute begleitet die DEM Planung Projekte von der
                ersten Idee bis zur genehmigungsfähigen Umsetzung —
                mit einem klaren Fokus auf Funktionalität,
                Wirtschaftlichkeit und gestalterische Qualität.
              </p>

              <p>
                Durch die Verbindung aus Architektur,
                Bestandsaufnahme, Tragwerksplanung und
                Visualisierung entstehen ganzheitliche Lösungen aus
                einer Hand.
              </p>
            </div>

            <div className="mt-9 border-l-4 border-[#061a33] pl-5 md:mt-14 md:pl-6">
              <p className="text-lg font-semibold leading-relaxed md:text-2xl">
                Unser Anspruch ist es, Gestaltung, Präzision und
                technische Qualität in Einklang zu bringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-6 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500 md:text-sm md:tracking-[0.35em]">
              Team
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              Geschäftsführer
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <TeamCard
                active={activePerson === "mehmet"}
                onClick={() => setActivePerson("mehmet")}
                image="/mehmet.jpeg"
                name="Mehmet Ali Demirci"
                role="Architektur · Tragwerksplanung · Baukosten"
              />

              {activePerson === "mehmet" && (
                <div className="mt-8 md:hidden">
                  <DetailBox {...mehmetData} />
                </div>
              )}
            </div>

            <div>
              <TeamCard
                active={activePerson === "furkan"}
                onClick={() => setActivePerson("furkan")}
                image="/furkan.jpg"
                name="Furkan Demirci"
                role="Architektur · Visualisierung · Bestandsaufnahme"
              />

              {activePerson === "furkan" && (
                <div className="mt-8 md:hidden">
                  <DetailBox {...furkanData} />
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 hidden md:block">
            {activePerson === "mehmet" && (
              <DetailBox {...mehmetData} />
            )}

            {activePerson === "furkan" && (
              <DetailBox {...furkanData} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamCard({
  active,
  onClick,
  image,
  name,
  role,
}: {
  active: boolean;
  onClick: () => void;
  image: string;
  name: string;
  role: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full overflow-hidden rounded-2xl text-left transition-all duration-300 md:rounded-3xl ${
        active
          ? "scale-[1.01] shadow-2xl ring-4 ring-[#061a33] md:ring-8"
          : "shadow-xl hover:scale-[1.01] hover:shadow-2xl"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="h-[420px] w-full object-cover md:h-[620px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 p-5 text-white md:p-8">
        <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/70 md:mb-3 md:text-xs md:tracking-[0.3em]">
          Geschäftsführer
        </p>

        <h3 className="mb-2 text-2xl font-black md:text-4xl">
          {name}
        </h3>

        <p className="text-sm text-white/80 md:text-lg">
          {role}
        </p>
      </div>
    </button>
  );
}

function DetailBox({
  name,
  timeline,
  kompetenzen,
  qualifikationen,
  tools,
  email,
  phone,
}: {
  name: string;
  timeline: string[][];
  kompetenzen: string[];
  qualifikationen?: string[];
  tools?: string[];
  email: string;
  phone: string;
}) {
  return (
    <div className="grid max-h-none gap-10 overflow-visible rounded-2xl border border-slate-100 bg-white p-5 shadow-xl md:rounded-[32px] md:p-12 lg:max-h-[620px] lg:grid-cols-[1.5fr_0.8fr] lg:gap-14 lg:overflow-y-auto">
      <div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-[#061a33]/60 md:text-[13px]">
          Geschäftsführer
        </p>

        <h2 className="mb-8 text-3xl font-black text-[#061a33] md:mb-14 md:text-5xl">
          {name}
        </h2>

        <div className="mb-10 space-y-6 md:mb-16 md:space-y-8">
          {timeline.map(([date, text]) => (
            <TimelineItem key={date} date={date} text={text} />
          ))}
        </div>

        <InfoList title="Kompetenzen" items={kompetenzen} />

        {qualifikationen && name === "Mehmet Ali Demirci" && (
          <div className="mt-10 md:mt-14">
            <h3 className="mb-5 text-xl font-black uppercase md:mb-8 md:text-2xl">
              Qualifikationen
            </h3>

            <div className="space-y-5 text-slate-700">
              <div className="flex gap-4">
                <div className="h-8 w-[3px] rounded-full bg-[#061a33]" />

                <p className="text-sm leading-7 md:text-base md:leading-8">
                  Eingetragen in der Ingenieurkammer des
                  Saarlandes
                </p>
              </div>

              <div className="ml-8 flex gap-4">
                <span className="text-xl text-[#061a33]">
                  ↳
                </span>

                <div>
                  <p className="text-sm leading-7 md:text-base md:leading-8">
                    Bauvorlagenberechtigt
                  </p>

                  <p className="text-xs text-slate-500 md:text-sm">
                    seit 10/2024
                  </p>
                </div>
              </div>

              <div className="ml-8 flex gap-4">
                <span className="text-xl text-[#061a33]">
                  ↳
                </span>

                <div>
                  <p className="text-sm leading-7 md:text-base md:leading-8">
                    Eingetragen als Tragwerksplaner
                  </p>

                  <p className="text-xs text-slate-500 md:text-sm">
                    seit 10/2024
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-8 w-[3px] rounded-full bg-[#061a33]" />

                <p className="text-sm leading-7 md:text-base md:leading-8">
                  Bachelor of Engineering –
                  Bauingenieurwesen
                </p>
              </div>
            </div>
          </div>
        )}

        {tools && (
          <div className="mt-10 md:mt-14">
            <h3 className="mb-5 text-xl font-black uppercase md:mb-8 md:text-2xl">
              Software · Tools
            </h3>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-[#061a33]/10 px-3 py-2 text-xs font-semibold text-[#061a33] md:px-4 md:text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <ContactBox email={email} phone={phone} />
    </div>
  );
}

function TimelineItem({
  date,
  text,
}: {
  date: string;
  text: string;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-6">
      <div className="text-sm font-bold text-[#061a33] md:text-base">
        {date}
      </div>

      <div className="border-l-2 border-[#061a33] pl-5 text-sm leading-7 text-slate-700 md:pl-6 md:text-base md:leading-8">
        {text}
      </div>
    </div>
  );
}

function InfoList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-black uppercase md:mb-8 md:text-2xl">
        {title}
      </h3>

      <div className="space-y-3 md:space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3 md:gap-4">
            <div className="mt-1 h-auto min-h-6 w-[3px] shrink-0 rounded-full bg-[#061a33]" />

            <p className="text-sm leading-7 text-slate-700 md:text-base md:leading-8">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactBox({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) {
  return (
    <div className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
      <div className="space-y-8 lg:sticky lg:top-0 lg:pt-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-500 md:text-sm">
            Kontakt
          </p>

          <p className="break-all text-base font-semibold text-[#061a33] md:text-xl">
            {email}
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-500 md:text-sm">
            Telefon
          </p>

          <p className="text-base font-semibold text-[#061a33] md:text-xl">
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
}