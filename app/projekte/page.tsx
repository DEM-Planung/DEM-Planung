import type { Metadata } from "next";
import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import { CtaBand, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Referenzen von DEM Planung: Quartiersentwicklung Rathausplatz Völklingen, Am Franzenbrunnen Saarbrücken, BIZZLIVING Baumholder und Danziger Straße Ramstein-Miesenbach.",
  alternates: { canonical: "/projekte" },
};

export default function ProjektePage() {
  return (
    <>
      <section className="bg-raster">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-4 pb-8 pt-16 md:px-8 md:pt-[72px]">
          <SectionLabel num="03">Referenzen</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="display text-[clamp(56px,8vw,120px)]">
              Projekte<span className="text-blue">.</span>
            </h1>
            <p className="max-w-[460px] text-ink-2">
              Eine Auswahl aus Neubau, Umnutzung und Bestandssanierung – jeweils mit Rendering und den Plänen, die
              dahinterstehen.
            </p>
          </div>
        </div>
        <ProjectList />
      </section>

      <section className="bg-raster border-y border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-8 px-4 py-[72px] md:px-8">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-4">
            <span className="label text-blue">P–05 bis P–∞</span>
            <h2 className="display display-75 text-[clamp(36px,4.4vw,56px)] leading-[0.95]">Das ist nur ein Auszug.</h2>
            <p className="max-w-[620px] text-lg text-ink-2">
              Neben diesen Referenzen haben wir zahlreiche weitere Projekte geplant – vom Einfamilienhaus über
              Nutzungsänderungen bis zum Mehrfamilienhaus im Bestand. Sie möchten mehr sehen, etwa Projekte, die Ihrem
              Vorhaben ähneln? Sprechen Sie uns gerne an.
            </p>
          </div>
          <Link href="/kontakt" className="btn border border-ink text-ink">
            Weitere Referenzen anfragen →
          </Link>
        </div>
      </section>

      <CtaBand title="Ihr Projekt als nächstes?" />
    </>
  );
}
