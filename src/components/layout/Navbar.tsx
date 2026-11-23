'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, HeartHandshake } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import { schoolInfo } from '@/data/siteContent';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, isSinhala } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHeroTransparent = pathname === '/' && !isScrolled;

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/learning', label: t.nav.learning },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/admissions', label: t.nav.admissions },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md py-3 shadow-sm border-b border-charcoal/5'
          : isHeroTransparent
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 md:py-5 border-b-0'
          : 'bg-cream/90 backdrop-blur-sm py-4 md:py-5 border-b border-charcoal/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" isWhite={isHeroTransparent} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm transition-all duration-200 ${
                    isSinhala ? 'font-sinhala font-medium' : 'font-heading font-medium'
                  } ${
                    isActive
                      ? 'bg-coral text-white shadow-sm font-bold'
                      : isHeroTransparent
                      ? 'text-white/90 hover:text-white hover:bg-white/20'
                      : 'text-charcoal-light hover:text-charcoal hover:bg-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 shrink-0">
            <LanguageSwitcher />

            <a
              href={`tel:${schoolInfo.contact.phone}`}
              className={`p-2.5 rounded-full border shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95 ${
                isHeroTransparent
                  ? 'bg-white/15 text-white hover:bg-white/25 border-white/25'
                  : 'bg-white text-charcoal hover:text-coral border-charcoal/10'
              }`}
              aria-label="Call Little Flowers Preschool"
              title={schoolInfo.contact.phoneDisplay}
            >
              <Phone className={`w-4 h-4 ${isHeroTransparent ? 'text-yellow-sunshine' : 'text-coral'}`} />
            </a>

            <Link
              href="/admissions"
              className={`whitespace-nowrap inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-coral text-white ${
                isSinhala ? 'font-sinhala font-bold' : 'font-heading font-bold'
              } text-xs xl:text-sm shadow-md hover:bg-coral-dark hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0`}
            >
              <HeartHandshake className="w-4 h-4 shrink-0" />
              <span>{t.nav.enquireNow}</span>
            </Link>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-2xl border shadow-sm focus:outline-none ${
                isHeroTransparent
                  ? 'bg-white/15 text-white border-white/25'
                  : 'bg-white text-charcoal border-charcoal/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-coral" />
              ) : (
                <Menu className={`w-6 h-6 ${isHeroTransparent ? 'text-white' : 'text-charcoal'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-cream-50 border-b border-charcoal/10 shadow-xl p-6 transition-all animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-2xl text-base ${
                    isSinhala ? 'font-sinhala font-semibold' : 'font-heading font-semibold'
                  } transition-colors ${
                    isActive
                      ? 'bg-coral text-white shadow-sm'
                      : 'text-charcoal hover:bg-white hover:text-coral'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-charcoal/10 flex flex-col gap-3">
              <Link
                href="/admissions"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-coral text-white ${
                  isSinhala ? 'font-sinhala font-bold' : 'font-heading font-bold'
                } shadow-md hover:bg-coral-dark`}
              >
                <HeartHandshake className="w-5 h-5" />
                <span>{t.nav.enquireNow}</span>
              </Link>

              <a
                href={`tel:${schoolInfo.contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-charcoal font-heading font-semibold border border-charcoal/10 shadow-sm"
              >
                <Phone className="w-4 h-4 text-coral" />
                <span>{schoolInfo.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
