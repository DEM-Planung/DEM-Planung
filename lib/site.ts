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
  { href: "/leistungen", label: "Leistungen", sheet: "Blatt L · Leistungen" },
  { href: "/projekte", label: "Projekte", sheet: "Blatt 02 · Projekte" },
  { href: "/ablauf", label: "Ablauf", sheet: "Blatt 03 · Ablauf" },
  { href: "/ueber-uns", label: "Über uns", sheet: "Blatt 04 · Über uns" },
  { href: "/kontakt", label: "Kontakt", sheet: "Blatt 05 · Kontakt" },
];

export const SHEETS: Record<string, string> = {
  "/": "Blatt 01 · Startseite",
  "/impressum": "Blatt R1 · Impressum",
  "/datenschutz": "Blatt R2 · Datenschutz",
  ...Object.fromEntries(NAV.map((n) => [n.href, n.sheet])),
};
