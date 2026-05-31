// Hilfsfunktion für interne Links/Bilder, damit sie auch unter dem
// GitHub-Pages-Unterpfad (/apato-sport/) funktionieren.
// import.meta.env.BASE_URL ist z.B. "/apato-sport/" (mit Slash am Ende).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Setzt den Basis-Pfad vor einen absoluten internen Pfad ("/produkte" -> "/apato-sport/produkte"). */
export function u(path: string): string {
  if (!path.startsWith("/")) return path; // externe Links / tel: / mailto: unverändert
  return BASE + path;
}
