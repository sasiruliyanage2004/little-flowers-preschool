'use client';

import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AdmissionForm } from '@/components/forms/AdmissionForm';
import { schoolInfo } from '@/data/siteContent';
import { FlowerIcon } from '@/components/ui/FlowerDeco';

export function AdmissionsView() {
  const { t, isSinhala } = useLanguage();
  const adm = t.admissionsPage;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Hero Banner */}
      <section className="bg-cream py-16 sm:py-24 relative overflow-hidden border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-charcoal/10 shadow-sm text-xs sm:text-sm font-heading font-bold text-coral uppercase tracking-wider mb-6">
            <FlowerIcon size={16} color="#F28B78" />
            <span>{adm.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
            {adm.heroTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-charcoal-light font-body max-w-2xl mx-auto leading-relaxed">
            {adm.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 4-Step Transparent Enrolment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={adm.processBadge}
            title={adm.processTitle}
            badgeColor="yellow"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {adm.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral font-heading font-extrabold text-xl flex items-center justify-center mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-charcoal-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge={adm.formBadge}
            title={adm.formTitle}
            subtitle={adm.formSubtitle}
            badgeColor="coral"
          />

          <div className="mt-12">
            <AdmissionForm />
          </div>
        </div>
      </section>

      {/* Direct Contact & Visit Hours */}
      <section className="py-16 bg-white border-y border-charcoal/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-cream-50 border border-charcoal/5">
              <Phone className="w-8 h-8 text-coral mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-charcoal mb-1">
                {isSinhala ? 'දුරකථන ඇමතුම්' : 'Direct Call'}
              </h4>
              <a
                href={`tel:${schoolInfo.contact.phone}`}
                className="text-coral-dark font-bold hover:underline"
              >
                {schoolInfo.contact.phoneDisplay}
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-cream-50 border border-charcoal/5">
              <MessageCircle className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-charcoal mb-1">
                WhatsApp
              </h4>
              <a
                href={schoolInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-cream-50 border border-charcoal/5">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-charcoal mb-1">
                {isSinhala ? 'මාකොළ පරිශ්‍රය' : 'Campus Location'}
              </h4>
              <span className="text-xs text-charcoal-muted block">
                96/2 Makola South, Makola
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Prospective Parents FAQ Accordion */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={adm.faqBadge}
            title={adm.faqTitle}
            badgeColor="pink"
          />

          <div className="space-y-4 mt-12">
            {adm.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-charcoal/5 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-charcoal hover:text-coral transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-coral transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 font-body text-charcoal-light text-sm sm:text-base leading-relaxed border-t border-charcoal/5">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
