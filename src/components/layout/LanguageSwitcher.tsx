'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center bg-white/80 backdrop-blur-md p-1 rounded-full border border-charcoal/10 shadow-sm ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-2 pr-1 text-charcoal/50">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-heading font-semibold rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-coral text-white shadow-sm'
            : 'text-charcoal-light hover:text-charcoal hover:bg-black/5'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('si')}
        className={`px-2.5 py-1 text-xs font-sinhala font-medium rounded-full transition-all duration-200 ${
          language === 'si'
            ? 'bg-coral text-white shadow-sm'
            : 'text-charcoal-light hover:text-charcoal hover:bg-black/5'
        }`}
        aria-pressed={language === 'si'}
      >
        සිංහල
      </button>
    </div>
  );
};
