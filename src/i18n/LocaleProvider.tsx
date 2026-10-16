"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";


export type LangCode = "en" | "ar"   ;

export const LANGUAGES: Record<LangCode, { short: string; label: string; native: string; htmlLang: string; google: string }> = {
  en: { short: "ENG", label: "English", native: "English",       htmlLang: "en",      google: "en" },
  ar: { short: "ARA", label: "Arabic",  native: "العربية",       htmlLang: "ar",      google: "ar" },
};

export const LANGUAGE_LIST = Object.keys(LANGUAGES) as LangCode[];

// ---------- 2) Whole-site translation (Google Translate engine) ----------
const STORAGE_KEY = "debon.lang";
const GT_INCLUDED = LANGUAGE_LIST.map((l) => LANGUAGES[l].google).join(",");

function setTranslateCookie(lang: LangCode) {
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  if (lang === "en") {
    document.cookie = `googtrans=; ${expire}; path=/`;
    document.cookie = `googtrans=; ${expire}; path=/; domain=${location.hostname}`;
  } else {
    const value = `/en/${LANGUAGES[lang].google}`;
    document.cookie = `googtrans=${value}; path=/`;
    document.cookie = `googtrans=${value}; path=/; domain=${location.hostname}`;
  }
}

function loadGoogleTranslate() {
  if (document.getElementById("google-translate-script")) return;
  const holder = document.createElement("div");
  holder.id = "google_translate_element";
  holder.style.display = "none";
  document.body.appendChild(holder);

  (window as any).googleTranslateElementInit = () => {
    const g = (window as any).google;
    new g.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: GT_INCLUDED, autoDisplay: false },
      "google_translate_element",
    );
  };
  const s = document.createElement("script");
  s.id = "google-translate-script";
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  s.async = true;
  document.body.appendChild(s);
}

/** Google Translate rewrites text nodes; this stops React crashing when it re-renders them. */
function patchDomForTranslate() {
  const proto = Node.prototype as any;
  if (proto.__debonPatched) return;
  proto.__debonPatched = true;
  const removeChild = proto.removeChild;
  proto.removeChild = function (child: Node) {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child);
  };
  const insertBefore = proto.insertBefore;
  proto.insertBefore = function (node: Node, ref: Node | null) {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref);
  };
}

// ---------- 3) Provider & hook ----------
type Ctx = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  /** kept so existing t("...") calls keep working; the page itself is translated automatically */
  t: (text: string) => string;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  // "en" on server and first client render -> no hydration mismatch
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    let l: LangCode = "en";
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LangCode | null;
      if (saved && saved in LANGUAGES) l = saved;
    } catch {}
    setLangState(l);
    setTranslateCookie(l);
    if (l !== "en") {
      patchDomForTranslate();
      loadGoogleTranslate();
    }
  }, []);

  // <html lang> only. Layout direction is NOT changed, so the design stays identical.
  useEffect(() => {
    document.documentElement.lang = LANGUAGES[lang].htmlLang;
  }, [lang]);

  const setLang = useCallback((next: LangCode) => {
    if (next === lang) return;
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    setTranslateCookie(next);
    setLangState(next);
    window.location.reload(); // Google Translate applies the cookie on load
  }, [lang]);

  const t = useCallback((text: string) => text, []);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
