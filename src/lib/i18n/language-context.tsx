"use client";

import React, { createContext, useContext, useState, useSyncExternalStore } from "react";
import { Locale, defaultLocale, translations } from "@/lib/i18n/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  toggleLocale: () => {},
  t: (key: string) => key,
});

// Storage event subscriber for synchronizing locale across tabs and components
function subscribeToStorage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("cartx_locale_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("cartx_locale_change", callback);
  };
}

function getClientLocaleSnapshot(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const saved = localStorage.getItem("cartx_locale") as Locale | null;
    if (saved === "en" || saved === "bn") {
      return saved;
    }
  } catch {
    // LocalStorage blocked
  }
  return defaultLocale;
}

function getServerLocaleSnapshot(): Locale {
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // useSyncExternalStore prevents cascading renders and ensures hydration safety
  const currentLocale = useSyncExternalStore(
    subscribeToStorage,
    getClientLocaleSnapshot,
    getServerLocaleSnapshot
  );

  const [fallbackLocale, setFallbackLocale] = useState<Locale>(currentLocale);

  // Active locale preference
  const locale = currentLocale || fallbackLocale;

  const setLocale = (newLocale: Locale) => {
    setFallbackLocale(newLocale);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("cartx_locale", newLocale);
        document.cookie = `cartx_locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        document.documentElement.lang = newLocale;
        window.dispatchEvent(new Event("cartx_locale_change"));
      } catch {
        // storage disabled
      }
    }
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "bn" : "en";
    setLocale(next);
  };

  const t = (key: string): string => {
    const dict = translations[locale] || translations.en;
    return dict[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      <div className={locale === "bn" ? "font-bengali" : ""} data-lang={locale}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

