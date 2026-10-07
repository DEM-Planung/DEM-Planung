export type Service = {
  pos: string;
  title: string;
  tag: "Architektur" | "Ingenieurwesen";
  text: string;
  items: string[];
  cases: string[];
  img: string;
  cap: string;
  plan?: boolean;
};

export const SERVICES: Service[] = [
  {
    pos: "L–01",
    title: "Bauantrag & Planung",
    tag: "Architektur",
    text: "Ganzheitliche Planung von der ersten Idee bis zur Genehmigung – Entwurf, Genehmigungsplanung und vollständige Bauvorlagen.",
    items: [
      "Grundlagenermittlung, Vor- und Entwurfsplanung (LPH 1–3)",
      "Genehmigungsplanung und Bauvorlagen (LPH 4)",
      "1. und 2. Rettungsweg im Plan",
      "Entwässerungsplan (Anschluss an den Kanal)",
      "Abstandsflächen- und Stellplatznachweis",
      "Abweichungs- und Befreiungsanträge",
      "Betreuung bei Nachforderungen der Behörde",
    ],
    cases: [
      "Neubau Ein- und Mehrfamilienhaus",
      "Umbau, Aufstockung, Dachgeschossausbau",
      "Nutzungsänderung, z. B. Gewerbe zu Wohnen",
      "Nachträgliche Genehmigung (Legalisierung)",
    ],
    img: "/projekte/franzenbrunnen/suedansicht.jpg",
    cap: "Südansicht · Am Franzenbrunnen, Saarbrücken",
    plan: true,
  },
  {
    pos: "L–02",
    title: "Statik",
    tag: "Ingenieurwesen",
    text: "Tragwerksplanung mit Präzision und Wirtschaftlichkeit – prüffähige statische Nachweise im Hochbau.",
    items: [
      "Tragwerksplanung im Hochbau",
      "Prüffähige statische Berechnung",
      "Positionspläne",
      "Statik im Bestand bei Umbau und Aufstockung",
      "Fachbauleitung und statische Abnahmen",
    ],
    cases: ["Wanddurchbrüche und Umbauten", "Aufstockung und Dachausbau", "Neubau mit Bauantrag"],
    img: "/projekte/rathausplatz/isometrie.jpg",
    cap: "Isometrie · Rathausplatz Völklingen",
  },
  {
    pos: "L–03",
    title: "Bestandsaufnahme",
    tag: "Architektur",
    text: "Digitale und analoge Erfassung des Bestands als sichere Grundlage für Umbau, Nutzungsänderung und Verkauf.",
    items: [
      "Aufmaß vor Ort",
      "Digitale Bestandspläne: Grundrisse, Schnitte, Ansichten",
      "Abgleich mit vorhandenen Bauakten",
      "Grundlage für Legalisierung und Umbauplanung",
    ],
    cases: ["Keine oder veraltete Pläne vorhanden", "Kauf oder Verkauf einer Immobilie", "Vorbereitung eines Bauantrags"],
    img: "/projekte/rathausplatz/bestand.jpg",
    cap: "Bestand · Rathausstraße 29–33, Völklingen",
  },
  {
    pos: "L–04",
    title: "Flächen & Kosten",
    tag: "Ingenieurwesen",
    text: "Transparente Flächenermittlung und Kostenschätzung – nachvollziehbar mit Maßketten dokumentiert.",
    items: [
      "Wohnflächenberechnung nach WoFlV mit Maßketten",
      "Nutzflächen und umbauter Raum",
      "GRZ- und GFZ-Berechnung",
      "Abgeschlossenheitspläne für die Teilungserklärung",
      "Kostenschätzung und Kostenberechnung",
    ],
    cases: ["Finanzierung – Nachweis für die Bank", "Vermietung und Verkauf", "Aufteilung in Wohnungseigentum"],
    img: "/projekte/baumholder/grundriss.jpg",
    cap: "Grundriss · BIZZLIVING Baumholder",
    plan: true,
  },
  {
    pos: "L–05",
    title: "Renderings",
    tag: "Architektur",
    text: "Realistische Visualisierungen für Präsentation, Vermarktung und die Abstimmung mit Bauherren und Gremien.",
    items: [
      "Außenvisualisierungen bei Tag und Nacht",
      "Innenraum-Renderings",
      "Isometrien und Übersichtspläne",
      "Bildmaterial für Exposés und Plakate",
      "Präsentationen für Stadtrat und Ausschüsse",
    ],
    cases: ["Vermarktung vor Baubeginn", "Überzeugen von Gremien und Nachbarn", "Entscheidungshilfe im Entwurf"],
    img: "/projekte/rathausplatz/gemeinschaftsraum.jpg",
    cap: "Gemeinschaftsraum · Rathausplatz Völklingen",
  },
];

export type GalleryImage = { src: string; cap: string; photo?: boolean; wide?: boolean };

