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
      "Modernes Wohnkonzept mit klarer Formsprache und hochwertiger Innenraumgestaltung.Durchdachte Grundrisse und eine warme Materialwahl schaffen ein harmonisches Wohnumfeld mit hoher Aufenthaltsqualität.",

    about:
      "Hier wurde ein Mehrfamilienhaus mit drei Wohneinheiten geplant. Unser Leistungsumfang umfasste insbesondere hochwertige Innen- und Außenvisualisierungen zur realitätsnahen Darstellung des Projekts. Die Visualisierungen zeigen die geplant Architektur, sowie die spätere Wohnatmosphäre und vermitteln eine realitätsnahe Vorstellung des Projekts. Die dienten als Grundlage für Entscheidungsprozesse und die Vermarktung des Bauvorhabens.",
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
      "Das Bauvorhaben umfasst die Planung eines modernen Mehrfamilienhauses mit zwei Wohneinheiten in einem neu erschlossenen Wohngebiet.",
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
      "Für das Projekt in Bad Soden-Salmünster wurden moderne Wohn- und Nutzungskonzepte mit Fokus auf Aufenthaltsqualität, Architektur und realistischer Visualisierung entwickelt. Unser Leistungsumfang umfasste hochwertige Innen- und Außenvisualisierungen zur ganzheitlichen Darstellung des Projekts.",
  },
  {
  title: "Quartier Rathausblick Völklingen",
  tag: "Urban",
  type: "Wohn- & Gewerbeprojekt",
  detail: "Quartiersentwicklung",
  location: "Völklingen, Rathausstraße 29-33",
  time: "ab Oktober 2026 – ca. 2030",

  gallery: [
    {
      title: "Frontansicht",
      image: "/projekte/rathausplatz/frontansicht.png",
    },
    {
      title: "Hinterhofansicht 1",
      image: "/projekte/rathausplatz/hinterhof-1.png",
    },
    {
      title: "Hinterhofansicht 2",
      image: "/projekte/rathausplatz/hinterhof-2.png",
    },
    {
      title: "Studentenwohnung Visualisierung 1",
      image: "/projekte/rathausplatz/studentenwohnung-1.png",
    },
    {
      title: "Studentenwohnung Visualisierung 2",
      image: "/projekte/rathausplatz/studentenwohnung-2.png",
    },
    {
      title: "Grundriss Studentenwohnung",
      image: "/projekte/rathausplatz/grundriss-studentenwohnung.jpg",
    },
    {
      title: "Seniorenwohnung Visualisierung",
      image: "/projekte/rathausplatz/seniorenwohnung.png",
    },
    {
      title: "Grundriss Seniorenwohnung",
      image: "/projekte/rathausplatz/grundriss-seniorenwohnung.jpg",
    },
    {
      title: "Penthouse Visualisierung 1",
      image: "/projekte/rathausplatz/penthouse-1.png",
    },
    {
      title: "Penthouse Visualisierung 2",
      image: "/projekte/rathausplatz/penthouse-2.jpeg",
    },
    {
      title: "Penthouse Visualisierung 3",
      image: "/projekte/rathausplatz/penthouse-3.png",
    },
    {
      title: "Grundriss Penthouse",
      image: "/projekte/rathausplatz/grundriss-penthouse.png",
    },
  ],

  text:
    "Entwicklung eines urbanen Wohn- und Gewerbequartiers mit Studentenapartments, Seniorenwohnungen, Penthouse-Wohnungen und begrüntem Innenhof.",

  about:
    "Das Bauvorhaben Rathausplatz 29–33 in Völklingen umfasst die Entwicklung eines modernen, innerstädtischen Quartiers mit gemischter Nutzung aus Wohnen und Gewerbe. Geplant sind Studentenapartments, Seniorenwohnungen sowie hochwertige Penthouse-Wohnungen. Ergänzt wird das Konzept durch einen großzügig begrünten Innenhof, der Aufenthaltsqualität schafft und das Quartier nach innen aufwertet.",
},
{
  title: "Quartier Bizz-Living, Baumholder",
  tag: "Urban",
  type: "Wohnquartier",
  detail: "Neubauprojekt",
  location: "in der Bitz 19-35,55774 Baumholder",
  time: "ab 2025 - 2026",

  gallery: [
    {
      title: "Außenanlage 1",
      image: "/projekte/baumholder/aussenanlage-1.png",
    },
    {
      title: "Außenanlage 2",
      image: "/projekte/baumholder/aussenanlage-2.png",
    },
    {
      title: "Wohnzimmer",
      image: "/projekte/baumholder/wohnzimmer.png",
    },
    {
      title: "Schlafzimmer",
      image: "/projekte/baumholder/schlafzimmer.png",
    },
    {
      title: "Badezimmer",
      image: "/projekte/baumholder/badezimmer.png",
    },
    {
      title: "Kinderzimmer",
      image: "/projekte/baumholder/kinderzimmer.png",
    },
    {
      title: "Grundriss",
      image: "/projekte/baumholder/grundriss-baumholder.png",
    },
  ],

  text:
    "Modernes Wohnquartier mit hochwertigen Apartments, klarer Architektursprache und modernen Innenraumkonzepten.",

  about:
    "Für das Projekt Quartier Bizz-Living in Baumholder wurden moderne Wohnkonzepte mit Fokus auf Aufenthaltsqualität, zeitgemäßer Architektur und realistischer Visualisierung entwickelt. Der Leistungsumfang umfasste hochwertige Innen- und Außenvisualisierungen sowie die Darstellung der Grundrisskonzepte.",
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
    <main className="min-h-screen bg-white text-[#061a33]">
      {/* PROJEKT LEISTE */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex gap-5 overflow-x-auto pb-4">
            {projects.map((item, index) => (
              <button
                key={item.title}
                onClick={() => {
                  setActive(index);
                  setActiveImage(0);
                  setZoomed(false);
                  setLightboxOpen(false);
                }}
                className={`min-w-[340px] overflow-hidden rounded-3xl border bg-white transition text-left ${
                  active === index
                    ? "border-[#061a33] shadow-xl"
                    : "border-slate-200 hover:border-[#061a33]/40"
                }`}
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={item.gallery[0].image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {active === index && (
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-[#061a33]" />
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-black text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    {item.location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
        {/* LINKS */}
        <div>
          <p className="text-slate-500 mb-5">{project.tag}</p>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#061a33]">
            {project.title}
          </h1>

          <div className="mt-8 h-px w-14 bg-[#061a33]" />

          <p className="mt-8 text-lg leading-9 text-slate-700 max-w-xl">
            {project.text}
          </p>

          <div className="mt-14 grid grid-cols-3 gap-10">
            <InfoItem
              icon={<Building2 className="w-6 h-6" />}
              title="Wohnprojekt"
              value={project.type}
            />

            <InfoItem
              icon={<MapPin className="w-6 h-6" />}
              title="Standort"
              value={project.location}
            />

            <InfoItem
              icon={<CalendarDays className="w-6 h-6" />}
              title="Bauzeit"
              value={project.time}
            />
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="/kontakt"
              className="inline-flex items-center gap-4 bg-[#061a33] text-white px-8 py-4 rounded-lg font-semibold"
            >
              Projekt anfragen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* ABOUT */}
          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="text-3xl font-black mb-6 text-[#061a33]">
              Über das Projekt
            </h2>

            <p className="text-lg leading-9 text-slate-700 max-w-xl">
              {project.about}
            </p>
          </div>
        </div>

        {/* RECHTS */}
        <div>
          <div className="relative h-[620px] rounded-[32px] overflow-hidden shadow-2xl">
            <img
              src={project.gallery[activeImage].image}
              alt={project.gallery[activeImage].title}
              onClick={() => {
                setLightboxOpen(true);
                setZoomed(false);
              }}
              className="absolute inset-0 h-full w-full object-cover cursor-zoom-in"
            />

            <button
              onClick={() => {
                prevImage();
                setZoomed(false);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#061a33] text-white flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => {
                nextImage();
                setZoomed(false);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#061a33] text-white flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            <div className="absolute left-8 bottom-8 text-white">
              <p className="text-sm opacity-90">
                {activeImage + 1} / {project.gallery.length}
              </p>
            </div>
          </div>

          {/* IMPRESSIONEN */}
          <div className="mt-10">
            <h3 className="text-2xl font-black mb-6 text-[#061a33]">
              Impressionen
            </h3>

            <div className="grid grid-cols-5 gap-4">
              {project.gallery.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveImage(index);
                    setZoomed(false);
                  }}
                  className={`rounded-xl overflow-hidden border ${
                    activeImage === index
                      ? "border-[#061a33]"
                      : "border-slate-200"
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="h-28 w-full object-cover"
                  />

                  <p className="text-xs text-left p-2 text-slate-600">
                    {image.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-4xl font-black">
              Sie planen ein Bauvorhaben?
            </h3>

            <p className="mt-3 text-slate-600 text-lg">
              Wir unterstützen Sie mit Planung, Statik und Visualisierung aus
              einer Hand.
            </p>
          </div>

          <a
            href="/kontakt"
            className="bg-[#061a33] text-white px-10 py-5 rounded-xl flex items-center gap-5"
          >
            Projekt anfragen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center overflow-hidden">
          <button
            onClick={() => {
              setLightboxOpen(false);
              setZoomed(false);
            }}
            className="absolute top-6 right-6 text-white text-4xl z-50"
          >
            ×
          </button>

          <img
            src={project.gallery[activeImage].image}
            alt={project.gallery[activeImage].title}
            onClick={() => setZoomed(!zoomed)}
            className={`max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-300 ${
              zoomed
                ? "scale-125 cursor-zoom-out"
                : "scale-100 cursor-zoom-in"
            }`}
          />

          <button
            onClick={() => {
              setActiveImage(
                activeImage === 0
                  ? project.gallery.length - 1
                  : activeImage - 1
              );
              setZoomed(false);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              setActiveImage(
                activeImage === project.gallery.length - 1
                  ? 0
                  : activeImage + 1
              );
              setZoomed(false);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center"
          >
            <ArrowRight className="w-6 h-6" />
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
      <div className="mb-4 text-[#061a33]">{icon}</div>

      <p className="font-black">{title}</p>

      <p className="text-slate-500 mt-2 leading-7">{value}</p>
    </div>
  );
}