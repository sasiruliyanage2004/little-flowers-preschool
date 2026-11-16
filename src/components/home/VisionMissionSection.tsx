'use client';

import React, { useState } from 'react';
import { Eye, Target, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { officialStatements } from '@/data/siteContent';
import { FlowerIcon } from '@/components/ui/FlowerDeco';

export const VisionMissionSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const [activeTab, setActiveTab] = useState<'both' | 'vision' | 'mission'>('both');

  const langKey = isSinhala ? 'si' : 'en';

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft blur accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-yellow-sunshine/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-mint-soft/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.visionMission.badge}
          title={t.visionMission.headline}
          subtitle={t.visionMission.subhead}
          badgeColor="mint"
        />

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {/* VISION CARD */}
          <div className="relative bg-gradient-to-br from-cream via-white to-pink-soft/20 rounded-4xl p-8 sm:p-10 border-2 border-coral/15 shadow-md flex flex-col justify-between group hover:border-coral/30 hover:shadow-xl transition-all duration-300">
            {/* Top Badge & Icon */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-coral/15 text-coral-dark text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-coral" />
                  <span>{t.visionMission.visionTab}</span>
                </div>
                <FlowerIcon size={28} color="#F28B78" className="opacity-70 group-hover:rotate-45 transition-transform duration-500" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4">
                {t.visionMission.visionTitle}
              </h3>

              {/* Official Sinhala Text */}
              <div className="p-6 rounded-2xl bg-white/90 border border-charcoal/5 shadow-inner mb-6 relative">
                <Quote className="w-8 h-8 text-coral/20 absolute -top-3 -left-2" />
                <span className="block text-[11px] uppercase tracking-wider font-bold text-coral-dark mb-2">
                  {t.visionMission.officialTextLabel}
                </span>
                <p className="font-sinhala text-charcoal text-base sm:text-lg leading-relaxed whitespace-pre-line font-medium">
                  {officialStatements.vision.si}
                </p>
              </div>

              {/* English Interpretation */}
              <div className="p-5 rounded-2xl bg-cream/70 border border-charcoal/5 mb-6">
                <span className="block text-[11px] uppercase tracking-wider font-bold text-charcoal-muted mb-2">
                  {t.visionMission.englishTextLabel}
                </span>
                <p className="font-body text-charcoal-light text-sm sm:text-base leading-relaxed">
                  Our vision is to nurture and develop children who are prosperous, emotionally healthy, socially well-adjusted, and equipped with radiant personalities ready to become valuable members of tomorrow’s world.
                </p>
              </div>
            </div>

            {/* Key Pillars Checklist */}
            <div className="pt-6 border-t border-charcoal/10">
              <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-muted mb-3">
                {isSinhala ? 'ප්‍රධාන ලක්ෂණ' : 'Core Developmental Aspirations'}
              </h4>
              <ul className="space-y-2">
                {officialStatements.vision.bulletPoints[langKey].map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="relative bg-gradient-to-br from-cream via-white to-mint-soft/20 rounded-4xl p-8 sm:p-10 border-2 border-mint-dark/25 shadow-md flex flex-col justify-between group hover:border-mint-dark/40 hover:shadow-xl transition-all duration-300">
            {/* Top Badge & Icon */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-mint-soft/60 text-emerald-800 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4 text-emerald-700" />
                  <span>{t.visionMission.missionTab}</span>
                </div>
                <FlowerIcon size={28} color="#8EC6A0" className="opacity-70 group-hover:rotate-45 transition-transform duration-500" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-4">
                {t.visionMission.missionTitle}
              </h3>

              {/* Official Sinhala Text */}
              <div className="p-6 rounded-2xl bg-white/90 border border-charcoal/5 shadow-inner mb-6 relative">
                <Quote className="w-8 h-8 text-emerald-600/20 absolute -top-3 -left-2" />
                <span className="block text-[11px] uppercase tracking-wider font-bold text-emerald-700 mb-2">
                  {t.visionMission.officialTextLabel}
                </span>
                <p className="font-sinhala text-charcoal text-base sm:text-lg leading-relaxed whitespace-pre-line font-medium">
                  {officialStatements.mission.si}
                </p>
              </div>

              {/* English Interpretation */}
              <div className="p-5 rounded-2xl bg-cream/70 border border-charcoal/5 mb-6">
                <span className="block text-[11px] uppercase tracking-wider font-bold text-charcoal-muted mb-2">
                  {t.visionMission.englishTextLabel}
                </span>
                <p className="font-body text-charcoal-light text-sm sm:text-base leading-relaxed">
                  Our mission is to provide children who come under our care with love, protection and happiness. Through appropriate activities that uncover their hidden talents, we cultivate their knowledge, skills and attitudes, promoting their overall development.
                </p>
              </div>
            </div>

            {/* Key Pillars Checklist */}
            <div className="pt-6 border-t border-charcoal/10">
              <h4 className="text-xs uppercase font-bold tracking-wider text-charcoal-muted mb-3">
                {isSinhala ? 'ක්‍රියාකාරී මෙහෙවර' : 'Actionable Pillars of Care'}
              </h4>
              <ul className="space-y-2">
                {officialStatements.mission.bulletPoints[langKey].map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
