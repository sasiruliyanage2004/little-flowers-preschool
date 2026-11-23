'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
  Calendar,
  Clock,
  Building,
  Gift,
  Sparkles,
  ZoomIn,
  CheckCircle2,
  Navigation,
  ArrowDown,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AdmissionForm } from '@/components/forms/AdmissionForm';
import { schoolInfo, admissions2027Campaign } from '@/data/siteContent';
import { FlowerIcon, DaisyIcon } from '@/components/ui/FlowerDeco';
import { PosterModal } from '@/components/ui/PosterModal';

export function AdmissionsView() {
  const { t, isSinhala, language } = useLanguage();
  const adm = t.admissionsPage;
  const c = t.admissionsCampaign;

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappHref = admissions2027Campaign.getWhatsappUrl(language);

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* 1. Admissions Hero Banner */}
      <section className="bg-gradient-to-b from-cream via-cream-50 to-white py-16 sm:py-24 relative overflow-hidden border-b border-charcoal/5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-sunshine/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral/10 border border-coral/25 shadow-sm text-xs sm:text-sm font-heading font-extrabold text-coral uppercase tracking-wider mb-6">
            <FlowerIcon size={16} color="#F28B78" />
            <span>{c.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
            {c.headline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-charcoal-light font-body max-w-2xl mx-auto leading-relaxed">
            {c.subhead}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#campaign-details"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral hover:bg-coral-dark text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-105 active:scale-95 min-h-[44px]"
            >
              <span>{c.exploreCta}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-cream-100 text-charcoal border border-charcoal/15 font-heading font-bold text-sm shadow-sm transition-all min-h-[44px]"
            >
              <span>{isSinhala ? 'විමසීම් පෝරමය වෙත' : 'Online Enquiry Form'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Official 2027 Admissions Campaign Section & Poster Showcase */}
      <section id="campaign-details" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Special Admission Offer Banner */}
          <div className="mb-12 bg-gradient-to-r from-coral/15 via-yellow-sunshine/20 to-mint-soft/30 rounded-3xl p-6 sm:p-8 border-2 border-coral/30 shadow-md relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-coral text-white flex items-center justify-center shrink-0 shadow-md">
                  <Gift className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-coral/20 text-coral-dark text-xs font-heading font-bold mb-1.5 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{c.specialOfferBadge}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal">
                    {c.specialOfferHighlight}
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-charcoal-light font-body leading-relaxed">
                    {c.specialOfferCondition}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
                <a
                  href={`tel:${admissions2027Campaign.phone}`}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-coral hover:bg-coral-dark text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-105 active:scale-95 min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{c.callNow}</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-105 active:scale-95 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{c.whatsappEnquiry}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Side-by-side: Poster Preview + Verified Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Official Poster Preview */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-cream-50 rounded-3xl p-3 sm:p-4 shadow-xl border border-charcoal/10 relative group">
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal/85 backdrop-blur-md text-white text-xs font-heading font-bold shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-sunshine" />
                    <span>{c.posterBadge}</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPosterOpen(true)}
                  aria-label={c.clickToEnlarge}
                  className="w-full relative aspect-[4160/2496] rounded-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-coral/40 block text-left bg-charcoal/5"
                >
                  <Image
                    src={admissions2027Campaign.posterImage}
                    alt={c.posterAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-4 py-2.5 rounded-full bg-white text-charcoal font-heading font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4 text-coral" />
                      <span>{c.clickToEnlarge}</span>
                    </div>
                  </div>
                </button>

                <div className="mt-3 px-2 flex items-center justify-between text-xs text-charcoal-light font-body">
                  <span>{c.authenticityNote}</span>
                  <button
                    type="button"
                    onClick={() => setIsPosterOpen(true)}
                    className="text-coral font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{isSinhala ? 'විශාල කරන්න' : 'Enlarge'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Verified Admission Information Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal mb-2">
                  {c.verifiedDetailsTitle}
                </h2>
                <p className="text-sm sm:text-base text-charcoal-light font-body mb-6">
                  {c.verifiedDetailsSubhead}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Preschool */}
                  <div className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-heading text-coral uppercase tracking-wider block">
                        {c.cards.preschool.label}
                      </span>
                      <p className="text-sm sm:text-base font-heading font-bold text-charcoal mt-0.5">
                        {c.cards.preschool.value}
                      </p>
                      <span className="text-xs text-charcoal-muted font-body">
                        {c.cards.preschool.sub}
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Year */}
                  <div className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-yellow-sunshine/20 text-yellow-dark flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-heading text-yellow-dark uppercase tracking-wider block">
                        {c.cards.year.label}
                      </span>
                      <p className="text-sm sm:text-base font-heading font-bold text-charcoal mt-0.5">
                        {c.cards.year.value}
                      </p>
                      <span className="text-xs text-charcoal-muted font-body">
                        {c.cards.year.sub}
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Collection Hours */}
                  <div className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-mint-soft text-emerald-800 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-heading text-emerald-800 uppercase tracking-wider block">
                        {c.cards.collection.label}
                      </span>
                      <p className="text-sm sm:text-base font-heading font-bold text-charcoal mt-0.5">
                        {c.cards.collection.value}
                      </p>
                      <span className="text-xs font-bold text-coral-dark font-body">
                        {c.cards.collection.time}
                      </span>
                    </div>
                  </div>

                  {/* Card 4: Deadline */}
                  <div className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-pink-soft text-pink-dark flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-heading text-pink-dark uppercase tracking-wider block">
                        {c.cards.deadline.label}
                      </span>
                      <p className="text-sm sm:text-base font-heading font-bold text-charcoal mt-0.5">
                        {c.cards.deadline.value}
                      </p>
                      <span className="text-xs text-charcoal-muted font-body">
                        {c.cards.deadline.sub}
                      </span>
                    </div>
                  </div>

                  {/* Card 5: Address */}
                  <div className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-soft text-blue-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-heading text-blue-800 uppercase tracking-wider block">
                        {c.cards.address.label}
                      </span>
                      <p className="text-sm font-heading font-bold text-charcoal mt-0.5">
                        {c.cards.address.value}
                      </p>
                    </div>
                  </div>

                  {/* Card 6: Phone */}
                  <div className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-heading text-coral uppercase tracking-wider block">
                        {c.cards.phone.label}
                      </span>
                      <p className="text-sm sm:text-base font-heading font-bold text-charcoal mt-0.5">
                        {c.cards.phone.value}
                      </p>
                      <span className="text-xs text-charcoal-muted font-body">
                        {c.cards.phone.sub}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${admissions2027Campaign.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral hover:bg-coral-dark text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-105 active:scale-95 min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{admissions2027Campaign.phoneDisplay}</span>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-105 active:scale-95 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{c.whatsappEnquiry}</span>
                </a>

                <a
                  href={admissions2027Campaign.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-cream-50 hover:bg-cream-100 text-charcoal border border-charcoal/15 font-heading font-bold text-sm shadow-sm transition-all min-h-[44px]"
                >
                  <Navigation className="w-4 h-4 text-blue-600" />
                  <span>{c.getDirections}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-Step Transparent Enrolment Process */}
      <section className="py-20 bg-cream-50/60 border-t border-charcoal/5">
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
                className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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

      {/* 4. Admission Enquiry Form Section */}
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

      {/* 5. Direct Contact & Visit Hours */}
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
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                {isSinhala ? 'WhatsApp ඔස්සේ විමසන්න' : 'Chat on WhatsApp'}
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-cream-50 border border-charcoal/5">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-charcoal mb-1">
                {isSinhala ? 'මාකොළ පරිශ්‍රය' : 'Campus Location'}
              </h4>
              <a
                href={admissions2027Campaign.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-charcoal-muted block hover:text-blue-600 underline"
              >
                96/2 Makola South, Makola
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Prospective Parents FAQ Accordion */}
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

      {/* Lightbox Modal */}
      <PosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />
    </div>
  );
}
