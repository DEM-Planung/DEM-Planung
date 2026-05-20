import "./globals.css";
import Link from "next/link";
import CookieBanner from "@/components/CookieBanner";
import MobileMenu from "./MobileMenu";

export const metadata = {
  metadataBase: new URL("https://www.dem-planung.de"),

  alternates: {
    canonical: "/",
  },

  title: "DEM Planung · Landstuhl – Planung, Statik & Visualisierung",

  description:
    "DEM Planung aus Landstuhl – Architekturplanung, Bauanträge, Statik, Visualisierung und Bestandsplanung. Effizient. Präzise. Persönlich.",

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

        {/* CONTENT */}
        {children}

        {/* FOOTER */}
        <footer
          className="relative overflow-hidden text-white"
          style={{
            backgroundImage: "url('/footer-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/60">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
              {/* LINKS */}
              <div>
                <h3 className="mb-5 text-3xl font-semibold">
                  DEM-Planung
                </h3>

                <p className="max-w-sm text-white/80">
                  Architektur, Planung, Statik und Visualisierung aus einer Hand.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
  <Link href="/kontakt">Kontakt</Link>
  <span>|</span>
  <Link href="/datenschutz">Datenschutz</Link>
  <span>|</span>
  <Link href="/impressum">Impressum</Link>
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

              {/* KONTAKT */}
              <div>
                <h3 className="mb-5 text-3xl font-semibold">
                  Kontakt
                </h3>

                <div className="space-y-3 text-white/80">
                  <p>+49 176 724 611 07</p>
                  <p>+49 176 637 814 72</p>
                  <p>info@dem-planung.de</p>
                </div>
              </div>

              {/* ADRESSE */}
              <div>
                <h3 className="mb-5 text-3xl font-semibold">
                  Adresse
                </h3>

                <div className="space-y-3 text-white/80">
                  <p>DEM-Planung</p>
                  <p>Kolpingstraße 27</p>
                  <p>66849 Landstuhl</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
            </div>

            <div className="border-t border-white/20 py-6 text-center text-sm text-white/60">
              © 2026 DEM-Planung
            </div>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}