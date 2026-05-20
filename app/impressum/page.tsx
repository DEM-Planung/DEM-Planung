export default function ImpressumPage() {
  return (
    <main className="bg-[#f8f8f8] text-[#061a33]">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-4">
          Rechtliches
        </p>

        <h1 className="text-5xl md:text-6xl font-black mb-16">
          Impressum
        </h1>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 md:p-14 space-y-14 text-slate-600 leading-8">
          <section>
            <h2 className="text-3xl font-black text-[#061a33] mb-6">
              Angaben gemäß § 5 TMG
            </h2>

            <p>
              <strong className="text-[#061a33]">
                DEM Planung
              </strong>
              <br />
              Furkan Demirci
              <br />
              Mehmet Ali Demirci
              <br />
              Kolpingstraße 27
              <br />
              66849 Landstuhl
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-[#061a33] mb-6">
              Kontakt
            </h2>

            <p>
              Telefon: +49 176 724 611 07
              <br />
              Telefon: +49 176 637 814 72
              <br />
              E-Mail: info@dem-planung.de
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-[#061a33] mb-6">
              EU-Streitschlichtung
            </h2>

            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung bereit:
            </p>

            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#061a33] font-semibold underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>

            <p className="mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-[#061a33] mb-6">
              Verbraucherstreitbeilegung
            </h2>

            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-[#061a33] mb-6">
              Haftung für Inhalte
            </h2>

            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>

            <p className="mt-4">
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-[#061a33] mb-6">
              Haftung für Links
            </h2>

            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-[#061a33] mb-6">
              Urheberrecht
            </h2>

            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
            </p>

            <p className="mt-4">
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          <div className="pt-10 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Stand: Mai 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}