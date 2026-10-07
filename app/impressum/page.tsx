import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von DEM Planung – Furkan Demirci, Kolpingstraße 27, 66849 Landstuhl.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage
      code="R1"
      title="Impressum"
      sections={[
        {
          id: "anbieter",
          toc: "Anbieter",
          title: "Angaben gemäß § 5 DDG",
          body: (
            <p className="m-0">
              Furkan Demirci
              <br />
              DEM PLANUNG – Planungsbüro (freiberuflich tätig)
              <br />
              {SITE.street}
              <br />
              {SITE.city}
            </p>
          ),
        },
        {
          id: "kontakt",
          toc: "Kontakt",
          title: "Kontakt",
          body: (
            <p className="m-0">
              Telefon: <a href={SITE.phoneFurkan.href}>{SITE.phoneFurkan.label}</a>
              <br />
              E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          ),
        },
        {
          id: "steuer",
          toc: "Steuer",
          title: "Steuer",
          body: <p className="m-0">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE459181387</p>,
        },
        {
          id: "beruf",
          toc: "Berufsrecht",
          title: "Berufsrechtliche Angaben",
          body: (
            <>
              <p className="m-0">
                <strong>Furkan Demirci</strong>
                <br />
                Akademischer Grad: Bachelor of Arts (Architektur), verliehen in der Bundesrepublik Deutschland
                <br />
                Keine Kammermitgliedschaft.
              </p>
              <p className="m-0">
                <strong>Kooperationspartner: Mehmet Ali Demirci</strong>
                <br />
                Ingenieur (B.Eng. Bauingenieurwesen), Mitglied der Ingenieurkammer des Saarlandes, Franz-Josef-Röder-Straße
                9, 66119 Saarbrücken, <a href="https://www.ing-saarland.de">www.ing-saarland.de</a>
                <br />
                Eingetragen in die Liste der Bauvorlageberechtigten sowie als Tragwerksplaner. Bauvorlageberechtigte
                Leistungen und Tragwerksplanung werden durch ihn erbracht.
              </p>
              <p className="m-0">
                Es gelten die berufsrechtlichen Regelungen des Saarländischen Architekten- und Ingenieurkammergesetzes
                (SAIG) sowie die Satzungen der Ingenieurkammer des Saarlandes, einsehbar unter{" "}
                <a href="https://www.ing-saarland.de">www.ing-saarland.de</a>.
              </p>
            </>
          ),
        },
        {
          id: "redaktion",
          toc: "Inhaltlich verantwortlich",
          title: "Inhaltlich verantwortlich",
          body: (
            <p className="m-0">
              Verantwortlich nach § 18 Abs. 2 MStV:
              <br />
              Furkan Demirci, {SITE.street}, {SITE.city}
            </p>
          ),
        },
        {
          id: "streit",
          toc: "Streitbeilegung",
          title: "Verbraucherstreitbeilegung",
          body: (
            <p className="m-0">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          ),
        },
        {
          id: "haftung",
          toc: "Haftung & Urheberrecht",
          title: "Haftung & Urheberrecht",
          body: (
            <>
              <p className="m-0">
                <strong>Haftung für Inhalte.</strong> Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
                die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als
                Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte verantwortlich.
              </p>
              <p className="m-0">
                <strong>Haftung für Links.</strong> Unsere Website enthält gegebenenfalls Links zu externen Websites
                Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links
                umgehend.
              </p>
              <p className="m-0">
                <strong>Urheberrecht.</strong> Pläne, Renderings, Fotos und Texte auf dieser Website sind
                urheberrechtlich geschützt und Eigentum von Furkan Demirci (DEM PLANUNG) bzw. der jeweiligen Bauherren.
                Jede Verwendung außerhalb der Grenzen des Urheberrechts bedarf unserer vorherigen schriftlichen Zustimmung.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
