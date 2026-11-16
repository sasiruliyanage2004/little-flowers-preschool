'use client';

import React from 'react';
import { Calendar, Heart, Award, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { schoolInfo } from '@/data/siteContent';

export const EstablishedSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pastel elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cream rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint-soft/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.established.badge}
          title={t.established.headline}
          subtitle={t.established.description}
          badgeColor="yellow"
        />

        {/* Milestone Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {t.established.milestones.map((milestone, idx) => {
            const icons = [
              <Calendar key="cal" className="w-6 h-6 text-coral" />,
              <Heart key="heart" className="w-6 h-6 text-pink-dark" />,
              <Sparkles key="sparkle" className="w-6 h-6 text-yellow-dark" />,
            ];

            const colors = [
              'bg-coral/10 border-coral/20 text-coral',
              'bg-pink-soft border-pink-dark/20 text-pink-dark',
              'bg-yellow-sunshine/20 border-yellow-sunshine/40 text-yellow-dark',
            ];

            return (
              <div
                key={idx}
                className="relative bg-cream-50 rounded-3xl p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-flex items-center justify-center p-3 rounded-2xl ${colors[idx]}`}
                    >
                      {icons[idx]}
                    </span>
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal">
                      {milestone.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                    {milestone.title}
                  </h3>

                  <p className="font-body text-charcoal-light text-sm sm:text-base leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/5 flex items-center gap-2 text-xs font-semibold text-charcoal-muted">
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  <span>{isSinhala ? 'මාකොළ දකුණ, ශ්‍රී ලංකාව' : 'Makola South, Sri Lanka'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Continuity Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-cream via-pink-soft/30 to-cream rounded-3xl p-6 sm:p-8 border border-charcoal/5 text-center shadow-sm">
          <p className="text-base sm:text-lg font-heading font-bold text-charcoal leading-relaxed">
            🌸 {t.established.trustMessage}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-charcoal-muted font-body">
            {isSinhala
              ? `ප්‍රධාන ආචාරිණී ${schoolInfo.principal.name.si} මියගේ (${schoolInfo.principal.qualifications.si}) සෙනෙහෙබර මගපෙන්වීම යටතේ.`
              : `Under the experienced early childhood leadership of ${schoolInfo.principal.name.en} (${schoolInfo.principal.qualifications.en}).`}
          </p>
        </div>
      </div>
    </section>
  );
};
