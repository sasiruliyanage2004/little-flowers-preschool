'use client';

import React from 'react';
import Image from 'next/image';
import { Palette, Music, Sparkles, BookOpen, Sun, Smile } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { playActivities } from '@/data/learningData';

export const LearningPlaySection: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const langKey = isSinhala ? 'si' : 'en';

  const iconMap: Record<string, React.ReactNode> = {
    Palette: <Palette className="w-5 h-5 text-coral" />,
    Music: <Music className="w-5 h-5 text-yellow-dark" />,
    Sparkles: <Sparkles className="w-5 h-5 text-pink-dark" />,
    BookOpen: <BookOpen className="w-5 h-5 text-emerald-600" />,
    Sun: <Sun className="w-5 h-5 text-blue-600" />,
    Smile: <Smile className="w-5 h-5 text-yellow-dark" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-mint-soft/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cream rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.playSection.badge}
          title={t.playSection.headline}
          subtitle={t.playSection.subhead}
          badgeColor="yellow"
        />

        {/* Dynamic Activity Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {playActivities.map((act) => (
            <div
              key={act.id}
              className="group bg-cream-50 rounded-3xl overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {act.image ? (
                <div className="relative h-48 w-full overflow-hidden bg-charcoal/5">
                  <Image
                    src={act.image}
                    alt={act.title[langKey]}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 backdrop-blur-md shadow-sm">
                    {iconMap[act.iconName]}
                  </div>
                </div>
              ) : (
                <div className="p-6 pb-0 flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-charcoal/5">
                    {iconMap[act.iconName]}
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-coral transition-colors">
                  {act.title[langKey]}
                </h3>
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  {act.description[langKey]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
