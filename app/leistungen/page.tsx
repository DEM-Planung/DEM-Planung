"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  FileText,
  Building2,
  Ruler,
  Calculator,
  Box,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Bauantrag & Planung",
    subtitle: "LPH 1–4",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    text: "Wir begleiten Bauvorhaben von der ersten Idee bis zur genehmigungsfähigen Planung. Mit Erfahrung, Präzision und einem klaren Blick für Machbarkeit und Wirtschaftlichkeit.",
    items: [
      "Grundlagenermittlung",
      "Vorplanung und Entwurf",
      "Genehmigungsplanung",
      "Bauantragsunterlagen",
      "Abstimmung mit Behörden",
    ],
  },
  {
    title: "Statik",
    subtitle: "TRAGWERKSPLANUNG",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    text: "Wir entwickeln sichere und wirtschaftliche Tragwerkslösungen für Neubau, Umbau und Sanierung – abgestimmt auf Architektur, Nutzung und Ausführung.",
    items: [
      "Statische Berechnungen",
      "Tragwerkskonzepte",
      "Nachweise für Bauteile und Konstruktionen",
      "Ausführungsplanung im Bereich Tragwerk",
      "Abstimmung mit Architektur und Fachplanern",
    ],
  },
  {
    title: "Bestandsaufnahme",
    subtitle: "INNENAUFMASS",
    icon: Ruler,
    image: "/bestandsaufnahme.png",
    text: "Wir erfassen bestehende Gebäude präzise im Innenbereich und erstellen daraus verlässliche digitale Grundlagen für Planung, Umbau und Genehmigung.",
    items: [
      "Aufmaß von Innenräumen",
      "Digitale Bestandsgrundrisse",
      "Schnitte und Ansichten nach Bedarf",
      "Raum- und Flächenermittlung",
      "Dokumentation des Bestands",
    ],
  },
  {
    title: "Flächen & Kosten",
    subtitle: "TRANSPARENTE GRUNDLAGEN",
    icon: Calculator,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    text: "Wir erstellen verlässliche Flächen- und Kostengrundlagen für Planung, Finanzierung und Bauentscheidungen – nachvollziehbar und normgerecht.",
    items: [
      "Wohnflächenberechnung nach WoFlV",
      "Nutzflächenberechnung nach DIN 277",
      "Baukostenschätzung nach DIN 276",
      "Kostengruppenübersicht nach DIN 276",
      "Plausible Grundlagen für Bank, Bauherr und Planung",
    ],
  },
  {
    title: "Renderings & 360° Touren",
    subtitle: "ENTWÜRFE ERLEBBAR MACHEN",
    icon: Box,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    text: "Mit hochwertigen Visualisierungen und interaktiven 360° Touren machen wir Projekte schon vor Baubeginn erlebbar – für klare Vorstellungen und überzeugende Präsentationen.",
    items: [
      "Hochwertige 3D-Renderings",
      "Interaktive 360° Touren",
      "Echtzeitvisualisierung",
      "Präsentationen für Bauherren und Vermarktung",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <Suspense fallback={null}>
      <LeistungenContent />
    </Suspense>
  );
}

function LeistungenContent() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const tab = searchParams.get("tab");

    if (tab === "planung") setActive(0);
    if (tab === "statik") setActive(1);
    if (tab === "bestand") setActive(2);
    if (tab === "flaechen") setActive(3);
    if (tab === "renderings") setActive(4);
  }, [searchParams]);

  const current = services[active];
  const CurrentIcon = current.icon;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#061a33]">
      {/* TABS */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-6 md:py-6">
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.title}
                  onClick={() => setActive(index)}
                  className={`flex min-w-[150px] items-center justify-center gap-2 rounded-full border px-4 py-3 text-xs font-semibold transition md:min-w-0 md:rounded-2xl md:py-5 md:text-sm ${
                    active === index
                      ? "border-[#061a33] bg-[#061a33] text-white shadow-md"
                      : "border-slate-200 bg-white text-[#061a33] hover:border-[#061a33]/40"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 md:h-6 md:w-6 ${
                      active === index ? "text-white" : "text-[#061a33]"
                    }`}
                  />

                  <span className="whitespace-nowrap md:hidden">
                    {service.title}
                  </span>

                  <span className="hidden leading-tight md:block">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden lg:grid-cols-[0.8fr_1.4fr]">
        <div className="px-5 py-10 md:px-6 md:py-14 lg:py-20 lg:pr-16">
          <h1 className="text-3xl font-black tracking-tight md:text-5xl">
            {current.title}
          </h1>

          <h2 className="mt-4 text-lg font-black uppercase md:mt-5 md:text-2xl">
            {current.subtitle}
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-700 md:mt-8 md:text-lg md:leading-8">
            {current.text}
          </p>

          <div className="mt-8 h-px w-12 bg-[#061a33] md:mt-10" />

          <h3 className="mt-6 text-lg font-black md:mt-8 md:text-xl">
            Unsere Leistungen
          </h3>

          <div className="mt-5 space-y-3 md:mt-6 md:space-y-4">
            {current.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-b border-slate-100 pb-3 md:items-center md:gap-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#061a33] md:mt-0 md:h-5 md:w-5" />
                <span className="text-sm font-medium text-slate-800 md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[280px] md:h-[420px] lg:h-auto lg:min-h-[760px]">
          <img
            src={current.image}
            alt={current.title}
            className="absolute inset-0 h-full w-full object-cover object-[55%_center]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 md:px-6 md:py-12 lg:h-40 lg:flex-row lg:items-center lg:justify-between lg:py-0">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#061a33] md:h-16 md:w-16">
              <CurrentIcon className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div>
              <h3 className="text-xl font-black md:text-2xl">
                Sie planen ein Bauvorhaben?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600 md:text-base">
                Wir unterstützen Sie mit Planung, Statik und Visualisierung aus
                einer Hand.
              </p>
            </div>
          </div>

          <a
            href="/kontakt"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#061a33] px-6 py-4 text-sm text-white md:w-auto md:gap-4 md:px-8 md:text-base"
          >
            Projekt anfragen <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}