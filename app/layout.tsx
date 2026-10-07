import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CookieProvider } from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dem-planung.de"),
  alternates: { canonical: "/" },
  title: {
    default: "DEM Planung · Landstuhl – Planung, Statik & Visualisierung",
    template: "%s · DEM Planung Landstuhl",
  },
  description:
    "DEM Planung aus Landstuhl – Architekturplanung, Bauanträge, Statik, Visualisierung und Bestandsaufnahme in Rheinland-Pfalz, Saarland, Baden-Württemberg und Hessen.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="overflow-x-hidden bg-paper text-ink antialiased">
        <CookieProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </CookieProvider>
      </body>
    </html>
  );
}
