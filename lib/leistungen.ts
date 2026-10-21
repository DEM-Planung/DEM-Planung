// Detailseiten der Leistungen – /leistungen/[slug]
// Jede Seite zielt auf ein Suchthema (z. B. "Statiker Kaiserslautern", "Bauantrag erstellen lassen").

export type LeistungSection = { h: string; p: string[] };
export type LeistungFaq = { q: string; a: string };

export type Leistung = {
  slug: string;
  pos: string;
  nav: string; // kurzer Name für Links
  title: string; // H1
  metaTitle: string; // <title>
  metaDescription: string;
  intro: string;
  img: string;
  cap: string;
  plan?: boolean;
  items: string[];
  cases: string[];
  sections: LeistungSection[];
  faq: LeistungFaq[];
  note?: string; // Hinweis zur Leistungserbringung (Partnerbüro)
};

export const REGIONS = [
  "Landstuhl",
  "Kaiserslautern",
  "Ramstein-Miesenbach",
  "Kusel",
  "Zweibrücken",
  "Pirmasens",
  "Homburg",
  "Saarbrücken",
  "Neunkirchen",
];

export const PARTNER_NOTE =
  "Bauvorlageberechtigte Leistungen und die Tragwerksplanung erbringt unser Partnerbüro DMA Planung – Mehmet Ali Demirci, B.Eng. Bauingenieurwesen, Mitglied der Ingenieurkammer des Saarlandes.";

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "bauantrag",
    pos: "L–01",
    nav: "Bauantrag",
    title: "Bauantrag erstellen lassen",
    metaTitle: "Bauantrag erstellen lassen – Landstuhl, Kaiserslautern & Saarland",
    metaDescription:
      "Bauantrag erstellen lassen in Landstuhl, Kaiserslautern und im Saarland: Entwurf, Bauvorlagen, Abstandsflächen- und Stellplatznachweis und Betreuung bis zur Genehmigung.",
    intro:
      "Vom ersten Entwurf bis zum Bescheid: Wir erstellen vollständige, prüffähige Bauvorlagen und begleiten Ihren Bauantrag, bis die Genehmigung vorliegt – für Neubau, Umbau, Aufstockung und Nutzungsänderung.",
    img: "/projekte/franzenbrunnen/suedansicht.jpg",
    cap: "Südansicht · Am Franzenbrunnen, Saarbrücken",
    plan: true,
    items: [
      "Grundlagenermittlung und Prüfung des Baurechts (Bebauungsplan, § 34 BauGB)",
      "Vor- und Entwurfsplanung (LPH 2–3)",
      "Genehmigungsplanung und Bauvorlagen (LPH 4)",
      "Abstandsflächen- und Stellplatznachweis",
      "1. und 2. Rettungsweg und Entwässerungsplan",
      "Abweichungs- und Befreiungsanträge",
      "Betreuung bei Nachforderungen der Behörde",
    ],
    cases: [
      "Neubau Ein- und Mehrfamilienhaus",
      "Anbau, Aufstockung, Dachgeschossausbau",
      "Nutzungsänderung, z. B. Gewerbe zu Wohnen",
      "Nachträgliche Genehmigung (Legalisierung)",
    ],
    sections: [
      {
        h: "Was gehört in einen Bauantrag?",
        p: [
          "Zu einem vollständigen Bauantrag gehören in der Regel ein amtlicher Lageplan, Grundrisse, Schnitte und Ansichten, die Baubeschreibung, die Berechnung von Grundflächen- und Geschossflächenzahl, Abstandsflächen- und Stellplatznachweis sowie – je nach Vorhaben – Standsicherheits-, Wärmeschutz- und Brandschutznachweise.",
          "Welche Unterlagen Ihr Bauamt konkret verlangt, hängt vom Bundesland und vom Verfahren ab. Das klären wir vorab, damit der Antrag beim ersten Einreichen vollständig ist.",
        ],
      },
      {
        h: "Bauantrag in Rheinland-Pfalz und im Saarland",
        p: [
          "Von unserem Büro in Landstuhl aus planen wir vor allem im Landkreis Kaiserslautern, im Kreis Kusel, in der Südwestpfalz und im Saarland. Die Landesbauordnungen unterscheiden sich in Details wie Verfahrensarten, Fristen und Stellplatzregelungen – wir kennen die Praxis der Bauämter in der Region.",
        ],
      },
      {
        h: "Weniger Nachforderungen durch abgestimmte Unterlagen",
        p: [
          "Weil Entwurf, Flächenberechnung und Statik eng abgestimmt entstehen, passen Grundriss und Tragwerk schon beim Einreichen zusammen. Das vermeidet die häufigsten Nachforderungen und spart Wochen in der Bearbeitung.",
        ],
      },
    ],
    faq: [
      {
        q: "Wer darf einen Bauantrag einreichen?",
        a: "Die Bauvorlagen müssen von einer bauvorlageberechtigten Person unterschrieben werden – in der Regel von einem Architekten oder einem eingetragenen Bauingenieur. Diese Leistung erbringt unser Partnerbüro DMA Planung.",
      },
      {
        q: "Wie lange dauert die Genehmigung?",
        a: "Die Bearbeitungszeit liegt beim Bauamt und hängt von Verfahren und Behörde ab. Vollständige Unterlagen sind der größte Hebel, um sie zu verkürzen.",
      },
      {
        q: "Was kostet ein Bauantrag?",
        a: "Das Honorar richtet sich nach Größe und Art des Vorhabens und dem benötigten Leistungsumfang. Nach einem kurzen Erstgespräch erhalten Sie ein transparentes Angebot.",
      },
    ],
    note: PARTNER_NOTE,
  },
  {
    slug: "statik",
    pos: "L–02",
    nav: "Statik",
    title: "Statik & Tragwerksplanung",
    metaTitle: "Statiker in Landstuhl & Kaiserslautern – Statik & Tragwerksplanung",
    metaDescription:
      "Statiker für Landstuhl, Kaiserslautern und das Saarland: prüffähige Statik für Neubau, Umbau, Wanddurchbruch, Aufstockung und Dachausbau.",
    intro:
      "Prüffähige statische Berechnungen für Neubau und Bestand – vom Wanddurchbruch über den Dachgeschossausbau bis zum Mehrfamilienhaus. Wirtschaftlich bemessen und mit dem Entwurf abgestimmt.",
    img: "/projekte/rathausplatz/isometrie.jpg",
    cap: "Isometrie · Rathausplatz Völklingen",
    items: [
      "Tragwerksplanung im Hochbau",
      "Prüffähige statische Berechnung und Positionspläne",
      "Statik im Bestand bei Umbau und Aufstockung",
      "Wanddurchbrüche und Abfangungen",
      "Fachbauleitung und statische Abnahmen",
    ],
    cases: [
      "Tragende Wand entfernen oder durchbrechen",
      "Aufstockung und Dachgeschossausbau",
      "Neubau mit Bauantrag",
      "Statik nachreichen für das Bauamt",
    ],
    sections: [
      {
        h: "Wann brauche ich einen Statiker?",
        p: [
          "Immer dann, wenn tragende Bauteile neu entstehen oder verändert werden: beim Neubau, bei einer Aufstockung, beim Ausbau des Dachgeschosses oder wenn eine tragende Wand geöffnet werden soll. Auch das Bauamt fordert den Standsicherheitsnachweis häufig im Genehmigungsverfahren nach.",
        ],
      },
      {
        h: "Statik im Bestand",
        p: [
          "Gerade bei älteren Gebäuden fehlen oft Unterlagen zum Tragwerk. Wir nehmen den Bestand vor Ort auf, prüfen die vorhandene Konstruktion und weisen nach, was das Gebäude tragen kann – als Grundlage für Umbau und Nutzungsänderung.",
        ],
      },
      {
        h: "Statik und Entwurf aus einer Hand",
        p: [
          "Entwurf und Tragwerk entstehen parallel. So vermeiden wir teure Änderungen, wenn sich erst nach dem Entwurf zeigt, dass ein Unterzug oder eine Stütze an anderer Stelle nötig ist.",
        ],
      },
    ],
    faq: [
      {
        q: "Kann ich nur die Statik beauftragen?",
        a: "Ja. Wenn Sie bereits einen Planer haben, übernehmen wir die Tragwerksplanung auch als Einzelleistung.",
      },
      {
        q: "Brauche ich für einen Wanddurchbruch eine Statik?",
        a: "Bei tragenden Wänden ja – auch dann, wenn das Vorhaben selbst genehmigungsfrei ist. Ein Statiker bemisst Sturz oder Abfangung und legt fest, wie während des Umbaus abgestützt wird.",
      },
      {
        q: "Was kostet eine Statik?",
        a: "Das hängt vom Umfang ab – ein einzelner Wanddurchbruch ist deutlich günstiger als die Statik eines Mehrfamilienhauses. Schicken Sie uns Pläne oder Fotos, dann erhalten Sie ein Angebot.",
      },
    ],
    note: "Die Tragwerksplanung erbringt unser Partnerbüro DMA Planung – Mehmet Ali Demirci, B.Eng. Bauingenieurwesen, eingetragener Tragwerksplaner der Ingenieurkammer des Saarlandes.",
  },
  {
    slug: "wohnflaechenberechnung",
    pos: "L–03",
    nav: "Wohnflächenberechnung",
    title: "Wohnflächenberechnung nach WoFlV",
    metaTitle: "Wohnflächenberechnung nach WoFlV – Kaiserslautern, Landstuhl & Saarland",
    metaDescription:
      "Wohnflächenberechnung nach WoFlV mit nachvollziehbaren Maßketten – für Bank, Verkauf, Vermietung und Teilungserklärung. Landstuhl, Kaiserslautern, Saarland.",
    intro:
      "Nachvollziehbare Wohnflächenberechnung nach Wohnflächenverordnung – Raum für Raum mit Maßketten dokumentiert. Für die Finanzierung bei der Bank, für Verkauf und Vermietung oder als Grundlage für die Teilungserklärung.",
    img: "/projekte/baumholder/grundriss.jpg",
    cap: "Grundriss · BIZZLIVING Baumholder",
    plan: true,
    items: [
      "Wohnflächenberechnung nach WoFlV mit Maßketten",
      "Nutzflächen und umbauter Raum",
      "Aufmaß vor Ort, falls keine Pläne vorliegen",
      "GRZ- und GFZ-Berechnung",
      "Abgeschlossenheitspläne für die Teilungserklärung",
    ],
    cases: [
      "Finanzierung – Nachweis für die Bank",
      "Verkauf und Exposé",
      "Vermietung und Nebenkostenabrechnung",
      "Aufteilung in Wohnungseigentum",
    ],
    sections: [
      {
        h: "Warum Maßketten?",
        p: [
          "Banken und Gutachter wollen nachvollziehen können, wie eine Fläche zustande kommt. Deshalb weisen wir jede Teilfläche mit ihren Maßen aus – etwa 4,25 × 3,80 = 16,15 m² – statt nur Endsummen zu nennen. So lässt sich die Berechnung jederzeit prüfen.",
        ],
      },
      {
        h: "Was zählt zur Wohnfläche?",
        p: [
          "Nach der Wohnflächenverordnung zählen Flächen mit mindestens 2 m lichter Höhe voll, Flächen zwischen 1 und 2 m zur Hälfte, darunter gar nicht. Balkone, Loggien und Terrassen werden in der Regel zu einem Viertel, höchstens zur Hälfte angerechnet. Keller, Heizungsräume und Garagen gehören nicht zur Wohnfläche.",
        ],
      },
      {
        h: "Mit oder ohne vorhandene Pläne",
        p: [
          "Liegen aktuelle Grundrisse vor, rechnen wir auf deren Grundlage. Fehlen Pläne oder stimmen sie nicht mehr mit dem Bestand überein, messen wir vor Ort auf und erstellen dabei auch digitale Bestandspläne.",
        ],
      },
    ],
    faq: [
      {
        q: "Wofür brauche ich eine Wohnflächenberechnung?",
        a: "Typisch sind Baufinanzierung, Verkauf, Vermietung, Förderanträge und die Aufteilung in Wohnungseigentum. Häufig fordert die Bank sie als Nachweis an.",
      },
      {
        q: "Wie schnell bekomme ich die Berechnung?",
        a: "Mit vorhandenen Plänen meist innerhalb weniger Werktage. Mit Aufmaß vor Ort hängt es vom Termin und der Gebäudegröße ab.",
      },
      {
        q: "WoFlV oder DIN 277?",
        a: "Für Wohnraum ist die Wohnflächenverordnung der übliche Maßstab. Die DIN 277 nutzen wir für Nutz- und Gewerbeflächen oder wenn sie ausdrücklich verlangt wird.",
      },
    ],
  },
  {
    slug: "nutzungsaenderung",
    pos: "L–04",
    nav: "Nutzungsänderung",
    title: "Nutzungsänderung beantragen",
    metaTitle: "Nutzungsänderung beantragen – Ferienwohnung, Gewerbe zu Wohnen, Gastronomie",
    metaDescription:
      "Nutzungsänderung beantragen in Rheinland-Pfalz und im Saarland: Gewerbe zu Wohnen, Wohnung zu Ferienwohnung, Gastronomie, Keller- und Dachgeschosswohnung.",
    intro:
      "Aus Laden wird Wohnung, aus Wohnung wird Ferienwohnung, aus Lager wird Gastronomie: Eine geänderte Nutzung ist meist genehmigungspflichtig. Wir prüfen, was möglich ist, und stellen den Antrag.",
    img: "/projekte/rathausplatz/entwurf-front.jpg",
    cap: "Entwurf · Rathausstraße 29–33, Völklingen",
    items: [
      "Prüfung der planungsrechtlichen Zulässigkeit",
      "Bestandsaufnahme und Bestandspläne",
      "Stellplatz-, Brandschutz- und Rettungswegkonzept",
      "Bauantrag zur Nutzungsänderung",
      "Abstimmung mit Bauamt und Fachbehörden",
    ],
    cases: [
      "Gewerbe oder Büro zu Wohnen",
      "Wohnung zu Ferienwohnung",
      "Gaststätte, Café oder Imbiss",
      "Ausbau von Keller oder Dachgeschoss zu Wohnraum",
    ],
    sections: [
      {
        h: "Wann ist eine Nutzungsänderung genehmigungspflichtig?",
        p: [
          "Sobald für die neue Nutzung andere öffentlich-rechtliche Anforderungen gelten als für die bisherige – etwa beim Stellplatzbedarf, beim Brandschutz oder beim Lärmschutz – ist in der Regel ein Bauantrag nötig. Das gilt auch, wenn baulich gar nichts verändert wird.",
        ],
      },
      {
        h: "Typische Knackpunkte",
        p: [
          "Häufig entscheiden Stellplätze, der zweite Rettungsweg, Schallschutz und die Gebietsart im Bebauungsplan darüber, ob eine Nutzungsänderung genehmigt wird. Wir klären diese Punkte vorab, bevor Kosten für die vollständige Planung entstehen.",
        ],
      },
      {
        h: "Nachträgliche Genehmigung",
        p: [
          "Wird eine Fläche schon anders genutzt als genehmigt, lässt sich das oft nachträglich legalisieren. Wir erstellen die Unterlagen für die nachträgliche Baugenehmigung und begleiten das Verfahren.",
        ],
      },
    ],
    faq: [
      {
        q: "Brauche ich für eine Ferienwohnung eine Genehmigung?",
        a: "Meist ja. Die Umnutzung einer Dauerwohnung zur Ferienwohnung ist in vielen Fällen eine genehmigungspflichtige Nutzungsänderung – entscheidend sind Gebietsart und Stellplätze.",
      },
      {
        q: "Kann ich einen Laden in eine Wohnung umwandeln?",
        a: "Oft ja, wenn das Baugebiet Wohnen zulässt und Anforderungen wie Belichtung, Rettungswege und Stellplätze erfüllt werden können. Das prüfen wir im Erstgespräch.",
      },
      {
        q: "Was passiert ohne Genehmigung?",
        a: "Das Bauamt kann die Nutzung untersagen und Bußgelder verhängen. Eine nachträgliche Genehmigung ist meist der sicherere Weg.",
      },
    ],
    note: PARTNER_NOTE,
  },
  {
    slug: "bestandsaufnahme",
    pos: "L–05",
    nav: "Bestandsaufnahme",
    title: "Bestandsaufnahme & Bestandspläne",
    metaTitle: "Bestandsaufnahme & Bestandspläne erstellen – Landstuhl, Kaiserslautern",
    metaDescription:
      "Aufmaß und digitale Bestandspläne – Grundrisse, Schnitte, Ansichten – für Umbau, Nutzungsänderung, Verkauf und Bauantrag in der Westpfalz und im Saarland.",
    intro:
      "Keine Pläne, veraltete Pläne oder Pläne, die nicht mehr zum Gebäude passen? Wir messen vor Ort auf und erstellen digitale Bestandspläne als sichere Grundlage für alles, was danach kommt.",
    img: "/projekte/rathausplatz/bestand.jpg",
    cap: "Bestand · Rathausstraße 29–33, Völklingen",
    items: [
      "Aufmaß vor Ort",
      "Digitale Grundrisse, Schnitte und Ansichten",
      "Abgleich mit vorhandenen Bauakten",
      "Grundlage für Wohnflächenberechnung und Umbauplanung",
    ],
    cases: [
      "Keine oder veraltete Pläne vorhanden",
      "Kauf oder Verkauf einer Immobilie",
      "Vorbereitung eines Bauantrags",
      "Legalisierung ungenehmigter Umbauten",
    ],
    sections: [
      {
        h: "Wofür Bestandspläne?",
        p: [
          "Ohne verlässliche Pläne lässt sich weder ein Umbau planen noch ein Bauantrag stellen. Auch Banken, Käufer und Hausverwaltungen verlangen häufig aktuelle Grundrisse und eine Flächenberechnung.",
        ],
      },
      {
        h: "Abgleich mit der Bauakte",
        p: [
          "Wir vergleichen den Bestand mit den genehmigten Plänen aus der Bauakte. So sehen Sie frühzeitig, ob Umbauten ohne Genehmigung erfolgt sind – und was zu tun ist.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie lange dauert ein Aufmaß?",
        a: "Für ein Einfamilienhaus meist wenige Stunden vor Ort. Die Ausarbeitung der Pläne folgt in den Tagen danach.",
      },
      {
        q: "Woher bekomme ich die alten Baupläne?",
        a: "Genehmigte Pläne liegen in der Bauakte beim zuständigen Bauamt. Als Eigentümer können Sie Akteneinsicht beantragen – oder uns damit beauftragen.",
      },
    ],
  },
  {
    slug: "visualisierung",
    pos: "L–06",
    nav: "Visualisierung",
    title: "Architekturvisualisierung & Renderings",
    metaTitle: "Architekturvisualisierung & 3D-Renderings – DEM Planung Landstuhl",
    metaDescription:
      "Fotorealistische Architekturvisualisierungen und 3D-Renderings für Vermarktung, Exposé, Stadtrat und Bauherren – außen, innen und als Isometrie.",
    intro:
      "Fotorealistische Renderings zeigen Ihr Projekt, bevor es gebaut ist – für die Vermarktung, das Exposé, die Abstimmung mit Bauherren oder die Präsentation im Stadtrat.",
    img: "/projekte/rathausplatz/gemeinschaftsraum.jpg",
    cap: "Gemeinschaftsraum · Rathausplatz Völklingen",
    items: [
      "Außenvisualisierungen bei Tag und Nacht",
      "Innenraum-Renderings",
      "Isometrien und Übersichtspläne",
      "Bildmaterial für Exposés und Bauschilder",
      "Präsentationen für Stadtrat und Ausschüsse",
    ],
    cases: [
      "Vermarktung vor Baubeginn",
      "Überzeugen von Gremien und Nachbarn",
      "Entscheidungshilfe im Entwurf",
    ],
    sections: [
      {
        h: "Renderings für die Vermarktung",
        p: [
          "Wohnungen lassen sich deutlich leichter verkaufen oder vermieten, wenn Interessenten sie schon vor Baubeginn sehen. Wir erstellen Außen- und Innenansichten in Exposé-Qualität.",
        ],
      },
      {
        h: "Auch für fremde Planungen",
        p: [
          "Sie haben bereits Pläne von einem anderen Büro? Wir visualisieren auf Grundlage Ihrer Grundrisse und Ansichten.",
        ],
      },
    ],
    faq: [
      {
        q: "Was brauchen Sie für ein Rendering?",
        a: "Grundrisse, Ansichten und Schnitte, idealerweise als DWG oder PDF, dazu Angaben zu Materialien und gewünschten Blickwinkeln.",
      },
      {
        q: "Wie lange dauert ein Rendering?",
        a: "Je nach Umfang wenige Tage bis zwei Wochen. Korrekturschleifen sind eingeplant.",
      },
    ],
  },
];

export const getLeistung = (slug: string) => LEISTUNGEN.find((l) => l.slug === slug);
