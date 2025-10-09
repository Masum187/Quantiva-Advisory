// src/i18nRedirect.ts
const LOCALES = ["de", "en"] as const;
type Locale = typeof LOCALES[number];

function getNavigatorLocale(): Locale {
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("de") ? "de" : "en";
}

export function getPreferredLocale(): Locale {
  const saved = localStorage.getItem("qlang");
  if (saved && LOCALES.includes(saved as Locale)) return saved as Locale;
  return getNavigatorLocale();
}

export function rememberLocale(lng: Locale) {
  localStorage.setItem("qlang", lng);
}

export function redirectFromRootIfNeeded() {
  const { pathname, search, hash } = window.location;
  // nur von der Root ohne Sprachpräfix weiterleiten
  if (pathname === "/" || pathname === "") {
    const lng = getPreferredLocale();
    window.location.replace(`/${lng}/${search}${hash}`);
  }
}

