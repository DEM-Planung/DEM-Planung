import "./globals.css";
import Link from "next/link";
import CookieBanner from "@/components/CookieBanner";
import MobileMenu from "./MobileMenu";

export const metadata = {
  title:
    "DEM Planung GmbH · Landstuhl – Planung, Statik & Visualisierung",

  description:
    "DEM Planung GmbH aus Landstuhl – Architekturplanung, Bauanträge, Statik, Visualisierung und Bestandsplanung. Effizient. Präzise. Persönlich.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="overflow-x-hidden bg-white text-slate-900">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex h-20 w-full items-center justify-between px-4 md:h-30 md:px-6">
            <Link href="/">
              <img
                src="/logo.png"
                alt="DEM Planung"
                className="h-28 w-auto cursor-pointer md:h-60"
              />
            </Link>

            <nav className="hidden items-center gap-10 text-[15px] font-medium text-[#061a33] md:flex">
              <Link href="/">Home</Link>
              <Link href="/leistungen">Leistungen</Link>
              <Link href="/projekte">Projekte</Link>
              <Link href="/ueber-uns">Über uns</Link>
              <Link href="/kontakt">Kontakt</Link>

              <Link
                href="/kontakt"
                className="rounded-xl bg-[#061a33] px-6 py-3 text-white"
              >
                Projekt anfragen
              </Link>
            </nav>

            <MobileMenu />
          </div>
        </header>

        {/* SEITENINHALT */}
        {children}

        {/* FOOTER */}
        <footer className="relative overflow-hidden text-white">
          <div
            className="absolute inset-0 bg-cover bg-[center_50%]"
            style={{
              backgroundImage: "url('/footer-bg.png')",
            }}
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 w-full px-5 py-12 md:px-6 md:py-16">
            <div className="grid gap-10 text-center md:grid-cols-3 md:gap-16 md:items-center">
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold text-white md:text-2xl">
                  DEM-Planung GmbH
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/80 md:text-base md:leading-8">
                  Architektur, Planung, Statik und Visualisierung aus einer Hand.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70 md:mt-8 md:gap-4">
                  <Link href="/kontakt" className="transition hover:text-white">
                    Kontakt
                  </Link>

                  <span>|</span>

                  <Link
                    href="/datenschutz"
                    className="transition hover:text-white"
                  >
                    Datenschutz
                  </Link>

                  <span>|</span>

                  <Link href="/impressum" className="transition hover:text-white">
                    Impressum
                  </Link>
                  <span>|</span>

<button
  type="button"
  onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
  className="transition hover:text-white"
>
  Cookie-Einstellungen
</button>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">
                  Kontakt
                </h3>

                <div className="space-y-2 text-sm text-white/80 md:space-y-3 md:text-base">
                  <p>+49 176 724 611 07</p>
                  <p>+49 176 637 814 72</p>
                  <p>info@dem-planung.de</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">
                  Adresse
                </h3>

                <div className="space-y-2 text-sm text-white/80 md:space-y-3 md:text-base">
                  <p>DEM-Planung GmbH</p>
                  <p>Kanalstraße 2a</p>
                  <p>66849 Landstuhl</p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/60 md:mt-16 md:pt-8 md:text-sm">
              © 2026 DEM-Planung GmbH
            </div>
          </div>
        </footer>
      <CookieBanner />
      </body>
    </html>
  );
}
