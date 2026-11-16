'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Brain,
  MessageSquareHeart,
  Users,
  HeartHandshake,
  Sparkles,
  Palette,
  Sun,
  Music,
  Apple,
  Smile,
  BookOpen,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { developmentAreas, dailyRoutine } from '@/data/learningData';
import { FlowerIcon } from '@/components/ui/FlowerDeco';

export function LearningView() {
  const { t, isSinhala } = useLanguage();
  const l = t.learningPage;
  const langKey = isSinhala ? 'si' : 'en';

  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-8 h-8 text-coral" />,
    MessageSquareHeart: <MessageSquareHeart className="w-8 h-8 text-yellow-dark" />,
    Users: <Users className="w-8 h-8 text-emerald-600" />,
    HeartHandshake: <HeartHandshake className="w-8 h-8 text-pink-dark" />,
    Sparkles: <Sparkles className="w-8 h-8 text-blue-600" />,
    Palette: <Palette className="w-8 h-8 text-yellow-dark" />,
    Sun: <Sun className="w-5 h-5 text-yellow-dark" />,
    Music: <Music className="w-5 h-5 text-coral" />,
    Apple: <Apple className="w-5 h-5 text-emerald-600" />,
    Smile: <Smile className="w-5 h-5 text-yellow-dark" />,
    BookOpen: <BookOpen className="w-5 h-5 text-blue-600" />,
    Heart: <Heart className="w-5 h-5 text-pink-dark" />,
  };

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Hero Banner */}
      <section className="bg-cream py-16 sm:py-24 relative overflow-hidden border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-charcoal/10 shadow-sm text-xs sm:text-sm font-heading font-bold text-coral uppercase tracking-wider mb-6">
            <FlowerIcon size={16} color="#F28B78" />
            <span>{l.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
            {l.heroTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-charcoal-light font-body max-w-2xl mx-auto leading-relaxed">
            {l.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 6 Developmental Domains Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={l.domainsBadge}
            title={l.domainsTitle}
            subtitle={l.domainsDesc}
            badgeColor="coral"
          />

          <div className="space-y-12 mt-12">
            {developmentAreas.map((area, idx) => (
              <div
                key={area.id}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 sm:p-12 rounded-4xl bg-cream-50 border border-charcoal/5 transition-all hover:shadow-lg ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-4 rounded-2xl shadow-sm"
                      style={{ backgroundColor: area.bgLight }}
                    >
                      {iconMap[area.iconName]}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-charcoal-muted">
                        Domain 0{idx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal">
                        {area.title[langKey]}
                      </h3>
                    </div>
                  </div>

                  <p className="font-heading font-semibold text-coral text-sm mb-4">
                    {area.subtitle[langKey]}
                  </p>

                  <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
                    {area.description[langKey]}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-charcoal/10">
                    {area.points[langKey].map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-charcoal">
                        <span className="w-2 h-2 rounded-full bg-coral shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-white border-4 border-white">
                    <Image
                      src={
                        idx === 0
                          ? '/images/opt-children-play-smiles.jpg'
                          : idx === 1
                          ? '/images/opt-happy-learning-group.jpg'
                          : idx === 2
                          ? '/images/opt-preschool-fun-expressions.jpg'
                          : idx === 3
                          ? '/images/opt-preschool-activity-banner.jpg'
                          : idx === 4
                          ? '/images/opt-preschool-entrance-sign.jpg'
                          : '/images/hero-running-children.jpg'
                      }
                      alt={area.title[langKey]}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine / Rhythm */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge={l.routineBadge}
            title={l.routineTitle}
            subtitle={l.routineDesc}
            badgeColor="yellow"
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-4">
            {dailyRoutine.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center shrink-0 border border-charcoal/5">
                    {iconMap[item.iconName]}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-sunshine/20 text-yellow-dark text-xs font-mono font-bold mb-1">
                      {item.time}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-charcoal">
                      {item.title[langKey]}
                    </h4>
                    <p className="font-body text-charcoal-light text-xs sm:text-sm mt-0.5">
                      {item.description[langKey]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Talents & Abilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-soft text-pink-dark text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{l.talentsBadge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
              {l.talentsTitle}
            </h2>

            <div className="space-y-4 text-charcoal-light font-body text-base sm:text-lg leading-relaxed text-left sm:text-center">
              <p>{l.talentsP1}</p>
              <p>{l.talentsP2}</p>
            </div>

            <div className="mt-10">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-coral text-white font-heading font-bold text-base shadow-lg shadow-coral/30 hover:bg-coral-dark hover:shadow-xl transition-all"
              >
                <span>{isSinhala ? 'අපේ පෙරපාසලට එක්වන්න' : 'Enrol Your Child with Us'}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
