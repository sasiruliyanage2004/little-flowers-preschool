'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { admissions2027Campaign } from '@/data/siteContent';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose }) => {
  const { t, isSinhala } = useLanguage();
  const c = t.admissionsCampaign;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-charcoal-dark border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-charcoal/95 border-b border-white/10 text-white z-10">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-sunshine shrink-0 animate-pulse" />
            <h3
              id="poster-modal-title"
              className="font-heading font-bold text-sm sm:text-base text-cream truncate"
            >
              {isSinhala ? '2027 නිල ඇතුළත් වීමේ දැන්වීම' : 'Official 2027 Admissions Announcement'}
            </h3>
            <span className="hidden md:inline text-xs text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full">
              4160 × 2496 Original
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={admissions2027Campaign.posterImage}
              target="_blank"
              rel="noopener noreferrer"
              download="Little-Flowers-Preschool-Admissions-2027.jpeg"
              aria-label={isSinhala ? 'මුල් පෝස්ටරය බාගත කරන්න' : 'Download Original Poster'}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading text-xs font-semibold flex items-center gap-1.5 transition-colors min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{isSinhala ? 'බාගත කරන්න' : 'Download'}</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label={c.closePoster || 'Close poster'}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-coral text-white transition-all transform hover:scale-105 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Poster Image Container */}
        <div className="relative overflow-auto flex-1 p-2 sm:p-4 flex items-center justify-center bg-charcoal/70">
          <div className="relative w-full aspect-[4160/2496] max-h-[75vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/5">
            <Image
              src={admissions2027Campaign.posterImage}
              alt={c.posterAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-4 sm:px-6 py-3 bg-charcoal/95 border-t border-white/10 text-center text-xs text-cream/80 font-body">
          <p>
            {c.authenticityNote} • {isSinhala ? 'දුරකථන:' : 'Telephone:'}{' '}
            <a
              href={`tel:${admissions2027Campaign.phone}`}
              className="text-yellow-sunshine font-bold hover:underline"
            >
              {admissions2027Campaign.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
