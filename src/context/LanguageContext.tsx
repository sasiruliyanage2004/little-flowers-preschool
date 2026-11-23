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

// Key for manual user clicks within the active session
const SESSION_CHOICE_KEY = 'lf_session_lang';
const LEGACY_USER_CHOICE_KEY = 'lf_user_choice';
const LEGACY_STORAGE_KEY = 'little_flowers_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'si' (Sinhala) since Little Flowers Preschool is in Makola, Sri Lanka
  const [language, setLanguageState] = useState<Language>('si');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Wipe out stale persistent keys from earlier testing builds so they don't lock Sri Lankan users to English
    try {
      if (localStorage.getItem(LEGACY_USER_CHOICE_KEY)) {
        localStorage.removeItem(LEGACY_USER_CHOICE_KEY);
      }
      if (localStorage.getItem(LEGACY_STORAGE_KEY)) {
        localStorage.removeItem(LEGACY_STORAGE_KEY);
      }
      // Remove legacy 1-year cookie
      document.cookie = 'lf_user_choice=; path=/; max-age=0; SameSite=Lax';
    } catch {
      // ignore
    }

    // 2. Check if user explicitly clicked the switcher in THIS ACTIVE TAB SESSION
    let sessionChoice: Language | null = null;
    try {
      const saved = sessionStorage.getItem(SESSION_CHOICE_KEY) as Language | null;
      if (saved === 'en' || saved === 'si') {
        sessionChoice = saved;
      }
    } catch {
      // ignore
    }

    if (sessionChoice) {
      setLanguageState(sessionChoice);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = sessionChoice;
      }
      setMounted(true);
      return;
    }

    // 3. No manual session choice: RESOLVE BASED ON IP GEOLOCATION
    let resolved: Language = 'si'; // Default to Sinhala for Sri Lanka

    // Check Cookie set by Vercel Edge Middleware
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

    // 4. Verify with Server-Side Geo-IP endpoint in real time
    try {
      fetch('/api/detect-lang', { cache: 'no-store' })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data && (data.language === 'en' || data.language === 'si')) {
            const hasActiveSession = sessionStorage.getItem(SESSION_CHOICE_KEY);
            if (!hasActiveSession && data.language !== resolved) {
              setLanguageState(data.language);
              if (typeof document !== 'undefined') {
                document.documentElement.lang = data.language;
                document.cookie = `little_flowers_lang=${data.language}; path=/; SameSite=Lax`;
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
      // Save for current browser session so user can switch freely
      sessionStorage.setItem(SESSION_CHOICE_KEY, lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        document.cookie = `lf_session_lang=${lang}; path=/; SameSite=Lax`;
        document.cookie = `little_flowers_lang=${lang}; path=/; SameSite=Lax`;
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
