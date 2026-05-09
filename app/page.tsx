"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Building2,
  ScanLine,
  Calculator,
  Box,
  MapPin,
  Phone,
  Mail,
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
    image: "/bestandsaufnahme.png"
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

function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <img
        src="/hero.png"
        alt="DEM - Planung Projekt"
        className="absolute inset-0 h-full w-full object-cover object-[center_50%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 min-h-[600px] flex items-center">
        <div className="max-w-xl">
          <p className="text-sm tracking-[0.35em] uppercase text-[#061a33] mb-6">
            DEM Planung
          </p>

          <h1 className="text-6xl font-black leading-[1.05] text-[#061a33]">
            PLANUNG.
            <br />
            STATIK.
            <br />
            VISUALISIERUNG.
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#061a33]">
            Alles aus einer Hand.
            <br />
            Effizient. Präzise. Persönlich.
          </p>

          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-4 bg-[#061a33] text-white px-7 py-4 rounded-md"
          >
            Projekt anfragen <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              href="/leistungen"
              key={service.title}
              className="grid grid-cols-[80px_1fr_1.2fr_260px_40px] items-center gap-8 border-b border-slate-200 py-5 group"
            >
              <Icon className="w-9 h-9 text-[#061a33]" />

              <h2 className="text-xl font-black text-[#061a33]">
                {service.title}
              </h2>

              <p className="text-sm leading-6 text-slate-600">
                {service.text}
              </p>

              <img
                src={service.image}
                alt={service.title}
                className="h-24 w-full object-cover opacity-80 group-hover:opacity-100 transition"
              />

              <ArrowRight className="text-[#061a33] group-hover:translate-x-1 transition" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.35em] uppercase text-slate-500 mb-4">
            Projekte
          </p>

          <h2 className="text-4xl font-black text-[#061a33]">
            Auszug unserer Projekte
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {projects.map((project) => (
            <Link href="/projekte" key={project.title} className="group">
              <div className="overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-5 text-lg font-black text-[#061a33]">
                {project.title}
              </h3>

              <p className="text-sm text-slate-600 mt-1">
                {project.subtitle}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projekte"
            className="border border-[#061a33] px-8 py-4 flex items-center gap-4 text-[#061a33] font-medium hover:bg-[#061a33] hover:text-white transition"
          >
            Alle Projekte ansehen <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-10">
        
      </div>


    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}