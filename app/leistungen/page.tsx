import type { Metadata } from "next";
import Link from "next/link";
import ServiceAccordion from "@/components/ServiceAccordion";
import { LEISTUNGEN } from "@/lib/leistungen";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leistungen – Bauantrag, Statik, Wohnflächenberechnung",
  description:
    "Bauantrag erstellen lassen, Statik, Wohnflächenberechnung nach WoFlV, Nutzungsänderung, Bestandsaufnahme und Renderings – Planungsbüro DEM Planung aus Landstuhl bei Kaiserslautern.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        num="02"
        label="Leistungen"
        title="Was wir planen"
        intro="Fünf Leistungsbereiche, ein Büro: Sie können uns für das komplette Paket von der Bestandsaufnahme bis zum Bauantrag beauftragen – oder für einzelne Bausteine wie Statik, Flächenberechnung oder Renderings."
      >
        <div className="flex flex-wrap gap-2">
          {LEISTUNGEN.map((l) => (
            <Link
              key={l.slug}
              href={`/leistungen/${l.slug}`}
              className="border border-ink bg-paper px-3 py-2 font-mono text-[13px] text-ink no-underline hover:text-blue"
            >
              {l.nav} →
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="border-b border-ink">
        <div className="mx-auto max-w-[1280px] px-4 pb-24 pt-14 md:px-8">
          <ServiceAccordion />
        </div>
      </section>

      <section className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-4 md:grid-cols-2 md:px-8">
          <div className="flex flex-col gap-3.5 border-b border-night py-14 md:border-b-0 md:border-r md:pr-8">
            <span className="label text-sky">Paket</span>
            <span className="display display-75 text-[40px] leading-none">Alles aus einer Hand</span>
            <span className="text-stone">
              Bestandsaufnahme, Entwurf, Statik und Bauantrag abgestimmt mit unserem Partnerbüro – ein Ansprechpartner, abgestimmte Pläne,
              keine Schnittstellenverluste.
            </span>
          </div>
          <div className="flex flex-col gap-3.5 py-14 md:pl-8">
            <span className="label text-sky">Einzelleistung</span>
            <span className="display display-75 text-[40px] leading-none">Genau der Baustein, der fehlt</span>
            <span className="text-stone">
              Sie haben schon einen Planer und brauchen nur die Statik, eine Wohnflächenberechnung für die Bank oder
              Renderings für die Vermarktung? Auch das übernehmen wir.
            </span>
          </div>
        </div>
      </section>

      <CtaBand title="Welche Leistung brauchen Sie?" />
    </>
  );
}
