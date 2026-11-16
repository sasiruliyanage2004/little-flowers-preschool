'use client';

import React from 'react';
import Link from 'next/link';
import {
  Brain,
  MessageSquareHeart,
  Users,
  HeartHandshake,
  Sparkles,
  Palette,
  ArrowRight,
  Check,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { developmentAreas } from '@/data/learningData';

export const LearningDevelopmentSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const langKey = isSinhala ? 'si' : 'en';

  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-7 h-7" />,
    MessageSquareHeart: <MessageSquareHeart className="w-7 h-7" />,
    Users: <Users className="w-7 h-7" />,
    HeartHandshake: <HeartHandshake className="w-7 h-7" />,
    Sparkles: <Sparkles className="w-7 h-7" />,
    Palette: <Palette className="w-7 h-7" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-yellow-sunshine/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-pink-soft/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.learningSection.badge}
          title={t.learningSection.headline}
          subtitle={t.learningSection.subhead}
          badgeColor="coral"
        />

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {developmentAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Accent Circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: area.bgLight,
                    color: area.accentColor === '#FFD66B' ? '#C49000' : area.accentColor,
                  }}
                >
                  {iconMap[area.iconName] || <Sparkles className="w-7 h-7" />}
                </div>

                <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-coral transition-colors">
                  {area.title[langKey]}
                </h3>

                <p className="text-xs uppercase font-bold tracking-wider text-charcoal-muted mb-4">
                  {area.subtitle[langKey]}
                </p>

                <p className="font-body text-charcoal-light text-sm leading-relaxed mb-6">
                  {area.description[langKey]}
                </p>
              </div>

              {/* Point highlights */}
              <div className="pt-4 border-t border-charcoal/5">
                <ul className="space-y-1.5">
                  {area.points[langKey].slice(0, 2).map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-charcoal font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Full Learning Page */}
        <div className="mt-14 text-center">
          <Link
            href="/learning"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-charcoal font-heading font-bold text-base border-2 border-charcoal/10 hover:border-coral hover:text-coral shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.learningSection.viewAll}</span>
            <ArrowRight className="w-5 h-5 text-coral" />
          </Link>
        </div>
      </div>
    </section>
  );
};