export type Project = {
  num: string;
  slug: string;
  name: string;
  cat: "Quartiersentwicklung" | "Wohnungsbau" | "Bestandssanierung";
  type: string;
  place: string;
  short: string;
  lph: string;
  shown: string;
  text: string;
  img: string;
  cardImg: string;
  cap1: string;
  gallery: GalleryImage[];
};

export const PROJECTS: Project[] = [
  {
    num: "P–01",
    slug: "rathausplatz-voelklingen",
    name: "Rathausplatz Völklingen",
    cat: "Quartiersentwicklung",
    type: "Umnutzung ehem. Casino / Röchlingbank zu Wohnen und Gewerbe",
    place: "Rathausstraße 29–33, Völklingen",
    short: "Völklingen",
    lph: "LPH 1–4 · Statik · Begleitung im Stadtrat",
    shown: "Isometrie · Bestand · Entwurf · Innenräume · Studentenapartment",
    text: "Ein innerstädtisches Bestandsgebäude wird zum Quartier mit Studentenwohnungen, Penthouse, Gemeinschaftsraum und gewerblicher Nutzung im Erdgeschoss.",
    img: "/projekte/rathausplatz/isometrie.jpg",
    cardImg: "/projekte/rathausplatz/isometrie.jpg",
    cap1: "Isometrie Quartier",
    gallery: [
      { src: "/projekte/rathausplatz/bestand.jpg", cap: "Abb. 2 · Bestand vorher", photo: true },
      { src: "/projekte/rathausplatz/entwurf-front.jpg", cap: "Abb. 3 · Entwurf Frontfassade", photo: true },
      { src: "/projekte/rathausplatz/gemeinschaftsraum.jpg", cap: "Abb. 4 · Gemeinschaftsraum", photo: true },
      { src: "/projekte/rathausplatz/penthouse-wohnen.jpg", cap: "Abb. 5 · Wohnen Penthouse", photo: true },
      { src: "/projekte/rathausplatz/studentenapartment.jpg", cap: "Abb. 6 · Studentenapartment", photo: true },
    ],
  },
  {
    num: "P–02",
    slug: "am-franzenbrunnen",
    name: "Am Franzenbrunnen",
    cat: "Wohnungsbau",
    type: "Wohnungsbau",
    place: "Am Franzenbrunnen, Saarbrücken",
    short: "Saarbrücken",
    lph: "LPH 1–4",
    shown: "Rendering · Grundriss EG · Nord- und Südansicht",
    text: "Wohngebäude über drei Geschosse – vom Entwurf über die Genehmigungsplanung bis zur Entwässerungsplanung im Erdgeschoss.",
    img: "/projekte/franzenbrunnen/front.jpg",
    cardImg: "/projekte/franzenbrunnen/front.jpg",
    cap1: "Straßenansicht",
    gallery: [
      { src: "/projekte/franzenbrunnen/erdgeschoss.jpg", cap: "Abb. 2 · Grundriss Erdgeschoss" },
      { src: "/projekte/franzenbrunnen/nordansicht.jpg", cap: "Abb. 3 · Nordansicht" },
      { src: "/projekte/franzenbrunnen/suedansicht.jpg", cap: "Abb. 4 · Südansicht" },
    ],
  },
  {
    num: "P–03",
    slug: "bizzliving-baumholder",
    name: "BIZZLIVING Baumholder",
    cat: "Bestandssanierung",
    type: "Bestandssanierung",
    place: "In der Bitz, Baumholder",
    short: "Baumholder",
    lph: "LPH 1–4 · Renderings · Vorstellung und Begleitung im Stadtrat",
    shown: "Außenanlage · Städtebauliche Fassadenansichten · Innenräume · Grundriss",
    text: "Sanierung und Modernisierung eines Wohngebäudes im Bestand, inklusive neu gestalteter Außenanlage und Innenausbau der Wohnungen.",
    img: "/projekte/baumholder/aussenanlage.jpg",
    cardImg: "/projekte/baumholder/aussenanlage.jpg",
    cap1: "Außenanlage",
    gallery: [
      { src: "/projekte/baumholder/fassade-19-21-23.jpg", cap: "Fassadenansicht Städtebau · Gebäude 19, 21, 23", wide: true },
      { src: "/projekte/baumholder/fassade-25-27-29.jpg", cap: "Fassadenansicht Städtebau · Gebäude 25, 27, 29", wide: true },
      { src: "/projekte/baumholder/fassade-31-33-35.jpg", cap: "Fassadenansicht Städtebau · Gebäude 31, 33, 35", wide: true },
      { src: "/projekte/baumholder/aussenanlage-nacht.jpg", cap: "Abb. 2 · Außenanlage bei Nacht", photo: true },
      { src: "/projekte/baumholder/wohnzimmer.jpg", cap: "Abb. 3 · Wohnzimmer", photo: true },
      { src: "/projekte/baumholder/kueche.jpg", cap: "Abb. 4 · Essen und Küche", photo: true },
      { src: "/projekte/baumholder/grundriss.jpg", cap: "Abb. 5 · Grundriss Wohnung" },
    ],
  },
  {
    num: "P–04",
    slug: "danziger-strasse",
    name: "Danziger Straße",
    cat: "Wohnungsbau",
    type: "Wohnungsbau",
    place: "Danziger Straße, Ramstein-Miesenbach",
    short: "Ramstein-Miesenbach",
    lph: "Renderings",
    shown: "Rendering · Grundriss EG",
    text: "Wohnhaus mit Satteldach und großzügigen Balkonen – fotorealistisch visualisiert für Präsentation und Vermarktung.",
    img: "/projekte/danziger/aussenansicht.jpg",
    cardImg: "/projekte/danziger/aussenansicht.jpg",
    cap1: "Außenansicht",
    gallery: [{ src: "/projekte/danziger/grundriss-eg.jpg", cap: "Abb. 2 · Grundriss Erdgeschoss" }],
  },
];

