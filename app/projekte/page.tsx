"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  MapPin,
  CalendarDays,
} from "lucide-react";

const projects = [
  {
    title: "Danziger Straße, Ramstein-Miesenbach",
    tag: "Modern",
    type: "Mehrfamilienhaus",
    detail: "Mehrfamilienhaus",
    location: "Ramstein-Miesenbach",
    time: "2021 – 2023",
    gallery: [
      { title: "Außenansicht", image: "/danziger-aussenansicht.png" },
      { title: "Schlafzimmer 1", image: "/danziger-schlafzimmer-1.png" },
      { title: "Schlafzimmer 2", image: "/danziger-schlafzimmer-2.png" },
      { title: "Wohnzimmer", image: "/danziger-wohnzimmer.png" },
      { title: "Grundriss Erdgeschoss", image: "/danziger-grundriss-eg.png" },
    ],
    text:
      "Modernes Wohnkonzept mit klarer Formsprache und hochwertiger Innenraumgestaltung. Durchdachte Grundrisse und eine warme Materialwahl schaffen ein harmonisches Wohnumfeld mit hoher Aufenthaltsqualität.",
    about:
      "Hier wurde ein Mehrfamilienhaus mit drei Wohneinheiten geplant. Unser Leistungsumfang umfasste insbesondere hochwertige Innen- und Außenvisualisierungen zur realitätsnahen Darstellung des Projekts. Die Visualisierungen zeigen die geplante Architektur sowie die spätere Wohnatmosphäre und vermitteln eine realitätsnahe Vorstellung des Projekts.",
  },
  {
    title: "Am Franzenbrunnen, Saarbrücken",
    tag: "Modern",
    type: "Mehrfamilienhaus",
    detail: "Mehrfamilienhaus",
    location: "Saarbrücken",
    time: "ab Juli 2026 – ca. 2 Jahre",
    gallery: [
      { title: "Frontansicht", image: "/projekte/franzenbrunnen/front.png" },
      { title: "Erdgeschoss", image: "/projekte/franzenbrunnen/erdgeschoss.png" },
      { title: "Südansicht", image: "/projekte/franzenbrunnen/suedansicht.png" },
      { title: "Nordansicht", image: "/projekte/franzenbrunnen/nordansicht.png" },
    ],
    text:
      "Entwicklung eines modernen Mehrfamilienhauses im Neubaugebiet mit klarer Architektursprache und hochwertiger Wohnqualität.",
    about:
      "Das Bauvorhaben „Am Franzenbrunnen“ umfasst die Planung eines modernen Mehrfamilienhauses mit zwei Wohneinheiten in einem neu erschlossenen Wohngebiet in Saarbrücken. Unser Büro war in diesem Projekt für die Leistungsphasen 1–4 verantwortlich.",
  },
  {
    title: "Bad Soden-Salmünster",
    tag: "Vielseitig",
    type: "Wohn- & Gesundheitsquartier",
    detail: "Neubauprojekt",
    location: "Bad Soden-Salmünster",
    time: "ab 2026 - ca. 2029",
    gallery: [
      { title: "Gesamtanlage", image: "/projekte/bad-soden/anlage.png" },
      { title: "Innenhof", image: "/projekte/bad-soden/innenhof.jpg" },
      { title: "Kindergarten", image: "/projekte/bad-soden/kindergarten.jpg" },
      { title: "Intensivpflege 1", image: "/projekte/bad-soden/intensiv-1.png" },
      { title: "Intensivpflege 2", image: "/projekte/bad-soden/intensiv 2.png" },
      { title: "Wohnung 1 Schlafzimmer", image: "/projekte/bad-soden/whg-1-schlafzimmer.png" },
      { title: "Wohnung 1 Bad", image: "/projekte/bad-soden/whg-1-bad.png" },
      { title: "Wohnung 2 Küche", image: "/projekte/bad-soden/whg-2-kueche.png" },
      { title: "Wohnung 2 Schlafzimmer", image: "/projekte/bad-soden/whg-2-schlafen.png" },
    ],
    text:
      "Entwicklung eines modernen Wohn- und Gesundheitsquartiers mit hochwertigen Wohnbereichen, Intensivpflege, Kindergarten und großzügigen Außenanlagen.",
    about:
      "Das Bauvorhaben „An den Augärten“ in Bad Soden-Salmünster umfasst die Entwicklung eines ganzheitlich geplanten Quartiers mit unterschiedlichen Nutzungen. Unser Büro begleitet das Projekt in sämtlichen Leistungsphasen von LPH 1–9.",
  },
  {
    title: "Quartier Rathausblick Völklingen",
    tag: "Urban",
    type: "Wohn- & Gewerbeprojekt",
    detail: "Quartiersentwicklung",
    location: "Völklingen, Rathausstraße 29-33",
    time: "ab Oktober 2026 – ca. 2030",
    gallery: [
      { title: "Frontansicht", image: "/projekte/rathausplatz/frontansicht.png" },
      { title: "Hinterhofansicht 1", image: "/projekte/rathausplatz/hinterhof-1.png" },
      { title: "Hinterhofansicht 2", image: "/projekte/rathausplatz/hinterhof-2.png" },
      { title: "Studentenwohnung Visualisierung 1", image: "/projekte/rathausplatz/studentenwohnung-1.png" },
      { title: "Studentenwohnung Visualisierung 2", image: "/projekte/rathausplatz/studentenwohnung-2.png" },
      { title: "Grundriss Studentenwohnung", image: "/projekte/rathausplatz/grundriss-studentenwohnung.jpg" },
      { title: "Seniorenwohnung Visualisierung", image: "/projekte/rathausplatz/seniorenwohnung.png" },
      { title: "Grundriss Seniorenwohnung", image: "/projekte/rathausplatz/grundriss-seniorenwohnung.jpg" },
      { title: "Penthouse Visualisierung 1", image: "/projekte/rathausplatz/penthouse-1.png" },
      { title: "Penthouse Visualisierung 2", image: "/projekte/rathausplatz/penthouse-2.jpeg" },
      { title: "Penthouse Visualisierung 3", image: "/projekte/rathausplatz/penthouse-3.png" },
      { title: "Grundriss Penthouse", image: "/projekte/rathausplatz/grundriss-penthouse.png" },
    ],
    text:
      "Entwicklung eines urbanen Wohn- und Gewerbequartiers mit Studentenapartments, Seniorenwohnungen, Penthouse-Wohnungen und begrüntem Innenhof.",
    about:
      "Das Bauvorhaben „Rathausplatz 29–33“ in Völklingen umfasst die Entwicklung eines modernen innerstädtischen Quartiers mit gemischter Nutzung aus Wohnen, Gewerbe und sozialen Wohnformen.",
  },
  {
    title: "Quartier Bizz-Living, Baumholder",
    tag: "Urban",
    type: "Wohnquartier",
    detail: "Neubauprojekt",
    location: "In der Bitz 19-35, 55774 Baumholder",
    time: "ab 2025 - 2026",
    gallery: [
      { title: "Außenanlage 1", image: "/projekte/baumholder/aussenanlage-1.png" },
      { title: "Außenanlage 2", image: "/projekte/baumholder/aussenanlage-2.png" },
      { title: "Wohnzimmer", image: "/projekte/baumholder/wohnzimmer.png" },
      { title: "Schlafzimmer", image: "/projekte/baumholder/schlafzimmer.png" },
      { title: "Badezimmer", image: "/projekte/baumholder/badezimmer.png" },
      { title: "Kinderzimmer", image: "/projekte/baumholder/kinderzimmer.png" },
      { title: "Grundriss", image: "/projekte/baumholder/grundriss-baumholder.png" },
    ],
    text:
      "Modernes Wohnquartier mit hochwertigen Apartments, klarer Architektursprache und modernen Innenraumkonzepten.",
    about:
      "Bei BIZZLIVING handelt es sich um die umfassende Sanierung und Modernisierung eines bestehenden Wohngebäudes mit insgesamt 54 Wohneinheiten in Baumholder.",
  },
];

