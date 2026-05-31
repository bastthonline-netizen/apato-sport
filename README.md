# Apato Sport — Website (Entwurf / Demo)

Neue Website für **Apato Sport** (Hersteller von Sportplatzprodukten).
Erstellt von **DT Webstudio** als Akquise-/Demo-Projekt.

## Technik
- **Astro 6** + **Tailwind CSS 4** (gleicher Stack wie ASV/TC Kiefersfelden)
- Komplett **statisch** (kein Server, keine Datenbank) → minimale Angriffsfläche
- Katalog mit **Anfrage-Funktion** (kein Bezahl-Shop)

## Lokal starten
Doppelklick auf **„Website starten.bat"** — oder:

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # erzeugt dist/
```

## Struktur
- `src/data/produkte.ts` — komplette Produkt-Hierarchie (Kategorie → Gruppe → Produkt)
- `src/data/site.ts` — Stammdaten (Kontakt, USPs)
- `src/pages/produkte/` — Übersicht, Kategorie-Seiten, Produkt-Detailseiten (dynamisch)
- `public/images/` — Logo, Banner (`apato/`), Produktfotos (`produkte/`)
- `vercel.json` — Security-Header (CSP, HSTS u.a.)

## ⚠️ Vor Live-Schaltung erledigen
1. **Impressum & Datenschutz** mit echten Daten füllen (aktuell Platzhalter) und rechtlich prüfen.
2. **Preise & Maße** der Produkte von Apato bestätigen lassen.
3. **Bildrechte** für die Produktfotos von Apato freigeben lassen.
4. **Formular-Endpoint** setzen (`FORM_ENDPOINT` in `src/pages/kontakt.astro`, z.B. Formspree) —
   ohne Endpoint nutzt das Formular einen `mailto:`-Fallback.
5. **Google Fonts lokal** ausliefern (DSGVO), dann CSP-Eintrag für fonts.googleapis.com entfernen.
6. **Echte Firmenadresse** in `src/data/site.ts` eintragen.
