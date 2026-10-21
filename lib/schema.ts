import { SITE } from "@/lib/site";
import { REGIONS } from "@/lib/leistungen";

// Strukturierte Daten für Google (lokales Unternehmen)
export const BUSINESS_ID = `${SITE.url}/#unternehmen`;

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: "DEM PLANUNG",
  alternateName: "DEM Planung",
  description:
    "Planungsbüro in Landstuhl für Bauanträge, Statik, Wohnflächenberechnung nach WoFlV, Bestandsaufnahme und Architekturvisualisierung.",
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/projekte/rathausplatz/frontansicht.jpg`,
  email: SITE.email,
  telephone: "+4915172461107",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    postalCode: "66849",
    addressLocality: "Landstuhl",
    addressRegion: "Rheinland-Pfalz",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.41, longitude: 7.57 },
  areaServed: [
    ...REGIONS.map((name) => ({ "@type": "City", name })),
    { "@type": "State", name: "Rheinland-Pfalz" },
    { "@type": "State", name: "Saarland" },
    { "@type": "State", name: "Baden-Württemberg" },
    { "@type": "State", name: "Hessen" },
  ],
  founder: { "@type": "Person", name: "Furkan Demirci", jobTitle: "Bachelor of Arts Architektur" },
  knowsAbout: ["Bauantrag", "Statik", "Tragwerksplanung", "Wohnflächenberechnung", "Nutzungsänderung", "Bestandsaufnahme", "Architekturvisualisierung"],
};
