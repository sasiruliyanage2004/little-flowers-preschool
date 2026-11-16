'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Youtube, Heart, ExternalLink, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useLanguage } from '@/context/LanguageContext';
import { schoolInfo } from '@/data/siteContent';

export const Footer: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/learning', label: t.nav.learning },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-yellow-sunshine">
      {/* Subtle organic top wave background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo size="lg" isWhite={true} />
            <p className="mt-5 text-white/75 text-sm sm:text-base font-body leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={schoolInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-all transform hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={schoolInfo.contact.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold transition-all transform hover:scale-105 active:scale-95"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-base text-yellow-sunshine uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-base text-yellow-sunshine uppercase tracking-wider mb-4">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3.5 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">
                    {t.footer.addressTitle}
                  </span>
                  <span className="text-white/70 block mt-0.5">
                    {isSinhala ? schoolInfo.contact.address.si : schoolInfo.contact.address.en}
                  </span>
                  <a
                    href={schoolInfo.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-yellow-sunshine hover:underline mt-1 font-semibold"
                  >
                    <span>{t.footer.locationDirections}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">
                    {t.footer.phoneTitle}
                  </span>
                  <a
                    href={`tel:${schoolInfo.contact.phone}`}
                    className="text-white/90 hover:text-coral transition-colors font-bold block mt-0.5 text-base"
                  >
                    {schoolInfo.contact.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60">
          <p>
            © {currentYear} {isSinhala ? schoolInfo.name.si : schoolInfo.name.en}. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-1.5">
            <span>{t.footer.builtWithLove}</span>
            <Heart className="w-3.5 h-3.5 text-coral fill-coral inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
