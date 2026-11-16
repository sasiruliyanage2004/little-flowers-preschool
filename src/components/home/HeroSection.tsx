'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Play, Heart, ShieldCheck, SunMedium } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FloatingPetals } from '@/components/ui/FloatingPetals';
import { FlowerIcon, DaisyIcon } from '@/components/ui/FlowerDeco';

export const HeroSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-cream overflow-hidden">
      {/* Decorative Floating Petals */}
      <FloatingPetals />

      {/* Soft Pastel Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-soft/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-yellow-sunshine/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-mint-soft/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-charcoal/10 shadow-sm mb-6 backdrop-blur-md transform hover:scale-105 transition-transform duration-200">
              <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal">
                {t.hero.estBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-charcoal tracking-tight leading-[1.12]">
              {isSinhala ? (
                <span className="font-sinhala">{t.hero.headline}</span>
              ) : (
                <>
                  Little Hearts,{' '}
                  <span className="relative inline-block text-coral">
                    Big Dreams.
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-yellow-sunshine"
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
            </h1>

            {/* Supporting Headline */}
            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-coral-dark/90 leading-snug">
              {t.hero.subheadline}
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-charcoal-light font-body leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-coral text-white font-heading font-bold text-base shadow-lg shadow-coral/30 hover:bg-coral-dark hover:shadow-xl hover:shadow-coral/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-charcoal font-heading font-bold text-base border-2 border-charcoal/10 hover:border-coral/40 hover:bg-cream-50 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.primaryCta}</span>
              </Link>
            </div>

            {/* Authentic Video Play Trigger */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="group flex items-center gap-3 text-left focus:outline-none"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-sunshine flex items-center justify-center text-charcoal shadow-md group-hover:scale-110 group-hover:bg-yellow-dark transition-all duration-200">
                  <Play className="w-5 h-5 fill-charcoal text-charcoal ml-0.5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold tracking-wider text-charcoal-muted">
                    {t.videoShowcase.videoBadge}
                  </span>
                  <span className="block text-sm font-heading font-bold text-charcoal group-hover:text-coral transition-colors">
                    {t.hero.watchVideo}
                  </span>
                </div>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-10 pt-8 border-t border-charcoal/10 grid grid-cols-3 gap-4 w-full max-w-xl">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-coral shrink-0" />
                <span className="text-xs sm:text-sm font-heading font-semibold text-charcoal">
                  {t.hero.floatingTag1}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SunMedium className="w-5 h-5 text-yellow-dark shrink-0" />
                <span className="text-xs sm:text-sm font-heading font-semibold text-charcoal">
                  {t.hero.floatingTag2}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-heading font-semibold text-charcoal">
                  {t.hero.floatingTag3}
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition - Authentic Preschool Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Floral Badges */}
              <div className="absolute -top-6 -left-6 z-20 hidden sm:block animate-float-slow">
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-charcoal/5 flex items-center gap-2">
                  <DaisyIcon size={32} color="#F28B78" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-charcoal-muted">Established</span>
                    <span className="block text-xs font-bold text-charcoal">2010 • Makola</span>
                  </div>
                </div>
              </div>

              {/* Main Prominent Photo: Happy Children Running in Courtyard */}
              <div className="relative rounded-4xl sm:rounded-5xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white aspect-[4/3] group">
                <Image
                  src="/images/opt-preschool-activity-banner.jpg"
                  alt="Little Flowers Preschool children running happily together across the school courtyard in Makola"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />
                
                {/* Photo Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-coral/90 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Joyful Play
                  </span>
                  <p className="text-xs sm:text-sm font-medium drop-shadow-md">
                    {isSinhala ? 'සිනහවෙන් පිරි පෙරපාසල් ළමා කාලය' : 'Authentic childhood happiness at Little Flowers'}
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Photo: Children in Uniform at Classroom Entrance */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-44 sm:w-56 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/opt-children-play-smiles.jpg"
                  alt="Students in official Little Flowers Preschool uniform smiling outside classroom"
                  fill
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-charcoal/80 backdrop-blur-sm rounded-xl text-white text-[10px] font-bold text-center">
                  {isSinhala ? 'අපේ දූ දරුවන්' : 'Official Uniform'}
                </div>
              </div>

              {/* Decorative Playful Flower */}
              <div className="absolute -bottom-6 left-6 z-20">
                <FlowerIcon size={42} color="#FFD66B" className="drop-shadow-md animate-gentle-spin" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-charcoal rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/videos/preschool-children-running.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster="/images/opt-preschool-activity-banner.jpg"
              />
            </div>
            <div className="p-4 sm:p-6 bg-charcoal text-white flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-yellow-sunshine">
                  {t.videoShowcase.headline}
                </h3>
                <p className="text-xs sm:text-sm text-white/70">
                  {t.videoShowcase.subhead}
                </p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
