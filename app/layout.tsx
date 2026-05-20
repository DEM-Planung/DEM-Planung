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

        {children}

        <CookieBanner />
      </body>
    </html>
  );
}