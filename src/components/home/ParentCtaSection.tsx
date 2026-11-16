'use client';

import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { schoolInfo } from '@/data/siteContent';
import { FlowerIcon, DaisyIcon } from '@/components/ui/FlowerDeco';

export const ParentCtaSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-cream via-pink-soft/25 to-yellow-sunshine/20 relative overflow-hidden">
      {/* Decorative Floating Flowers */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-16 animate-float-slow opacity-60">
        <DaisyIcon size={48} color="#F28B78" />
      </div>
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-16 animate-float-medium opacity-60">
        <DaisyIcon size={44} color="#8EC6A0" />
      </div>
      <div className="absolute top-1/2 right-8 hidden sm:block animate-float-reverse opacity-40">
        <FlowerIcon size={36} color="#FFD66B" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-charcoal/10 shadow-sm text-xs sm:text-sm font-heading font-bold text-coral-dark uppercase tracking-wider mb-6">
          <FlowerIcon size={16} color="#F28B78" />
          <span>{isSinhala ? 'ඇතුළත් කිරීම් විමසන්න' : 'Admissions & Enquiries'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-charcoal leading-tight tracking-tight">
          {t.parentCta.headline}
        </h2>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-charcoal-light font-body leading-relaxed max-w-2xl mx-auto">
          {t.parentCta.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-coral text-white font-heading font-bold text-base shadow-xl shadow-coral/30 hover:bg-coral-dark hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <HeartHandshake className="w-5 h-5" />
            <span>{t.parentCta.enquireBtn}</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-charcoal font-heading font-bold text-base border-2 border-charcoal/10 hover:border-coral hover:text-coral shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.parentCta.contactBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick Contact Line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-heading font-semibold text-charcoal-light">
          <a
            href={`tel:${schoolInfo.contact.phone}`}
            className="inline-flex items-center gap-2 hover:text-coral transition-colors"
          >
            <Phone className="w-4 h-4 text-coral" />
            <span>{t.parentCta.callNow}</span>
          </a>

          <span className="hidden sm:inline text-charcoal/20">•</span>

          <a
            href={schoolInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp: {schoolInfo.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
