import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-white text-slate-900">


          {/* HEADER */}
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto w-full px-6 h-30 flex items-center justify-between">

              <Link href="/">
                <img
                  src="/logo.png"
                  alt="DEM Planung"
                  className="h-60 w-auto cursor-pointer"
                />
              </Link>

              <nav className="flex items-center gap-10 text-[15px] font-medium text-[#061a33]">
                <Link href="/">Home</Link>
                <Link href="/leistungen">Leistungen</Link>
                <Link href="/projekte">Projekte</Link>
                <Link href="/ueber-uns">Über uns</Link>
                <Link href="/kontakt">Kontakt</Link>

                <Link
                  href="/kontakt"
                  className="bg-[#061a33] text-white px-6 py-3 rounded-xl"
                >
                  Projekt anfragen
                </Link>
              </nav>
            </div>
          </header>

          {/* SEITENINHALT */}
          {children}

          {/* FOOTER */}
          <footer className="relative overflow-hidden text-white">

            {/* Hintergrundbild */}
            <div
              className="absolute inset-0 bg-cover bg-[center_50%]"
              style={{
                backgroundImage: "url('/footer-bg.png')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Inhalt */}
            <div className="relative z-10 w-full px-6 py-16">

              <div className="grid md:grid-cols-3 gap-16 text-center items-center">

                {/* Logo */}
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-semibold text-white">
                    DEM-Planung GmbH
                  </p>

                  <p className="mt-4 text-white/80 leading-8">
                    Architektur, Planung, Statik und
                    Visualisierung aus einer Hand.
                  </p>

                  <div className="mt-8 flex items-center gap-4 text-sm text-white/70">
                    <Link href="/kontakt" className="hover:text-white transition">
                      Kontakt
                    </Link>

                    <span>|</span>

                    <Link href="/datenschutz" className="hover:text-white transition">
                      Datenschutz
                    </Link>

                    <span>|</span>

                    <Link href="/impressum" className="hover:text-white transition">
                      Impressum
                    </Link>
                  </div>
                </div>

                {/* Kontakt */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Kontakt
                  </h3>

                  <div className="space-y-3 text-white/80">
                    <p>+49 176 724 611 07</p>
                    <p>+49 176 637 814 72</p>
                    <p>info@dem-planung.de</p>
                  </div>
                </div>

                {/* Adresse */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Adresse
                  </h3>

                  <div className="space-y-3 text-white/80">
                    <p>DEM-Planung GmbH</p>
                    <p>Kanalstraße 2a</p>
                    <p>66849 Landstuhl</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 mt-16 pt-8 text-sm text-white/60">
                © 2026 DEM-Planung GmbH
              </div>

            </div>
          </footer>

        

      </body>
    </html>
  );
}