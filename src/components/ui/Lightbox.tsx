'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { GalleryItem } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const { isSinhala } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (currentIndex === null) return;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];
  const langKey = isSinhala ? 'si' : 'en';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-desc"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Bar with counter & close */}
      <div
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-heading font-medium text-sm sm:text-base text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
          {currentIndex + 1} / {items.length}
        </span>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:scale-110 active:scale-95"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </>
      )}

      {/* Main Content Modal */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-4 flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[55vh] sm:h-[68vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 flex items-center justify-center">
          {currentItem.videoSrc ? (
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-full object-contain"
              poster={currentItem.imageSrc}
            >
              <source src="/videos/preschool-children-running.webm" type="video/webm" />
              <source src={currentItem.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={currentItem.originalSrc || currentItem.imageSrc}
              alt={currentItem.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
          )}
        </div>

        {/* Caption Panel */}
        <div className="mt-4 text-center max-w-2xl px-4 text-white">
          <h3 id="lightbox-title" className="text-lg sm:text-xl font-heading font-bold text-yellow-sunshine">
            {currentItem.title[langKey]}
          </h3>
          <p id="lightbox-desc" className="mt-1 text-sm sm:text-base text-white/80 font-body leading-relaxed">
            {currentItem.description[langKey]}
          </p>
        </div>
      </div>
    </div>
  );
};
