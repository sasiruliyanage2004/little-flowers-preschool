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

// Key explicitly reserved for manual user click overrides
const USER_CHOICE_KEY = 'lf_user_choice';
const LEGACY_STORAGE_KEY = 'little_flowers_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'si' (Sinhala) since Little Flowers Preschool is in Makola, Sri Lanka
  const [language, setLanguageState] = useState<Language>('si');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Wipe out stale legacy keys that were automatically set to 'en' in old builds
    try {
      if (localStorage.getItem(LEGACY_STORAGE_KEY) && !localStorage.getItem(USER_CHOICE_KEY)) {
        localStorage.removeItem(LEGACY_STORAGE_KEY);
      }
    } catch {
      // ignore
    }

    // 2. Check if the user has an EXPLICIT manual preference
    let manualChoice: Language | null = null;
    try {
      const saved = localStorage.getItem(USER_CHOICE_KEY) as Language | null;
      if (saved === 'en' || saved === 'si') {
        manualChoice = saved;
      }
    } catch {
      // ignore
    }

    if (manualChoice) {
      setLanguageState(manualChoice);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = manualChoice;
      }
      setMounted(true);
      return;
    }

    // 3. No manual user choice: RESOLVE BASED ON TIMEZONE & IP
    let resolved: Language = 'si';

    // A. Check Client Device TimeZone (Instant, zero latency)
    // Non-Sri Lanka timezones (e.g. America/*, Europe/*, Australia/*) default to 'en'
    if (typeof Intl !== 'undefined') {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz && tz !== 'Asia/Colombo') {
          resolved = 'en';
        } else if (tz === 'Asia/Colombo') {
          resolved = 'si';
        }
      } catch {
        // ignore
      }
    }

    // B. Check Cookie set by Vercel Edge Middleware
    if (typeof document !== 'undefined') {
      try {
        const cookieMatch = document.cookie.match(
          /(?:^|;\s*)little_flowers_lang=([a-zA-Z]+)/
        );
        if (cookieMatch && (cookieMatch[1] === 'en' || cookieMatch[1] === 'si')) {
          resolved = cookieMatch[1] as Language;
        }
      } catch {
        // ignore
      }
    }

    setLanguageState(resolved);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = resolved;
    }
    setMounted(true);

    // C. Verify with Server-Side Geo-IP endpoint in background
    try {
      fetch('/api/detect-lang')
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data && (data.language === 'en' || data.language === 'si')) {
            const hasManual = localStorage.getItem(USER_CHOICE_KEY);
            if (!hasManual && data.language !== resolved) {
              setLanguageState(data.language);
              if (typeof document !== 'undefined') {
                document.documentElement.lang = data.language;
              }
            }
          }
        })
        .catch(() => {
          // ignore
        });
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      // Save explicit user choice so it takes precedence over Geo-IP
      localStorage.setItem(USER_CHOICE_KEY, lang);
      localStorage.setItem(LEGACY_STORAGE_KEY, lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        document.cookie = `lf_user_choice=${lang}; path=/; max-age=31536000; SameSite=Lax`;
        document.cookie = `little_flowers_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      }
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'si' : 'en');
  };

  // During SSR or before mount, use 'si' (Sinhala) as primary preschool locale
  const currentLang = mounted ? language : 'si';
  const t = translations[currentLang] || translations.si;
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
