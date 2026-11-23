'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  ZoomIn,
  CheckCircle2,
  Gift,
  Building,
  Navigation,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { admissions2027Campaign, schoolInfo } from '@/data/siteContent';
import { FlowerIcon, DaisyIcon } from '@/components/ui/FlowerDeco';
import { PosterModal } from '@/components/ui/PosterModal';

export const AdmissionsCampaignSection: React.FC = () => {
  const { t, isSinhala, language } = useLanguage();
  const c = t.admissionsCampaign;
  const prefersReducedMotion = useReducedMotion();
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const whatsappHref = admissions2027Campaign.getWhatsappUrl(language);

  return (
    <>
      <section
        id="admissions-2027"
        className="py-16 sm:py-24 bg-gradient-to-b from-cream via-cream-50 to-white relative overflow-hidden border-b border-charcoal/5"
        aria-labelledby="admissions-2027-heading"
      >
        {/* Soft pastel ambient background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-sunshine/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
          <DaisyIcon
            size={40}
            color="#FFD66B"
            className="absolute top-12 left-8 rotate-12 hidden md:block"
          />
          <FlowerIcon
            size={32}
            color="#F28B78"
            className="absolute top-20 right-12 -rotate-12 hidden md:block"
          />
          <FlowerIcon
            size={28}
            color="#CBE8D5"
            className="absolute bottom-16 left-16 rotate-45 hidden md:block"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 1. Header & Announcement Badge */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral/10 border border-coral/25 shadow-sm text-xs sm:text-sm font-heading font-extrabold text-coral uppercase tracking-wider mb-4"
            >
              <FlowerIcon size={16} color="#F28B78" />
              <span>{c.badge}</span>
            </motion.div>

            <motion.h2
              id="admissions-2027-heading"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-charcoal tracking-tight leading-tight"
            >
              {c.headline}
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-charcoal-light font-body leading-relaxed max-w-2xl mx-auto"
            >
              {c.subhead}
            </motion.p>
          </div>

          {/* 2. Special Admission Fee Promotion Banner */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12 bg-gradient-to-r from-coral/15 via-yellow-sunshine/20 to-mint-soft/30 rounded-3xl p-6 sm:p-8 border-2 border-coral/30 shadow-md relative overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-coral/10 rounded-full blur-xl pointer-events-none" />

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
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal">
                    {c.specialOfferHighlight}
                  </h3>
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
          </motion.div>

          {/* 3. Main Grid: Authentic Poster Preview (Left) + Verified Details Cards (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Authentic Poster Display */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="w-full bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-charcoal/10 relative group">
                {/* Poster Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal/85 backdrop-blur-md text-white text-xs font-heading font-bold shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-sunshine" />
                    <span>{c.posterBadge}</span>
                  </span>
                </div>

                {/* Clickable Image Container preserving 4160 x 2496 aspect ratio */}
                <button
                  type="button"
                  onClick={() => setIsPosterModalOpen(true)}
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

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-4 py-2.5 rounded-full bg-white text-charcoal font-heading font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4 text-coral" />
                      <span>{c.clickToEnlarge}</span>
                    </div>
                  </div>
                </button>

                {/* Caption below image */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-charcoal-light font-body">
                  <span>{c.authenticityNote}</span>
                  <button
                    type="button"
                    onClick={() => setIsPosterModalOpen(true)}
                    className="text-coral font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{isSinhala ? 'විශාල කරන්න' : 'Enlarge'}</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right: Verified Information Cards & Enrolment Actions */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal mb-2">
                  {c.verifiedDetailsTitle}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-light font-body mb-6">
                  {c.verifiedDetailsSubhead}
                </p>

                {/* 2x3 Grid of Verified Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Preschool & Establishment */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
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

                  {/* Card 2: Admission Year */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
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

                  {/* Card 3: Form Collection Hours */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
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
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
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
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
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

                  {/* Card 6: Official Phone */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-charcoal/10 shadow-sm flex items-start gap-3.5">
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
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral hover:bg-coral-dark text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-105 active:scale-95 min-h-[44px]"
                >
                  <span>{c.exploreCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${admissions2027Campaign.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-cream-100 text-charcoal border border-charcoal/15 font-heading font-bold text-sm shadow-sm transition-all min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-coral" />
                  <span>{admissions2027Campaign.phoneDisplay}</span>
                </a>

                <a
                  href={admissions2027Campaign.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-cream-100 text-charcoal border border-charcoal/15 font-heading font-bold text-sm shadow-sm transition-all min-h-[44px]"
                >
                  <Navigation className="w-4 h-4 text-blue-600" />
                  <span>{c.getDirections}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accessible Fullscreen Poster Lightbox Modal */}
      <PosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
      />
    </>
  );
};
