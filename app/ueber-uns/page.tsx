"use client";

import { useState } from "react";

type Person = "furkan" | "mehmet";

export default function UeberUnsPage() {
  const [activePerson, setActivePerson] = useState<Person>("furkan");

  return (
    <main className="bg-[#f8f8f8] min-h-screen text-[#061a33]">
      {/* ÜBER UNS / GESCHICHTE */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <img
              src="/buro.png"
              alt="DEM Planung Büro"
              className="w-full h-[650px] object-cover object-right rounded-[32px] shadow-2xl"
            />
          </div>

          <div className="max-w-xl">
            <p className="uppercase tracking-[0.35em] text-sm text-slate-500 mb-4">
              Unsere Geschichte
            </p>

            <h1 className="text-5xl font-black leading-tight mb-10">
              DEM Planung GmbH
            </h1>

            <div className="space-y-8 text-[17px] leading-9 text-slate-600">
              <p>
                Die DEM Planung GmbH wurde im Jahr 2026 gegründet und steht für
                moderne, wirtschaftliche und präzise Planungslösungen im Bereich
                Architektur, Tragwerksplanung und Projektentwicklung.
              </p>

              <p>
                Bereits vor der gemeinsamen Gründung sammelten die
                verantwortlichen Planer mehrjährige praktische Erfahrung in
                unterschiedlichsten Bauvorhaben und entwickelten ihre Kompetenzen
                kontinuierlich in den Bereichen Planung, Bestandsentwicklung und
                Bauumsetzung weiter.
              </p>

              <p>
                Heute begleitet die DEM Planung GmbH Projekte von der ersten
                Idee bis zur genehmigungsfähigen Umsetzung — mit einem klaren
                Fokus auf Funktionalität, Wirtschaftlichkeit und gestalterische
                Qualität.
              </p>

              <p>
                Durch die Verbindung aus Architektur, Bestandsaufnahme,
                Tragwerksplanung und Visualisierung entstehen ganzheitliche
                Lösungen aus einer Hand.
              </p>
            </div>

            <div className="mt-14 border-l-4 border-[#061a33] pl-6">
              <p className="text-2xl font-semibold leading-relaxed">
                Unser Anspruch ist es, Gestaltung, Präzision und technische
                Qualität in Einklang zu bringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.35em] text-sm text-slate-500 mb-3">
              Team
            </p>

            <h2 className="text-5xl font-black">Geschäftsführer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <button
              onClick={() => setActivePerson("furkan")}
              className={`relative overflow-hidden rounded-3xl transition-all duration-300 text-left ${
                activePerson === "furkan"
                  ? "ring-8 ring-[#061a33] scale-[1.01] shadow-2xl"
                  : "shadow-xl hover:shadow-2xl hover:scale-[1.01]"
              }`}
            >
              <img
                src="/furkan.jpg"
                alt="Furkan Demirci"
                className="w-full h-[620px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-3">
                  Geschäftsführer
                </p>

                <h3 className="text-4xl font-black mb-2">Furkan Demirci</h3>

                <p className="text-lg text-white/80">
                  Architektur · Visualisierung · Bestandsaufnahme
                </p>
              </div>
            </button>

            <button
              onClick={() => setActivePerson("mehmet")}
              className={`relative overflow-hidden rounded-3xl transition-all duration-300 text-left ${
                activePerson === "mehmet"
                  ? "ring-8 ring-[#061a33] scale-[1.01] shadow-2xl"
                  : "shadow-xl hover:shadow-2xl hover:scale-[1.01]"
              }`}
            >
              <img
                src="/mehmet.png"
                alt="Mehmet Ali Demirci"
                className="w-full h-[620px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-3">
                  Geschäftsführer
                </p>

                <h3 className="text-4xl font-black mb-2">
                  Mehmet Ali Demirci
                </h3>

                <p className="text-lg text-white/80">
                  Tragwerksplanung · Statik · Baukosten
                </p>
              </div>
            </button>
          </div>

          {/* DETAILBOX */}
          {activePerson === "furkan" && (
            <div className="bg-white rounded-[32px] shadow-xl p-12 grid lg:grid-cols-[1.5fr_0.8fr] gap-14 border border-slate-100 max-h-[620px] overflow-y-auto">
              <div>
                <p className="text-[13px] uppercase tracking-[0.25em] text-[#061a33]/60 mb-3">
                  Geschäftsführer
                </p>

                <h2 className="text-5xl font-black text-[#061a33] mb-14">
                  Furkan Demirci
                </h2>

                <div className="space-y-8 mb-16">
                  <TimelineItem
                    date="2020 – 2025"
                    text="Studium Bachelor of Arts Architektur an der Hochschule Kaiserslautern"
                  />

                  <TimelineItem
                    date="01/2026 – 09/2026"
                    text="Selbstständig als freiberuflicher Bachelor of Arts"
                  />

                  <TimelineItem
                    date="Seit 09/2026"
                    text="Geschäftsführer DEM-Planung GmbH"
                  />
                </div>

                <InfoList
                  title="Kompetenzen"
                  items={[
                    "Entwurf und Entwicklung moderner Wohn- und Quartierskonzepte",
                    "Fotorealistische Architekturvisualisierung für Vermarktung und Planung",
                    "Digitale Bestandsaufnahme und präzise Gebäudeerfassung",
                    "Flächenberechnungen und Kostenermittlungen nach aktuellen Normen",
                    "Optimierung von Grundrissen unter funktionalen und wirtschaftlichen Aspekten",
                    "Professionelle Projektaufbereitung für Bauherren, Investoren und Behörden",
                  ]}
                />

                <div className="mt-14">
                  <h3 className="text-2xl font-black uppercase mb-8">
                    Software · Tools
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Vectorworks",
                      "ArchiCAD",
                      "Twinmotion",
                      "Lumion",
                      "Enscape",
                      "Photoshop",
                      "InDesign",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-full bg-[#061a33]/10 text-[#061a33] text-sm font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <ContactBox
                email="f.demirci@dem-planung.de"
                phone="+49 176 724 611 07"
              />
            </div>
          )}

          {activePerson === "mehmet" && (
            <div className="bg-white rounded-[32px] shadow-xl p-12 grid lg:grid-cols-[1.5fr_0.8fr] gap-14 border border-slate-100 max-h-[620px] overflow-y-auto">
              <div>
                <p className="text-[13px] uppercase tracking-[0.25em] text-[#061a33]/60 mb-3">
                  Geschäftsführer
                </p>

                <h2 className="text-5xl font-black text-[#061a33] mb-14">
                  Mehmet Ali Demirci
                </h2>

                <div className="space-y-8 mb-16">
                  <TimelineItem
                    date="2016 – 2020"
                    text="Studium Bauingenieurwesen an der HTW des Saarlandes"
                  />

                  <TimelineItem
                    date="02/2020 – 01/2021"
                    text="Angestellt bei Planungsbüro Bohnert"
                  />

                  <TimelineItem
                    date="02/2021 – 03/2025"
                    text="Geschäftsführer bei den KD-Ingenieuren"
                  />

                  <TimelineItem
                    date="03/2025 – 09/2026"
                    text="Geschäftsführer bei der DMA-Planung"
                  />

                  <TimelineItem
                    date=" seit 09/2026"
                    text="Geschäftsführer bei der DEM-Planung GmbH"
                  />
                </div>

                <InfoList
                  title="Kompetenzen"
                  items={[
                    "Tragwerksplanung und statische Berechnungen im Hochbau",
                    "Erstellung prüffähiger Statiknachweise",
                    "Genehmigungsplanung und Bauantragsunterlagen",
                    "Entwurfs- und Ausführungsgrundrisse",
                    "Kostenberechnung und wirtschaftliche Projektbewertung",
                    "Fachbauleitung, Vor-Ort-Betreuung und statische Abnahmen",
                  ]}
                />

                <div className="mt-14">
                  <InfoList
                    title="Qualifikationen"
                    items={[
                      "Eingetragen in der Ingenieurkammer des Saarlandes",
                      "Bauvorlagenberechtigt",
          
                      "Bachelor of Engineering – Bauingenieurwesen",
                    ]}
                  />
                </div>
              </div>

              <ContactBox
                email="ma.demirci@dem-planung.de"
                phone="+49 176 637 814 72"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function TimelineItem({ date, text }: { date: string; text: string }) {
  return (
    <div className="grid md:grid-cols-[180px_1fr] gap-6">
      <div className="font-bold text-[#061a33]">{date}</div>

      <div className="border-l-2 border-[#061a33] pl-6 text-slate-700 leading-8">
        {text}
      </div>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-2xl font-black uppercase mb-8">{title}</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-4">
            <div className="w-[3px] min-h-6 bg-[#061a33] rounded-full mt-1" />
            <p className="text-slate-700 leading-8">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactBox({ email, phone }: { email: string; phone: string }) {
  return (
    <div className="border-l border-slate-200 pl-12">
      <div className="sticky top-0 pt-2 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">
            Kontakt
          </p>

          <p className="text-xl font-semibold text-[#061a33]">{email}</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">
            Telefon
          </p>

          <p className="text-xl font-semibold text-[#061a33]">{phone}</p>
        </div>
      </div>
    </div>
  );
}