export default function ProjektePage() {
  const [zoomed, setZoomed] = useState(false);
  const [active, setActive] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = projects[active];

  function nextImage() {
    setActiveImage((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  }

  function prevImage() {
    setActiveImage((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#061a33]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-6 md:py-8">
          <div className="flex gap-4 overflow-x-auto pb-4 md:gap-5">
            {projects.map((item, index) => (
              <button
                key={item.title}
                onClick={() => {
                  setActive(index);
                  setActiveImage(0);
                  setZoomed(false);
                  setLightboxOpen(false);
                }}
                className={`min-w-[250px] overflow-hidden rounded-2xl border bg-white text-left transition md:min-w-[340px] md:rounded-3xl ${
                  active === index
                    ? "border-[#061a33] shadow-lg md:shadow-xl"
                    : "border-slate-200 hover:border-[#061a33]/40"
                }`}
              >
                <div className="relative h-28 w-full overflow-hidden md:h-36">
                  <img
                    src={item.gallery[0].image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {active === index && (
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-[#061a33]" />
                  )}
                </div>

                <div className="p-4 md:p-5">
                  <h3 className="text-sm font-black leading-snug md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 md:text-sm">
                    {item.location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:px-6 md:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <p className="mb-4 text-sm text-slate-500 md:mb-5 md:text-base">
            {project.tag}
          </p>

          <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-[#061a33] md:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <div className="mt-6 h-px w-14 bg-[#061a33] md:mt-8" />

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-700 md:mt-8 md:text-lg md:leading-9">
            {project.text}
          </p>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-14 md:gap-10">
            <InfoItem icon={<Building2 className="h-5 w-5 md:h-6 md:w-6" />} title="Wohnprojekt" value={project.type} />
            <InfoItem icon={<MapPin className="h-5 w-5 md:h-6 md:w-6" />} title="Standort" value={project.location} />
            <InfoItem icon={<CalendarDays className="h-5 w-5 md:h-6 md:w-6" />} title="Bauzeit" value={project.time} />
          </div>

          <div className="mt-9 flex items-center md:mt-12">
            <a
              href="/kontakt"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#061a33] px-6 py-4 text-sm font-semibold text-white md:w-auto md:gap-4 md:px-8 md:text-base"
            >
              Projekt anfragen <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-9 md:mt-16 md:pt-12">
            <h2 className="mb-5 text-2xl font-black text-[#061a33] md:mb-6 md:text-3xl">
              Über das Projekt
            </h2>

            <p className="max-w-xl text-sm leading-7 text-slate-700 md:text-lg md:leading-9">
              {project.about}
            </p>
          </div>
        </div>

        <div>
          <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-xl md:h-[520px] md:rounded-[32px] md:shadow-2xl lg:h-[620px]">
            <img
              src={project.gallery[activeImage].image}
              alt={project.gallery[activeImage].title}
              onClick={() => {
                setLightboxOpen(true);
                setZoomed(false);
              }}
              className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
            />

            <button onClick={prevImage} className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#061a33] text-white md:left-6 md:h-14 md:w-14">
              <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <button onClick={nextImage} className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#061a33] text-white md:right-6 md:h-14 md:w-14">
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="absolute bottom-5 left-5 text-white md:bottom-8 md:left-8">
              <p className="text-xs opacity-90 md:text-sm">
                {activeImage + 1} / {project.gallery.length}
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <h3 className="mb-4 text-xl font-black text-[#061a33] md:mb-6 md:text-2xl">
              Impressionen
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveImage(index);
                    setZoomed(false);
                  }}
                  className={`overflow-hidden rounded-xl border ${
                    activeImage === index ? "border-[#061a33]" : "border-slate-200"
                  }`}
                >
                  <img src={image.image} alt={image.title} className="h-24 w-full object-cover md:h-28" />
                  <p className="p-2 text-left text-[11px] leading-4 text-slate-600 md:text-xs">
                    {image.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-6 md:py-12">
          <div>
            <h3 className="text-2xl font-black md:text-4xl">
              Sie planen ein Bauvorhaben?
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-lg">
              Wir unterstützen Sie mit Planung, Statik und Visualisierung aus einer Hand.
            </p>
          </div>

          <a href="/kontakt" className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#061a33] px-6 py-4 text-sm text-white md:w-auto md:gap-5 md:px-10 md:py-5 md:text-base">
            Projekt anfragen <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/90">
          <button onClick={() => setLightboxOpen(false)} className="absolute right-5 top-5 z-50 text-4xl text-white">
            ×
          </button>

          <img
            src={project.gallery[activeImage].image}
            alt={project.gallery[activeImage].title}
            onClick={() => setZoomed(!zoomed)}
            className={`max-h-[85vh] max-w-[90vw] object-contain transition-transform duration-300 ${
              zoomed ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            }`}
          />

          <button onClick={prevImage} className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur md:left-6 md:h-14 md:w-14">
            <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button onClick={nextImage} className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur md:right-6 md:h-14 md:w-14">
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      )}
    </main>
  );
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div>
      <div className="mb-3 text-[#061a33] md:mb-4">{icon}</div>
      <p className="text-sm font-black md:text-base">{title}</p>
      <p className="mt-1 text-sm leading-6 text-slate-500 md:mt-2 md:leading-7">
        {value}
      </p>
    </div>
  );
}