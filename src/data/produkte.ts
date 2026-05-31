/* =============================================================
   APATO SPORT — Produktdaten
   Vollständige Hierarchie aus dem Katalog von apato-sport.com.
   Struktur: Kategorie -> Gruppe -> Produkt (jedes Produkt = eigene Detailseite).

   WICHTIG für Live-Schaltung:
   - Preise & technische Maße vor Veröffentlichung von Apato bestätigen lassen.
   - Produktfotos sind die Original-Apato-Bilder (Demo). Für die Live-Version
     Freigabe der Bildrechte durch Apato einholen.
   ============================================================= */

export type Produkt = {
  slug: string;
  name: string;
  /** Bildpfad relativ zu /public, sonst Fallback auf Gruppen-/Kategoriebild */
  image?: string;
  /** Kurzbeschreibung für Karte + Detailseite */
  blurb?: string;
  /** optionale Stichpunkte für die Detailseite */
  specs?: string[];
};

export type Gruppe = {
  name: string;
  /** Bild für die Gruppe (Fallback für Produkte ohne eigenes Bild) */
  image?: string;
  produkte: Produkt[];
};

export type Kategorie = {
  slug: string;
  name: string;
  tagline: string;
  /** kurzer Einleitungstext auf der Kategorieseite */
  intro: string;
  image: string;
  /** Reihenfolge im Menü / Grid */
  gruppen: Gruppe[];
};

