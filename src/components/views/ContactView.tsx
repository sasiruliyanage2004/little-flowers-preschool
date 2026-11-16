'use client';

import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Youtube,
  ExternalLink,
  Compass,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ContactForm } from '@/components/forms/ContactForm';
import { schoolInfo } from '@/data/siteContent';
import { FlowerIcon } from '@/components/ui/FlowerDeco';

export function ContactView() {
  const { t, isSinhala } = useLanguage();
  const c = t.contactPage;
  const cards = c.cards;

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Hero Banner */}
      <section className="bg-cream py-16 sm:py-24 relative overflow-hidden border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-charcoal/10 shadow-sm text-xs sm:text-sm font-heading font-bold text-coral uppercase tracking-wider mb-6">
            <FlowerIcon size={16} color="#F28B78" />
            <span>{c.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
            {c.heroTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-charcoal-light font-body max-w-2xl mx-auto leading-relaxed">
            {c.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 4 Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
                  {cards.phoneTitle}
                </h3>
                <p className="font-body text-charcoal-light text-xs mb-4">
                  {cards.phoneDesc}
                </p>
              </div>
              <a
                href={`tel:${schoolInfo.contact.phone}`}
                className="font-heading font-bold text-coral text-lg hover:underline block min-h-[44px] flex items-center"
              >
                {cards.phoneVal}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
                  {cards.whatsappTitle}
                </h3>
                <p className="font-body text-charcoal-light text-xs mb-4">
                  {cards.whatsappDesc}
                </p>
              </div>
              <a
                href={schoolInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-emerald-700 hover:underline min-h-[44px]"
              >
                <span>{cards.whatsappBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
                  {cards.addressTitle}
                </h3>
                <p className="font-body text-charcoal-light text-xs mb-4">
                  {isSinhala ? schoolInfo.contact.address.si : schoolInfo.contact.address.en}
                </p>
              </div>
              <a
                href={schoolInfo.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-blue-600 hover:underline min-h-[44px]"
              >
                <span>{cards.directionsBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* YouTube Card */}
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-5">
                  <Youtube className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
                  {cards.youtubeTitle}
                </h3>
                <p className="font-body text-charcoal-light text-xs mb-4">
                  {cards.youtubeDesc}
                </p>
              </div>
              <a
                href={schoolInfo.contact.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-red-600 hover:underline min-h-[44px]"
              >
                <span>{cards.youtubeBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Split Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Column */}
            <div className="lg:col-span-6">
              <div className="mb-6">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-coral">
                  {isSinhala ? 'පණිවිඩයක් එවන්න' : 'Direct Message'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mt-1">
                  {c.formTitle}
                </h2>
                <p className="text-sm font-body text-charcoal-light mt-2">
                  {c.formDesc}
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Google Map & Campus Visit Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="mb-6">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-blue-600">
                  {isSinhala ? 'අපගේ පිහිටීම' : 'Interactive Map'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal mt-1">
                  {c.mapTitle}
                </h2>
                <p className="text-sm font-body text-charcoal-light mt-2">
                  {c.mapSubtitle}
                </p>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="rounded-4xl overflow-hidden shadow-xl border-4 border-white bg-white h-96 relative">
                <iframe
                  title="Little Flowers Preschool Location in Makola, Sri Lanka"
                  src="https://maps.google.com/maps?q=Little+Flowers+Pre+school+-+Makola&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-6 rounded-3xl bg-white border border-charcoal/5 shadow-sm flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-base text-charcoal">
                    {isSinhala ? 'පෙරපාසලට පැමිණීමට මගපෙන්වීම්' : 'Need Turn-by-Turn Directions?'}
                  </h4>
                  <p className="text-xs text-charcoal-light mt-0.5">
                    {isSinhala ? 'Google Maps ඔස්සේ නිවැරදිම මාර්ගය සොයාගන්න' : 'Open verified location in Google Maps app'}
                  </p>
                </div>
                <a
                  href={schoolInfo.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral text-white font-heading font-bold text-xs sm:text-sm shadow-md hover:bg-coral-dark transition-all shrink-0 min-h-[44px]"
                >
                  <Compass className="w-4 h-4" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
