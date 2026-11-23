'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Compass,
  Smile,
  GraduationCap,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { schoolInfo } from '@/data/siteContent';
import { FlowerIcon } from '@/components/ui/FlowerDeco';

export function AboutView() {
  const { t, isSinhala } = useLanguage();
  const a = t.aboutPage;

  const valueIcons = [
    <Heart key="heart" className="w-6 h-6 text-coral" />,
    <Shield key="shield" className="w-6 h-6 text-emerald-600" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-yellow-dark" />,
    <Compass key="compass" className="w-6 h-6 text-blue-600" />,
    <Smile key="smile" className="w-6 h-6 text-pink-dark" />,
    <Users key="users" className="w-6 h-6 text-purple-600" />,
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Hero Banner */}
      <section className="bg-cream py-16 sm:py-24 relative overflow-hidden border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-charcoal/10 shadow-sm text-xs sm:text-sm font-heading font-bold text-coral uppercase tracking-wider mb-6">
            <FlowerIcon size={16} color="#F28B78" />
            <span>{a.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
            {a.heroTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-charcoal-light font-body max-w-2xl mx-auto leading-relaxed">
            {a.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Story & Heritage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Content */}
            <div className="lg:col-span-7">
              <SectionHeader
                badge={a.storyBadge}
                title={a.storyTitle}
                align="left"
                badgeColor="yellow"
                className="mb-6"
              />

              <div className="space-y-5 text-charcoal-light font-body text-base sm:text-lg leading-relaxed">
                <p>{a.storyP1}</p>
                <p>{a.storyP2}</p>
              </div>

              {/* Establishment Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-cream border border-charcoal/5">
                  <div className="flex items-center gap-2 text-coral font-heading font-bold text-2xl sm:text-3xl mb-1">
                    <Calendar className="w-6 h-6" />
                    <span>2010</span>
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider text-charcoal-muted">
                    {isSinhala ? 'ආරම්භක වසර' : 'Established Year'}
                  </span>
                  <p className="text-xs text-charcoal-light mt-1">
                    {isSinhala ? 'මාකොළ දකුණේ පිහිටි' : 'Founded in Makola South'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-cream border border-charcoal/5">
                  <div className="flex items-center gap-2 text-yellow-dark font-heading font-bold text-2xl sm:text-3xl mb-1">
                    <Sparkles className="w-6 h-6" />
                    <span>14+ {isSinhala ? 'වසරක්' : 'Years'}</span>
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider text-charcoal-muted">
                    {isSinhala ? 'අඛණ්ඩ කැපවීම' : 'Continuous Dedication'}
                  </span>
                  <p className="text-xs text-charcoal-light mt-1">
                    {isSinhala ? 'දෙමාපිය විශ්වාසය' : 'Parental Trust & Heritage'}
                  </p>
                </div>
              </div>
            </div>

            {/* Authentic Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-4xl overflow-hidden shadow-2xl border-8 border-white bg-white aspect-[4/3] group">
                {/* School Seal Badge */}
                <div className="absolute top-4 left-4 z-10 w-14 h-14 rounded-full overflow-hidden shadow-xl ring-2 ring-white/90 bg-[#C3986B]">
                  <Image
                    src="/images/little-flowers-logo-badge.png"
                    alt="Official Little Flowers Preschool Emblem"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Image
                  src="/images/opt-children-play-smiles.jpg"
                  alt="Little Flowers Preschool children in Makola"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-heading font-bold">
                    {isSinhala ? 'මාකොළ ලිට්ල් ෆ්ලවර්ස් පෙර පාසල් නිල ඇඳුම' : 'Official Little Flowers Preschool Uniform'}
                  </p>
                  <p className="text-xs text-white/80">
                    {isSinhala ? 'ආදරය, විනය සහ සතුට කැටිවූ දරුවන්' : 'Nurtured with love, joy and gentle guidance'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Educator Note */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-4xl p-8 sm:p-12 border border-charcoal/5 shadow-xl relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-coral/10 border-2 border-coral/30 flex items-center justify-center text-coral shrink-0 shadow-sm">
                <GraduationCap className="w-12 h-12" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-coral-dark text-xs font-heading font-bold uppercase tracking-wider mb-2">
                  <span>{a.leadershipBadge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mb-2">
                  {isSinhala ? schoolInfo.principal.name.si : schoolInfo.principal.name.en}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-coral-dark mb-4">
                  {isSinhala ? schoolInfo.principal.role.si : schoolInfo.principal.role.en} • {isSinhala ? schoolInfo.principal.qualifications.si : schoolInfo.principal.qualifications.en}
                </p>

                <p className="text-charcoal-light font-body text-base leading-relaxed">
                  {a.leadershipDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={a.philosophyBadge}
            title={a.philosophyTitle}
            subtitle={a.philosophyP1}
            badgeColor="pink"
          />

          <div className="mt-8 max-w-3xl mx-auto text-center text-charcoal-light font-body text-base sm:text-lg leading-relaxed">
            <p>{a.philosophyP2}</p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={a.valuesBadge}
            title={a.valuesTitle}
            badgeColor="mint"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {a.values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-3 rounded-2xl bg-cream-50 w-fit mb-4">
                  {valueIcons[idx]}
                </div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-charcoal mb-2">
                  {v.title}
                </h4>
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Environment Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                badge={a.environmentBadge}
                title={a.environmentTitle}
                align="left"
                badgeColor="sky"
                className="mb-6"
              />

              <div className="space-y-4 text-charcoal-light font-body text-base sm:text-lg leading-relaxed">
                <p>{a.environmentP1}</p>
                <p>{a.environmentP2}</p>
              </div>

              <div className="mt-8">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-white font-heading font-bold text-sm shadow-md hover:bg-coral-dark transition-all"
                >
                  <span>{isSinhala ? 'ඡායාරූප ගැලරිය නරඹන්න' : 'Explore Campus Gallery'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-4xl overflow-hidden shadow-2xl border-8 border-cream bg-white aspect-[4/3] group">
                <Image
                  src="/images/opt-preschool-entrance-sign.jpg"
                  alt="Little Flowers Preschool garden playground and entrance in Makola"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