export const kategorien: Kategorie[] = [
  /* ---------------------------------------------------------- ANZEIGETAFELN */
  {
    slug: "anzeigetafeln",
    name: "Anzeigetafeln",
    tagline: "Spielstand sichtbar für die ganze Tribüne",
    intro:
      "Robuste Sportplatz-Anzeigetafeln für Spielstand, Spielzeit und Mannschaftsnamen — als Standard- oder Premium-Ausführung, optional mit Solarbetrieb und individueller Werbefläche.",
    image: "/images/produkte/anzeigetafel-standard-gross.jpg",
    gruppen: [
      {
        name: "Anzeigetafeln",
        produkte: [
          {
            slug: "anzeigetafel-standard",
            name: "Anzeigetafel STANDARD",
            image: "/images/produkte/anzeigetafel-standard-gross.jpg",
            blurb:
              "Gut ablesbare Anzeigetafel für Spielstand und Spielzeit — das solide Basismodell für Vereine.",
            specs: ["Spielstand & Spielzeit", "Funkbedienung", "Wetterfeste Ausführung"],
          },
          {
            slug: "anzeigetafel-premium",
            name: "Anzeigetafel PREMIUM",
            image: "/images/produkte/anzeigetafel-premium-gross.jpg",
            blurb:
              "Großformatige Premium-Tafel mit erweiterter Anzeige und Platz für Mannschaftsnamen und Werbung.",
            specs: ["Großformat", "Mannschaftsnamen", "Integrierte Werbefläche"],
          },
        ],
      },
      {
        name: "Anzeigetafel Zubehör",
        image: "/images/produkte/anzeigetafel-zubehoer.jpg",
        produkte: [
          { slug: "rahmen-fuer-werbeplatte", name: "Rahmen für Werbeplatte", image: "/images/produkte/anzeigetafel-zubehoer.jpg" },
          { slug: "bedruckte-werbeplatte", name: "Bedruckte Werbeplatte", image: "/images/produkte/anzeigetafel-zubehoer.jpg" },
          { slug: "traegerkonstruktion", name: "Trägerkonstruktion", image: "/images/produkte/anzeigetafel-zubehoer.jpg" },
          { slug: "batteriebetrieb-mit-solarpanel", name: "Batteriebetrieb mit Solarpanel", image: "/images/produkte/anzeigetafel-zubehoer.jpg", blurb: "Autarker Betrieb ganz ohne Stromanschluss — ideal für abgelegene Plätze." },
          { slug: "gesamtkonstruktion", name: "Gesamtkonstruktion", image: "/images/produkte/anzeigetafel-zubehoer.jpg" },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- FUSSBALLTORE */
  {
    slug: "fussballtore",
    name: "Fußballtore",
    tagline: "Tore, wo der Goalie sich zu Hause fühlt",
    intro:
      "Vollverschweißte und transportable Fußballtore in allen gängigen Größen — vom Mini-Tor bis zum WM-Maß 7,32 × 2,44 m. Dazu passende Tornetze und Zubehör.",
    image: "/images/produkte/tore-transportabel.jpg",
    gruppen: [
      {
        name: "Fußballtore in Bodenhülse",
        image: "/images/produkte/tore-bodenhuelse.jpg",
        produkte: [
          { slug: "p-tor", name: "P-Tor", image: "/images/produkte/tore-bodenhuelse.jpg", blurb: "Fest verankertes Bodenhülsen-Tor für den dauerhaften Spielbetrieb." },
          { slug: "wm-kaefig-tor", name: "WM Käfig-Tor", image: "/images/produkte/tore-bodenhuelse.jpg", blurb: "Stabiles Wettkampf-Tor im WM-Maß für Bodenhülsen-Montage." },
        ],
      },
      {
        name: "Fußballtore transportabel",
        image: "/images/produkte/tore-transportabel.jpg",
        produkte: [
          { slug: "tor-732x244m", name: "Fußballtor vollverschweißt – 7,32 × 2,44 m", image: "/images/produkte/tore-transportabel.jpg", specs: ["WM-Maß 7,32 × 2,44 m", "Vollverschweißt", "Transportabel"] },
          { slug: "tor-5x2m", name: "Fußballtor vollverschweißt – 5 × 2 m", image: "/images/produkte/tore-transportabel.jpg", specs: ["Maß 5 × 2 m", "Vollverschweißt"] },
          { slug: "tor-3x2m", name: "Transportables Tor – 3 × 2 m", image: "/images/produkte/tore-transportabel.jpg" },
          { slug: "tor-3x1m", name: "Transportables Tor – 3 × 1 m", image: "/images/produkte/tore-transportabel.jpg" },
          { slug: "tor-18x12m", name: "Fußballtor vollverschweißt oder klappbar – 1,8 × 1,2 m", image: "/images/produkte/tore-transportabel.jpg" },
          { slug: "tor-12x08m", name: "Fußballtor klappbar – 1,2 × 0,8 m", image: "/images/produkte/tore-transportabel.jpg", blurb: "Kompaktes Klapptor fürs Training und kleine Felder." },
        ],
      },
      {
        name: "Tornetze",
        image: "/images/produkte/tornetze.jpg",
        produkte: [
          { slug: "tornetz-732x244m", name: "Tornetz – 7,32 × 2,44 m", image: "/images/produkte/tornetze.jpg" },
          { slug: "tornetz-732x244m-wm-kaefig", name: "Tornetz – 7,32 × 2,44 m für WM Käfig-Tor", image: "/images/produkte/tornetze.jpg" },
          { slug: "tornetz-5x2m", name: "Tornetz – 5 × 2 m", image: "/images/produkte/tornetze.jpg" },
        ],
      },
      {
        name: "Zubehör Tore",
        image: "/images/produkte/tore-zubehoer.jpg",
        produkte: [
          { slug: "bodenhuelsen", name: "Bodenhülsen", image: "/images/produkte/tore-zubehoer.jpg" },
          { slug: "hochklappbarer-bodenrahmen", name: "Hochklappbarer Bodenrahmen", image: "/images/produkte/tore-zubehoer.jpg" },
          { slug: "spannpfosten-wm-kaefig", name: "Spannpfosten für WM Käfig-Tore", image: "/images/produkte/tore-zubehoer.jpg" },
          { slug: "transportgriffe", name: "Transportgriffe für transportable Tore", image: "/images/produkte/tore-zubehoer.jpg" },
          { slug: "transportraeder", name: "Transporträder für transportable Tore", image: "/images/produkte/tore-zubehoer.jpg" },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- TORE ALLER ART */
  {
    slug: "tore",
    name: "Tore aller Art",
    tagline: "Hockey, Rugby & mehr",
    intro:
      "Wettkampf-Hockeytore bis EHL-Niveau, Nachwuchstore und Sonderlösungen wie Rugby-Tore — für jede Sportart das passende Tor.",
    image: "/images/produkte/hockeytore-kampf.jpg",
    gruppen: [
      {
        name: "Hockeytore Kampfmannschaft",
        image: "/images/produkte/hockeytore-kampf.jpg",
        produkte: [
          { slug: "ehl", name: "European Hockey League (EHL)", image: "/images/produkte/hockeytore-kampf.jpg", blurb: "Hockeytor auf höchstem Wettkampfniveau nach EHL-Standard." },
          { slug: "pro-plus", name: "Pro+", image: "/images/produkte/hockeytore-kampf.jpg" },
          { slug: "ultima", name: "Ultima", image: "/images/produkte/hockeytore-kampf.jpg" },
          { slug: "standard", name: "Standard", image: "/images/produkte/hockeytore-kampf.jpg" },
        ],
      },
      {
        name: "Hockeytore Nachwuchs",
        image: "/images/produkte/hockeytore-nachwuchs.jpg",
        produkte: [
          { slug: "jugend-mini", name: "Jugendliche – „Mini\"", image: "/images/produkte/hockeytore-nachwuchs.jpg" },
          { slug: "jugend-standard", name: "Jugendliche – „Standard\"", image: "/images/produkte/hockeytore-nachwuchs.jpg" },
          { slug: "jugend-pro", name: "Jugendliche – „Pro\"", image: "/images/produkte/hockeytore-nachwuchs.jpg" },
        ],
      },
      {
        name: "Sonstige Tore",
        image: "/images/produkte/sonstige-tore.jpg",
        produkte: [
          { slug: "rugby-tor", name: "Rugby-Tor", image: "/images/produkte/sonstige-tore.jpg", blurb: "Normgerechtes Rugby-Tor in stabiler Stahlausführung." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- SPIELERBÄNKE */
  {
    slug: "spieler-betreuerbaenke",
    name: "Spieler- & Betreuerbänke",
    tagline: "Vom soliden Bronze bis zur Gold-Klasse",
    intro:
      "Überdachte Spieler- und Betreuerbänke in drei Ausstattungslinien — Bronze, Silber und Gold — plus passende Sitze und Sonderformen wie die Baseball-Bank.",
    image: "/images/produkte/bank-pure-gross.jpg",
    gruppen: [
      {
        name: "Bronze",
        image: "/images/produkte/bank-bronze.jpg",
        produkte: [
          { slug: "bronze-modular", name: "Bronze modular – teilverschweißt", image: "/images/produkte/bank-bronze.jpg" },
          { slug: "bronze-pure", name: "Bronze pure", image: "/images/produkte/bank-pure-gross.jpg" },
          { slug: "bronze-standard", name: "Bronze Standard", image: "/images/produkte/bank-bronze.jpg" },
        ],
      },
      {
        name: "Silber",
        image: "/images/produkte/bank-silber.jpg",
        produkte: [
          { slug: "silber-benelux", name: "Silber Benelux", image: "/images/produkte/bank-silber.jpg" },
          { slug: "silber-exklusiv", name: "Silber Exklusiv", image: "/images/produkte/bank-silber.jpg" },
        ],
      },
      {
        name: "Gold",
        image: "/images/produkte/bank-gold.jpg",
        produkte: [
          { slug: "gold-bruessel", name: "Gold Brüssel", image: "/images/produkte/bank-gold.jpg", blurb: "Top-Ausstattung mit Komfortsitzen — die Premium-Bank für Stadien." },
          { slug: "gold-liverpool", name: "Gold Liverpool", image: "/images/produkte/bank-gold.jpg" },
        ],
      },
      {
        name: "Sitze",
        image: "/images/produkte/bank-sitze.jpg",
        produkte: [
          { slug: "schalensitze", name: "Schalensitze", image: "/images/produkte/bank-sitze.jpg" },
          { slug: "ledersitze-deluxe", name: "Ledersitze deluxe", image: "/images/produkte/bank-sitze.jpg" },
          { slug: "sitzbank-gepolstert", name: "Sitzbank gepolstert", image: "/images/produkte/bank-sitze.jpg" },
        ],
      },
      {
        name: "Sonderform",
        image: "/images/produkte/bank-baseball.jpg",
        produkte: [
          { slug: "baseball-bank", name: "Baseball-Bank", image: "/images/produkte/bank-baseball.jpg" },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- ZÄUNE */
  {
    slug: "ballzaeune",
    name: "Ballfangzäune",
    tagline: "Barrieren und Zäune für Ihre Anlage",
    intro:
      "Ballfangzäune halten den Ball im Spielfeld und schützen die Umgebung — als reine Netzlösung oder mit stabilen Stahl- bzw. Aluminium-Pfosten.",
    image: "/images/produkte/zaun-alu-gross.jpg",
    gruppen: [
      {
        name: "Ballfangzäune",
        produkte: [
          { slug: "ballfang-netz", name: "Ballfangzaun-Netze", image: "/images/produkte/zaun-netz.jpg", blurb: "Wirtschaftliche Netzlösung zum Abfangen von Bällen." },
          { slug: "ballfangzaun-stahl", name: "Ballfangzaun mit STAHL-Pfosten", image: "/images/produkte/zaun-stahl.jpg", blurb: "Besonders robuste Variante mit verzinkten Stahlpfosten." },
          { slug: "ballfangzaun-alu", name: "Ballfangzaun mit ALU-Pfosten", image: "/images/produkte/zaun-alu-gross.jpg", blurb: "Leichte, korrosionsfreie Aluminium-Konstruktion." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- TRIBÜNEN */
  {
    slug: "tribuenen",
    name: "Tribünen",
    tagline: "Platz für Ihre Zuschauer",
    intro:
      "Mobile und feststehende Zuschauertribünen in individuellen Größen, passende Tribünendächer sowie Sitzbänke und Stadionsitze.",
    image: "/images/produkte/tribuene-gross.jpg",
    gruppen: [
      {
        name: "Tribünen",
        produkte: [
          { slug: "tribuenenbaenke", name: "Tribünenbänke / Sitzbänke", image: "/images/produkte/sitzbank-3.jpg" },
          { slug: "tribuene-mobil", name: "Zuschauertribüne „mobil\"", image: "/images/produkte/tribuene-mobil.jpg", blurb: "Flexibel auf- und abbaubare Tribüne für wechselnde Standorte." },
          { slug: "tribuene-feststehend", name: "Zuschauertribüne „feststehend\"", image: "/images/produkte/tribuene-gross.jpg", blurb: "Reihenanzahl und Länge individuell — die dauerhafte Lösung.", specs: ["Reihen individuell", "Länge individuell"] },
          { slug: "tribuenendach", name: "Tribünendach – individuelle Größen", image: "/images/produkte/tribuene-dach-gross.jpg" },
        ],
      },
      {
        name: "Tribünen-Sitze",
        image: "/images/produkte/stadionsitze.jpg",
        produkte: [
          { slug: "schalensitze-tribuene", name: "Schalensitze", image: "/images/produkte/stadionsitze.jpg" },
          { slug: "klappsitz-business", name: "Business (Klappsitz)", image: "/images/produkte/klappsitz.jpg" },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- INDOOR SOCCER */
  {
    slug: "indoor-soccer",
    name: "Indoor Soccer",
    tagline: "Bandensysteme für die Halle",
    intro:
      "Komplette Indoor-Soccer-Systeme und Bandenanlagen für den Hallenbetrieb — robust, normgerecht und individuell planbar.",
    image: "/images/produkte/fussballkaefige.jpg",
    gruppen: [
      {
        name: "Indoor Soccer",
        produkte: [
          { slug: "indoor-soccer-system", name: "Indoor Soccer System", image: "/images/produkte/fussballkaefige.jpg", blurb: "Bandensystem für den Hallenfußball — individuell für Ihre Halle geplant." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- ÖFFENTLICHE ANLAGEN */
  {
    slug: "oeffentliche-anlagen",
    name: "Öffentliche Anlagen",
    tagline: "Sicher spielen, sicher Sport treiben",
    intro:
      "Bolzplatz-Tore, Soccer Courts, Kleinspielfelder und Multifunktions-Sportplätze für Kommunen, Schulen und öffentliche Flächen — robust und vandalismussicher.",
    image: "/images/produkte/multifunktionsspielplatz.jpg",
    gruppen: [
      {
        name: "Bolzplatz-Tore",
        image: "/images/produkte/bolzplatztore.jpg",
        produkte: [
          { slug: "bolzplatztor-stahl", name: "Bolzplatz-Tor Stahl", image: "/images/produkte/bolzplatztore.jpg" },
          { slug: "bolzplatztor-alu-42mm", name: "Bolzplatz-Tor Alu – mit 42 mm starken Rohren", image: "/images/produkte/bolzplatztore.jpg" },
          { slug: "bolzplatztor-alu-30mm", name: "Bolzplatz-Tor Alu – mit 30 mm starken Rückwand-Rohren", image: "/images/produkte/bolzplatztore.jpg" },
          { slug: "bolzplatztor-herkules", name: "Bolzplatz-Tor „Herkules\"", image: "/images/produkte/bolzplatztore.jpg", blurb: "Extra robustes Tor für stark frequentierte öffentliche Plätze." },
          { slug: "bolzplatztor-multisport", name: "Bolzplatz-Tor „Multisport\"", image: "/images/produkte/bolzplatztore.jpg" },
          { slug: "schusswand", name: "Schußwand", image: "/images/produkte/bolzplatztore.jpg" },
          { slug: "fussball-basketball-kombi", name: "Fußball-Basketball-Kombi-Tor", image: "/images/produkte/multifunktionsspielplatz.jpg", blurb: "Tor und Basketballkorb in einem — clever für kleine Flächen." },
        ],
      },
      {
        name: "Soccer Courts",
        image: "/images/produkte/fussballkaefige.jpg",
        produkte: [
          { slug: "soccercourt-soccer-ei", name: "Soccercourt „Soccer Ei\"", image: "/images/produkte/fussballkaefige.jpg" },
          { slug: "mobiles-bandensystem", name: "Mobiles Bandensystem für alle Ballsportarten", image: "/images/produkte/fussballkaefige.jpg" },
          { slug: "mini-soccer-arena", name: "Mini Soccer Arena", image: "/images/produkte/fussballkaefige.jpg" },
          { slug: "soccer-court-standard-alu", name: "Soccer Court „Standard Alu\"", image: "/images/produkte/fussballkaefige.jpg" },
        ],
      },
      {
        name: "Kleinspielfelder",
        image: "/images/produkte/kleinspielfelder.jpg",
        produkte: [
          { slug: "outdoor-courts", name: "Outdoor Courts", image: "/images/produkte/kleinspielfelder.jpg" },
          { slug: "soccer-boarding-courts", name: "Soccer Boarding Courts", image: "/images/produkte/kleinspielfelder.jpg" },
        ],
      },
      {
        name: "Multifunktions-Sportplatz",
        image: "/images/produkte/multifunktionsspielplatz.jpg",
        produkte: [
          { slug: "multifunktions-sportplatz", name: "Multifunktions-Sportplatz", image: "/images/produkte/multifunktionsspielplatz.jpg", blurb: "Eine Anlage für viele Sportarten — ideal für Schulen und Gemeinden." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- PLATZ & TRAINING */
  {
    slug: "platz-training",
    name: "Platz & Training",
    tagline: "Ausrüstung für Platz und Trainingsalltag",
    intro:
      "Alles rund um Platzpflege und Training: Eckfahnen, Stadionbänke, Reinigungsmatten, Freistoßdummys, Trainings-Sets und Rasen-Markierfarbe.",
    image: "/images/produkte/trainingszubehoer.jpg",
    gruppen: [
      {
        name: "Eckfahnen",
        image: "/images/produkte/eckfahnen.jpg",
        produkte: [
          { slug: "set-eckfahnen-fest", name: "Set Eckfahnen fest", image: "/images/produkte/eckfahnen.jpg" },
          { slug: "set-eckfahnen-flexibel", name: "Set Eckfahnen flexibel", image: "/images/produkte/eckfahnen.jpg" },
        ],
      },
      {
        name: "Sitzbänke / Stadionbänke",
        produkte: [
          { slug: "sitzbank-stadionbank", name: "Sitzbänke / Stadionbänke", image: "/images/produkte/spielfeldabsperrung.jpg" },
        ],
      },
      {
        name: "Reinigung",
        produkte: [
          { slug: "reinigungsmatten-pressroste", name: "Reinigungsmatten und Pressroste", image: "/images/produkte/spielfeldabsperrung.jpg" },
        ],
      },
      {
        name: "Freistoßwände",
        image: "/images/produkte/freistosswand.jpg",
        produkte: [
          { slug: "freistossdummy-set", name: "5er Freistoßdummy-Set", image: "/images/produkte/freistosswand.jpg" },
          { slug: "freistossdummy-set-wagen", name: "5er Freistoßdummy-Set mit Dummywagen", image: "/images/produkte/freistosswand.jpg" },
          { slug: "dummywagen", name: "Dummywagen", image: "/images/produkte/freistosswand.jpg" },
        ],
      },
      {
        name: "Trainings-Sets",
        image: "/images/produkte/trainingszubehoer.jpg",
        produkte: [
          { slug: "trainings-set-standard", name: "Trainings-Set Standard", image: "/images/produkte/trainingszubehoer.jpg" },
          { slug: "trainings-set-premium", name: "Trainings-Set Premium", image: "/images/produkte/trainingszubehoer.jpg" },
        ],
      },
      {
        name: "Markierung",
        image: "/images/produkte/markierfarbe.jpg",
        produkte: [
          { slug: "rasen-markierfarbe", name: "Rasen-Markierfarbe", image: "/images/produkte/markierfarbe.jpg", blurb: "Leuchtstarke, rasenschonende Markierfarbe für klare Linien." },
        ],
      },
    ],
  },
];

/* ---------- Helfer ---------- */

export type FlachesProdukt = Produkt & {
  kategorieSlug: string;
  kategorieName: string;
  gruppeName: string;
  /** effektives Bild (eigenes -> Gruppe -> Kategorie) */
  bild: string;
};

/** Alle Produkte flach mit Kontext + aufgelöstem Bild */
export function alleProdukte(): FlachesProdukt[] {
  const out: FlachesProdukt[] = [];
  for (const k of kategorien) {
    for (const g of k.gruppen) {
      for (const p of g.produkte) {
        out.push({
          ...p,
          kategorieSlug: k.slug,
          kategorieName: k.name,
          gruppeName: g.name,
          bild: p.image ?? g.image ?? k.image,
        });
      }
    }
  }
  return out;
}

export function kategorieBySlug(slug: string): Kategorie | undefined {
  return kategorien.find((k) => k.slug === slug);
}

export function produktInKategorie(katSlug: string, prodSlug: string): FlachesProdukt | undefined {
  return alleProdukte().find((p) => p.kategorieSlug === katSlug && p.slug === prodSlug);
}

/** Gesamtzahl Produkte (für Kennzahlen) */
export const produktAnzahl = alleProdukte().length;
