"use client";

import { useState } from "react";
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
    image:"/bestandsaufnahme.png",
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
  const [active, setActive] = useState(0);
  const current = services[active];
  const CurrentIcon = current.icon;

  return (
    <main className="min-h-screen bg-white text-[#061a33]">
      {/* TABS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <button
                key={service.title}
                onClick={() => setActive(index)}
                className={`h-28 flex items-center justify-center gap-4 px-6 border-r border-slate-200 transition ${
                  active === index
                    ? "bg-white shadow-lg border-b-4 border-b-[#061a33]"
                    : "hover:bg-slate-50"
                }`}
              >
                <Icon className="w-8 h-8 text-[#061a33]" />

                <span className="hidden lg:block font-bold leading-tight">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl grid lg:grid-cols-[0.8fr_1.4fr] h-[760px] overflow-hidden">
        {/* TEXT */}
        <div className="px-6 py-20 lg:pr-16 h-full">
          <div>
            <h1 className="text-5xl font-black tracking-tight">
              {current.title}
            </h1>

            <h2 className="mt-5 text-2xl font-black uppercase">
              {current.subtitle}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              {current.text}
            </p>
          </div>

          <div>
            <div className="mt-10 h-px w-12 bg-[#061a33]" />

            <h3 className="mt-8 text-xl font-black">Unsere Leistungen</h3>

            <div className="mt-6 space-y-4">
              {current.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-slate-100 pb-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#061a33] shrink-0" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-full min-h-[420px]">
          <img
  src={current.image}
  alt={current.title}
  className="absolute inset-0 h-full w-full object-cover object-[55%_center]"
/>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 h-40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#061a33] flex items-center justify-center shrink-0">
              <CurrentIcon className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-black">
                Sie planen ein Bauvorhaben?
              </h3>

              <p className="text-slate-600 mt-1">
                Wir unterstützen Sie mit Planung, Statik und Visualisierung aus
                einer Hand.
              </p>
            </div>
          </div>

          <a
            href="/kontakt"
            className="bg-[#061a33] text-white px-8 py-4 rounded-md flex items-center gap-4"
          >
            Projekt anfragen <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}