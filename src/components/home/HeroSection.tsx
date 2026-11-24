'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FlowerIcon, DaisyIcon } from '@/components/ui/FlowerDeco';

export const HeroSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const scrollToNext = () => {
    const el = document.getElementById('admissions-2027') || document.getElementById('established');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-start overflow-hidden bg-charcoal">
      {/* 1. Fullscreen Cinematic Background Video / Reduced-Motion Poster */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {prefersReducedMotion ? (
          <Image
            src="/images/hero-video-poster.jpg"
            alt="Little Flowers Preschool children running happily together across courtyard in Makola"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-video-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            aria-label="Little Flowers Preschool children running happily together across courtyard in Makola"
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
            <source src="/videos/hero-seamless-loop.webm" type="video/webm" />
            <source src="/videos/hero-seamless-loop.mp4" type="video/mp4" />
            {/* Standard HTML5 fallback */}
            <img
              src="/images/hero-video-poster.jpg"
              alt="Little Flowers Preschool children running in courtyard"
              className="w-full h-full object-cover"
            />
          </video>
        )}
      </div>

      {/* 2. Carefully Balanced Scrim Overlay for Perfect Typography Readability */}
      {/* Horizontal gradient: richer dark on left where text lives, translucent on right where children run */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/25 sm:via-charcoal/65 sm:to-charcoal/15 pointer-events-none z-10" />
      {/* Vertical gradient: top for navbar contrast and bottom for smooth bleed into page */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none z-10" />

      {/* 3. Subtle Organic Floating Flower Elements (Periphery Only) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-15 select-none"
        aria-hidden="true"
      >
        <div className="absolute top-[20%] right-[6%] opacity-30 animate-float-slow hidden sm:block">
          <DaisyIcon size={34} color="#FFD66B" />
        </div>
        <div className="absolute bottom-[22%] right-[10%] opacity-25 animate-float-medium hidden lg:block">
          <FlowerIcon size={30} color="#F28B78" />
        </div>
        <div className="absolute top-[35%] left-[2%] opacity-15 animate-float-reverse hidden sm:block">
          <FlowerIcon size={26} color="#CBE8D5" />
        </div>
      </div>

      {/* 4. Left-Aligned Editorial Content with Staggered Entrance Animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          {/* Badge: Brand Name & Established 2010 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-md ${
              isSinhala ? 'mb-3 sm:mb-4' : 'mb-5 sm:mb-6'
            }`}
          >
            <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 ring-1 ring-white/60 bg-[#C3986B]">
              <Image
                src="/images/little-flowers-logo-badge.png"
                alt="Logo"
                width={20}
                height={20}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`text-xs sm:text-sm uppercase tracking-widest text-white ${
                isSinhala ? 'font-sinhala font-bold tracking-normal' : 'font-heading font-extrabold'
              }`}
            >
              {isSinhala
                ? 'ලිට්ල් ෆ්ලවර්ස් පෙර පාසල • EST. 2010'
                : 'LITTLE FLOWERS PRESCHOOL • EST. 2010'}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={`font-heading font-extrabold text-white drop-shadow-lg ${
              isSinhala
                ? 'text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-sinhala leading-[1.2] tracking-normal max-w-2xl'
                : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.12]'
            }`}
          >
            {isSinhala ? (
              <span>{t.hero.headline}</span>
            ) : (
              <>
                Little Hearts,{' '}
                <span className="text-yellow-sunshine relative inline-block">
                  Big Dreams.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-coral"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 10 Q 50 20, 100 10"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </>
            )}
          </motion.h1>

          {/* Supporting Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`font-heading font-bold text-coral-light drop-shadow-md ${
              isSinhala
                ? 'mt-2.5 sm:mt-3 text-base sm:text-lg lg:text-xl xl:text-2xl font-sinhala leading-snug'
                : 'mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl leading-snug'
            }`}
          >
            {t.hero.subheadline}
          </motion.h2>

          {/* Emotional Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className={`text-white/90 leading-relaxed drop-shadow ${
              isSinhala
                ? 'mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base font-sinhala max-w-xl text-white/85'
                : 'mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl font-body max-w-2xl'
            }`}
          >
            {t.hero.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className={`flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto ${
              isSinhala ? 'mt-5 sm:mt-6' : 'mt-8 sm:mt-10'
            }`}
          >
            <Link
              href="/admissions"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-coral text-white font-bold shadow-xl shadow-coral/40 hover:bg-coral-dark hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isSinhala
                  ? 'px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-sinhala'
                  : 'px-8 py-4 text-base font-heading'
              }`}
            >
              <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{isSinhala ? 'ඇතුළත් කිරීම් විමසන්න' : 'Enquire Now'}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 shrink-0" />
            </Link>

            <button
              onClick={scrollToNext}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/15 backdrop-blur-md text-white font-bold border-2 border-white/40 hover:bg-white/25 hover:border-white shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isSinhala
                  ? 'px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-sinhala'
                  : 'px-7 py-4 text-base font-heading'
              }`}
            >
              <span>{isSinhala ? 'අපේ පෙරපාසල හඳුනාගන්න' : 'Discover Our Preschool'}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* 5. Elegant Scroll-Down Indicator (Bottom-Center) */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-2 text-white/75 hover:text-white transition-colors focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors drop-shadow">
            {isSinhala ? 'පහළට යන්න' : 'Scroll to explore'}
          </span>
          <div className="w-5 sm:w-6 h-9 sm:h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1 group-hover:border-white transition-colors shadow-sm">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-2 rounded-full bg-yellow-sunshine"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
