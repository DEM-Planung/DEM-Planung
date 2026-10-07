import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Projekt anfragen bei DEM Planung, Kolpingstraße 27, 66849 Landstuhl – Telefon, E-Mail und Kontaktformular.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        num="06"
        label="Kontakt"
        title="Projekt anfragen"
        intro="Beschreiben Sie kurz Ihr Vorhaben – gern mit Fotos, Lageplan oder Bestandsplänen. Wir melden uns mit einer ersten Einschätzung zu Verfahren und Leistungsumfang."
      />

      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-start gap-12 px-4 pb-24 pt-16 md:px-8">
          <div className="min-w-0 flex-[2_1_560px] border border-ink bg-white">
            <div className="label-sm flex justify-between gap-4 border-b border-ink bg-ink px-5 py-3 text-paper">
              <span>Formular · Projektanfrage</span>
              <span>* Pflichtfeld</span>
            </div>
            <ContactForm />
          </div>

          <aside className="flex min-w-0 flex-[1_1_320px] flex-col border-t-2 border-ink">
            <div className="flex flex-col gap-1.5 border-b border-line py-5">
              <span className="label-sm text-muted">Telefon</span>
              <a href={SITE.phoneFurkan.href} className="display-80 text-2xl no-underline">{SITE.phoneFurkan.label}</a>
              <a href={SITE.phoneMehmet.href} className="display-80 text-2xl no-underline">{SITE.phoneMehmet.label}</a>
            </div>
            <div className="flex flex-col gap-1.5 border-b border-line py-5">
              <span className="label-sm text-muted">E-Mail</span>
              <a href={`mailto:${SITE.email}`} className="display-80 text-2xl no-underline">{SITE.email}</a>
            </div>
            <div className="flex flex-col gap-1.5 border-b border-line py-5">
              <span className="label-sm text-muted">Büro</span>
              <span className="text-lg">
                DEM PLANUNG
                <br />
                {SITE.street}
                <br />
                {SITE.city}
              </span>
            </div>
            <div className="flex flex-col gap-3 py-5">
              <span className="label-sm text-muted">Tätigkeitsgebiet</span>
              <div className="flex flex-wrap gap-2">
                {["Rheinland-Pfalz", "Saarland", "Baden-Württemberg", "Hessen"].map((r) => (
                  <span key={r} className="border border-ink px-2.5 py-1.5 text-sm">{r}</span>
                ))}
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-2 bg-ink p-5 text-paper">
              <span className="label-sm text-sky">Tipp</span>
              <span className="text-[15px]">
                Je mehr wir vorab wissen – Fotos, Lageplan, alte Baupläne –, desto genauer wird unsere erste Einschätzung.
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
