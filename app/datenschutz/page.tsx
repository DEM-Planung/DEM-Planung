import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { OpenCookieSettingsButton } from "@/components/CookieConsent";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von DEM Planung, Landstuhl.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      code="08"
      title={<>Datenschutz&shy;erklärung</>}
      sections={[
        {
          id: "verantwortlicher",
          toc: "Verantwortlicher",
          title: "Verantwortlicher",
          body: (
            <>
              <p className="m-0">
                Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung
                (DSGVO) ist:
              </p>
              <p className="m-0">
                Furkan Demirci · DEM PLANUNG
                <br />
                {SITE.street}, {SITE.city}
                <br />
                Telefon: {SITE.phoneFurkan.label} · E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </>
          ),
        },
        {
          id: "allgemein",
          toc: "Allgemeines",
          title: "Allgemeines",
          body: (
            <p className="m-0">
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website und zur
              Bearbeitung Ihrer Anfragen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b DSGVO
              (Vertrag bzw. vorvertragliche Maßnahmen), lit. c (rechtliche Verpflichtung) und lit. f DSGVO (berechtigtes
              Interesse an einem sicheren und funktionsfähigen Internetauftritt). Wir verkaufen keine Daten und setzen keine
              Analyse-, Werbe- oder Tracking-Dienste ein.
            </p>
          ),
        },
        {
          id: "hosting",
          toc: "Hosting",
          title: "Hosting & Server-Logfiles",
          body: (
            <>
              <p className="m-0">
                Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf
                der Website werden technisch notwendige Daten in Server-Logfiles verarbeitet: IP-Adresse, Datum und Uhrzeit
                des Zugriffs, aufgerufene Seite, Referrer-URL, Browser und Betriebssystem.
              </p>
              <p className="m-0">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt
                in der sicheren und stabilen Bereitstellung der Website. Vercel ist unter dem EU-US Data Privacy Framework
                zertifiziert; die Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der EU-Kommission
                (Art. 45 DSGVO). Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO (Data
                Processing Addendum), der die EU-Standardvertragsklauseln einschließt.
              </p>
            </>
          ),
        },
        {
          id: "anfragen",
          toc: "Kontaktformular",
          title: "Kontaktformular, E-Mail & Telefon",
          body: (
            <>
              <p className="m-0">
                Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren, verarbeiten wir Ihre
                Angaben (Name, Kontaktdaten, Angaben zum Bauvorhaben, ggf. hochgeladene Unterlagen) zur Bearbeitung Ihrer
                Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag abzielt, im
                Übrigen Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className="m-0">
                Die Formulardaten werden über unseren Hosting-Anbieter Vercel (siehe Abschnitt 03) verarbeitet und per
                E-Mail an unser Postfach weitergeleitet. Für E-Mails nutzen wir Microsoft 365 / Outlook der Microsoft
                Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18,
                Irland. Mit Microsoft besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO; soweit Daten in die
                USA übermittelt werden, ist die Microsoft Corporation unter dem EU-US Data Privacy Framework zertifiziert.
              </p>
              <p className="m-0">
                Wir löschen Ihre Daten, sobald sie für den Zweck nicht mehr erforderlich sind; kommt ein Auftrag zustande,
                gelten die gesetzlichen Aufbewahrungsfristen (insbesondere nach HGB und AO).
              </p>
            </>
          ),
        },
        {
          id: "schriften",
          toc: "Schriftarten",
          title: "Schriftarten",
          body: (
            <p className="m-0">
              Die auf dieser Website verwendeten Schriftarten sind lokal auf unserem Server eingebunden. Beim Seitenaufruf
              wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern hergestellt.
            </p>
          ),
        },
        {
          id: "cookies",
          toc: "Cookies",
          title: "Cookies & Cookie-Einstellungen",
          body: (
            <>
              <p className="m-0">
                <strong>Notwendige Cookies bzw. Speichertechniken</strong> sind für den Betrieb der Website erforderlich,
                etwa um Ihre Cookie-Auswahl im lokalen Speicher Ihres Browsers zu hinterlegen. Sie werden auf Grundlage von
                § 25 Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO eingesetzt.
              </p>
              <p className="m-0">
                <strong>Analyse-, Marketing- oder Tracking-Cookies setzen wir nicht ein.</strong> Es werden keine Daten an
                Werbe- oder Analysedienste übermittelt. Sollten wir solche Dienste künftig nutzen, holen wir vorher Ihre
                Einwilligung ein (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO) und ergänzen diese Erklärung.
              </p>
              <p className="m-0">Die verwendeten Cookies können Sie jederzeit hier einsehen:</p>
              <OpenCookieSettingsButton />
            </>
          ),
        },
        {
          id: "rechte",
          toc: "Ihre Rechte",
          title: "Ihre Rechte",
          body: (
            <>
              <p className="m-0">
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
                Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie auf Widerspruch gegen
                Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Eine erteilte Einwilligung können
                Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3). Wenden Sie sich dazu einfach an{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
              <p className="m-0">
                Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist
                der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz, Hintere Bleiche 34,
                55116 Mainz.
              </p>
            </>
          ),
        },
        {
          id: "sicherheit",
          toc: "SSL/TLS",
          title: "SSL-/TLS-Verschlüsselung",
          body: (
            <p className="m-0">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
            </p>
          ),
        },
      ]}
    />
  );
}