export const STEPS = [
  {
    num: "01", short: "Erstgespräch", lph: "Vorab", start: 0, span: 12,
    title: "Erstgespräch & Ortstermin",
    text: "Sie erzählen uns von Ihrem Vorhaben – Neubau, Umbau, Aufstockung oder Nutzungsänderung. Wir schauen uns Grundstück oder Gebäude an und schätzen ein, welches Verfahren nötig ist und was realistisch umsetzbar ist.",
    give: ["Ihre Idee, gern mit Skizze", "Fotos vom Grundstück oder Bestand", "Vorhandene Pläne und Lageplan"],
    get: ["Einschätzung zu Verfahren und Machbarkeit", "Transparentes Angebot"],
  },
  {
    num: "02", short: "Grundlagen", lph: "LPH 1", start: 10, span: 18,
    title: "Grundlagen & Bestandsaufnahme",
    text: "Wir erfassen den Bestand vor Ort, prüfen das Baurecht – Bebauungsplan, Abstandsflächen, Stellplätze – und klären offene Punkte bei Bedarf vorab mit dem Bauamt.",
    give: ["Zugang zum Gebäude", "Unterlagen zu Grundstück und Bestand"],
    get: ["Digitale Bestandspläne", "Klarheit über die baurechtlichen Rahmenbedingungen"],
  },
  {
    num: "03", short: "Entwurf", lph: "LPH 2–3", start: 24, span: 30,
    title: "Vorplanung & Entwurf",
    text: "Aus den Grundlagen entstehen Varianten und schließlich der Entwurf – von Anfang an mit dem Tragwerk abgestimmt. Renderings zeigen Ihnen, wie Ihr Gebäude später aussieht.",
    give: ["Ihr Feedback zu den Varianten", "Entscheidungen zu Grundrissen und Ausstattung"],
    get: ["Grundrisse, Ansichten, Schnitte", "Visualisierungen", "Wohnflächenberechnung nach WoFlV"],
  },
  {
    num: "04", short: "Statik & Nachweise", lph: "Tragwerk", start: 36, span: 40,
    title: "Statik & Nachweise",
    text: "Parallel zum Entwurf bemessen wir das Tragwerk und stellen die Nachweise zusammen, die das Bauamt sehen will. Rettungswege und Entwässerung sind in unseren Plänen standardmäßig enthalten.",
    give: ["Freigabe des Entwurfs"],
    get: ["Prüffähige statische Berechnung", "Flächen- und Stellplatznachweis", "Rettungswege und Entwässerung im Plan"],
  },
  {
    num: "05", short: "Bauantrag", lph: "LPH 4", start: 64, span: 36,
    title: "Genehmigungsplanung & Bauantrag",
    text: "Wir stellen die vollständigen Bauvorlagen zusammen, reichen den Antrag ein und kümmern uns um Rückfragen und Nachforderungen der Behörde – bis die Genehmigung vorliegt.",
    give: ["Unterschriften als Bauherr", "ggf. Nachbarunterschriften"],
    get: ["Vollständig eingereichter Bauantrag", "Betreuung bis zum Bescheid"],
  },
];

export const FAQ = [
  { q: "Brauche ich für mein Vorhaben überhaupt einen Bauantrag?", a: "Das hängt von Vorhaben und Bundesland ab – manches ist verfahrensfrei, anderes braucht ein vereinfachtes oder reguläres Verfahren. Genau das klären wir im Erstgespräch." },
  { q: "Wie lange dauert es bis zur Genehmigung?", a: "Die Bearbeitungszeit liegt beim Bauamt und ist je nach Behörde unterschiedlich. Vollständige, prüffähige Unterlagen vermeiden Nachforderungen und sparen so am meisten Zeit." },
  { q: "Können Sie auch nur die Statik übernehmen?", a: "Ja. Tragwerksplanung, Bestandsaufnahme, Flächenberechnung oder Renderings bieten wir auch als Einzelleistung an." },
  { q: "In welchen Regionen sind Sie tätig?", a: "Von unserem Büro in Landstuhl aus planen wir in Rheinland-Pfalz, im Saarland, in Baden-Württemberg und in Hessen." },
];
