export const SITE = {
  name: "DEM PLANUNG",
  url: "https://www.dem-planung.de",
  street: "Kolpingstraße 27",
  city: "66849 Landstuhl",
  email: "info@dem-planung.de",
  phoneFurkan: { label: "+49 151 724 611 07", href: "tel:+4915172461107" },
  phoneMehmet: { label: "+49 176 637 814 72", href: "tel:+4917663781472" },
};

export const NAV = [
  { href: "/leistungen", label: "Leistungen", sheet: "Blatt 02 · Leistungen" },
  { href: "/projekte", label: "Projekte", sheet: "Blatt 03 · Projekte" },
  { href: "/ablauf", label: "Ablauf", sheet: "Blatt 04 · Ablauf" },
  { href: "/ueber-uns", label: "Über uns", sheet: "Blatt 05 · Über uns" },
  { href: "/kontakt", label: "Kontakt", sheet: "Blatt 06 · Kontakt" },
];

export const SHEETS: Record<string, string> = {
  "/": "Blatt 01 · Startseite",
  "/impressum": "Blatt 07 · Impressum",
  "/datenschutz": "Blatt 08 · Datenschutz",
  ...Object.fromEntries(NAV.map((n) => [n.href, n.sheet])),
  "/leistungen/bauantrag": "Blatt 02.1 · Bauantrag",
  "/leistungen/statik": "Blatt 02.2 · Statik",
  "/leistungen/wohnflaechenberechnung": "Blatt 02.3 · Wohnflächenberechnung",
  "/leistungen/nutzungsaenderung": "Blatt 02.4 · Nutzungsänderung",
  "/leistungen/bestandsaufnahme": "Blatt 02.5 · Bestandsaufnahme",
  "/leistungen/visualisierung": "Blatt 02.6 · Visualisierung",
};
