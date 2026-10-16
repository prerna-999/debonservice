"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale, LANGUAGES, LANGUAGE_LIST } from "@/i18n/LocaleProvider";

/** Header language switcher: shows "ENG" by default, other languages open from the same place. */
export default function LocaleSwitcher() {
  const { lang, setLang } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    // translate="no": the switcher labels stay in their own language
    <div className={`lang-switch notranslate ${open ? "is-open" : ""}`} translate="no" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{LANGUAGES[lang].short}</span>
        <ChevronDown size={14} strokeWidth={2.6} className="lang-chevron" aria-hidden />
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label="Language">
          {LANGUAGE_LIST.map((l) => (
            <li key={l} role="option" aria-selected={l === lang}>
              <button
                type="button"
                className={l === lang ? "is-active" : ""}
                onClick={() => { setOpen(false); setLang(l); }}
              >
                <span className="lang-native">{LANGUAGES[l].native}</span>
                <span className="lang-short">{LANGUAGES[l].short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
