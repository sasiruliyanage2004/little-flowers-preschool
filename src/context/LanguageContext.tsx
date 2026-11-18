'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';
import { translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
  isSinhala: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'little_flowers_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let resolvedLang: Language | null = null;

    // 1. Check if user already made an explicit manual choice in localStorage
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === 'en' || savedLang === 'si') {
        resolvedLang = savedLang;
      }
    } catch {
      // localStorage restricted or unavailable
    }

    // 2. If no saved choice, check cookie set by Vercel GeoIP Middleware
    if (!resolvedLang && typeof document !== 'undefined') {
      try {
        const cookieMatch = document.cookie.match(
          new RegExp(`(?:^|;\\s*)${STORAGE_KEY}=([a-zA-Z]+)`)
        );
        const cookieVal = cookieMatch ? cookieMatch[1] : null;
        if (cookieVal === 'en' || cookieVal === 'si') {
          resolvedLang = cookieVal as Language;
        }
      } catch {
        // ignore
      }
    }

    // 3. If still not resolved, check client timezone (Asia/Colombo indicates Sri Lanka)
    if (!resolvedLang && typeof Intl !== 'undefined') {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz === 'Asia/Colombo') {
          resolvedLang = 'si';
        }
      } catch {
        // ignore
      }
    }

    // 4. Check navigator language (e.g. si-LK)
    if (!resolvedLang && typeof navigator !== 'undefined') {
      const navLangs = navigator.languages || [navigator.language];
      if (navLangs.some((l) => l && l.toLowerCase().startsWith('si'))) {
        resolvedLang = 'si';
      }
    }

    // Apply the resolved language (defaults to 'en' if outside Sri Lanka)
    const initialLang = resolvedLang || 'en';
    setLanguageState(initialLang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = initialLang;
    }
    setMounted(true);

    // 5. Asynchronous server IP verification if user has never saved a preference
    try {
      const hasSaved = localStorage.getItem(STORAGE_KEY);
      if (!hasSaved) {
        fetch('/api/detect-lang')
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data && (data.language === 'en' || data.language === 'si')) {
              // If the server-detected language differs and user hasn't explicitly set one, sync it
              const currentSaved = localStorage.getItem(STORAGE_KEY);
              if (!currentSaved && data.language !== initialLang) {
                setLanguageState(data.language);
                if (typeof document !== 'undefined') {
                  document.documentElement.lang = data.language;
                  document.cookie = `${STORAGE_KEY}=${data.language}; path=/; max-age=31536000; SameSite=Lax`;
                }
              }
            }
          })
          .catch(() => {
            // silent fallback
          });
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      }
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'si' : 'en');
  };

  // If not mounted yet, default 'en' during SSR to prevent hydration mismatch
  const currentLang = mounted ? language : 'en';
  const t = translations[currentLang] || translations.en;
  const isSinhala = currentLang === 'si';

  return (
    <LanguageContext.Provider
      value={{
        language: currentLang,
        setLanguage,
        toggleLanguage,
        t,
        isSinhala,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
