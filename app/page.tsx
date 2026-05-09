"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Building2,
  ScanLine,
  Calculator,
  Box,
} from "lucide-react";

const services = [
  {
    title: "Bauantrag & Planung",
    text: "Ganzheitliche Planung von der ersten Idee bis zur Genehmigung.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Statik",
    text: "Tragwerksplanung mit Präzision und Wirtschaftlichkeit.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Bestandsaufnahme",
    text: "Digitale und analoge Erfassung für sichere Grundlagen.",
    icon: ScanLine,
    image: "/bestandsaufnahme.png",
  },
  {
    title: "Flächen & Kosten",
    text: "Transparente Flächenermittlung und Kostenschätzung.",
    icon: Calculator,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Renderings",
    text: "Realistische Visualisierungen für Präsentation und Planung.",
    icon: Box,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop",
  },
];

const projects = [
  {
    title: "Rathausplatz Völklingen",
    subtitle: "Quartiersentwicklung",
    image: "/projekte/rathausplatz/frontansicht.png",
  },
  {
    title: "BIZZLIVING Baumholder",
    subtitle: "Bestandssanierung",
    image: "/projekte/baumholder/aussenanlage-1.png",
  },
  {
    title: "Bad Soden-Salmünster",
    subtitle: "Quartiersentwicklung",
    image: "/projekte/bad-soden/anlage.png",
  },
];

function Hero() {
  return (
    <section className="relative min-h-[520px] md:min-h-[680px] overflow-hidden">
      <img
        src="/hero.png"
        alt="DEM Planung Projekt"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_56%]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/20 md:bg-gradient-to-r md:from-white md:via-white/85 md:to-transparent" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 md:min-h-[680px] md:px-6">
        <div className="max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#061a33] md:mb-6 md:text-sm">
            DEM Planung
          </p>

          <h1 className="text-4xl font-black leading-[1.05] text-[#061a33] sm:text-5xl md:text-6xl">
            PLANUNG.
            <br />
            STATIK.
            <br />
            VISUALISIERUNG.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-700 md:mt-7 md:text-base">
            Architektur, Planung, Statik und Visualisierung aus einer Hand.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              href="/leistungen"
              key={service.title}
              className="group grid grid-cols-[48px_1fr] items-start gap-4 border-b border-slate-200 py-6 md:grid-cols-[80px_1fr_1.2fr_260px_40px] md:items-center md:gap-8 md:py-5"
            >
              <Icon className="h-8 w-8 text-[#061a33] md:h-9 md:w-9" />

              <h2 className="text-lg font-black text-[#061a33] md:text-xl">
                {service.title}
              </h2>

              <p className="col-span-2 text-sm leading-6 text-slate-600 md:col-span-1">
                {service.text}
              </p>

              <img
                src={service.image}
                alt={service.title}
                className="col-span-2 h-44 w-full rounded-md object-cover opacity-90 transition group-hover:opacity-100 md:col-span-1 md:h-24 md:rounded-none md:opacity-80"
              />

              <ArrowRight className="hidden text-[#061a33] transition group-hover:translate-x-1 md:block" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-slate-500 md:text-sm">
            Projekte
          </p>

          <h2 className="text-3xl font-black leading-tight text-[#061a33] md:text-4xl">
            Auszug unserer Projekte
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-7">
          {projects.map((project) => (
            <Link href="/projekte" key={project.title} className="group">
              <div className="overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 md:h-56"
                />
              </div>

              <h3 className="mt-4 text-lg font-black text-[#061a33] md:mt-5">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projekte"
            className="flex w-full max-w-xs items-center justify-center gap-4 border border-[#061a33] px-6 py-4 text-sm font-medium text-[#061a33] transition hover:bg-[#061a33] hover:text-white md:w-auto md:max-w-none md:px-8"
          >
            Alle Projekte ansehen <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Hero />
      <Services />
      <Projects />
    </main>
  );
}