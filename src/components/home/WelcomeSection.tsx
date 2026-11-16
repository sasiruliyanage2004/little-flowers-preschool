'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FlowerIcon } from '@/components/ui/FlowerDeco';

export const WelcomeSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();

  const pillarIcons = [
    <Heart key="heart" className="w-6 h-6 text-coral" />,
    <Shield key="shield" className="w-6 h-6 text-emerald-600" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-yellow-dark" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-pink-soft/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-soft/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Visual Collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Photo */}
              <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-white group">
                <Image
                  src="/images/opt-happy-learning-group.jpg"
                  alt="Little Flowers Preschool children posing playfully with cheerful smiles"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Campus Photo */}
              <div className="relative mt-4 -mr-4 sm:-mt-8 sm:ml-auto w-4/5 rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-white group z-10">
                <Image
                  src="/images/opt-preschool-entrance-sign.jpg"
                  alt="Little Flowers Preschool welcoming entrance sign and garden swing"
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold">
                  {isSinhala
                    ? '“දිනෙන් දින දියුණු වේවා!” — අපේ පාසල් දොරටුව'
                    : '“May It Flourish Day by Day” — School Entrance'}
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-4 -left-4 z-20">
                <FlowerIcon size={36} color="#F28B78" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <SectionHeader
              badge={t.welcome.badge}
              title={t.welcome.headline}
              subtitle={t.welcome.subhead}
              align="left"
              badgeColor="pink"
              className="mb-6 md:mb-8"
            />

            <div className="space-y-4 text-charcoal-light font-body text-base sm:text-lg leading-relaxed">
              <p>{t.welcome.p1}</p>
              <p>{t.welcome.p2}</p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full">
              {t.welcome.keyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-charcoal/5 shadow-sm"
                >
                  <div className="mb-3">{pillarIcons[idx]}</div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-charcoal font-heading font-bold text-sm border-2 border-charcoal/10 hover:border-coral hover:text-coral shadow-sm transition-all duration-200 transform hover:translate-x-1"
              >
                <span>{t.welcome.learnMore}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
