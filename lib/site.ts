export const SITE = {
  name: "DEM PLANUNG",
  url: "https://www.dem-planung.de",
  street: "Kolpingstraße 27",
  city: "66849 Landstuhl",
  email: "info@dem-planung.de",
  phoneFurkan: { label: "+49 151 681 534 75", href: "tel:+4915168153475" },
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
};
