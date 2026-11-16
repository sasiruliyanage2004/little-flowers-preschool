'use client';

import React from 'react';
import { FlowerIcon } from './FlowerDeco';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  badgeColor?: 'coral' | 'yellow' | 'mint' | 'pink' | 'sky';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  badgeColor = 'coral',
  className = '',
}) => {
  const badgeColors = {
    coral: 'bg-coral-light/20 text-coral-dark border-coral/30',
    yellow: 'bg-yellow-sunshine/25 text-yellow-dark border-yellow-sunshine/40',
    mint: 'bg-mint-soft/50 text-emerald-800 border-mint-dark/40',
    pink: 'bg-pink-soft text-pink-dark border-pink-dark/30',
    sky: 'bg-sky-soft text-blue-800 border-sky-dark/40',
  };

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignStyles[align]} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border mb-4 backdrop-blur-sm ${badgeColors[badgeColor]}`}
        >
          <FlowerIcon size={16} color="currentColor" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-charcoal-light font-body leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
