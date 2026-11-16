import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showEst?: boolean;
  isWhite?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showEst = true,
  isWhite = false,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] tracking-wider',
    lg: 'text-xs tracking-widest',
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Little Flowers Preschool Homepage"
    >
      {/* Flower Emblem */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} transition-transform duration-300 group-hover:rotate-12`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Flower Petals */}
          {/* Top Petal - Coral */}
          <ellipse cx="50" cy="24" rx="14" ry="19" fill="#F28B78" />
          {/* Right Top Petal - Sunshine Yellow */}
          <ellipse cx="74" cy="38" rx="14" ry="19" transform="rotate(72 74 38)" fill="#FFD66B" />
          {/* Right Bottom Petal - Soft Pink */}
          <ellipse cx="65" cy="73" rx="14" ry="19" transform="rotate(144 65 73)" fill="#F9DCE5" />
          {/* Left Bottom Petal - Sky Blue */}
          <ellipse cx="35" cy="73" rx="14" ry="19" transform="rotate(216 35 73)" fill="#D9ECFA" />
          {/* Left Top Petal - Mint */}
          <ellipse cx="26" cy="38" rx="14" ry="19" transform="rotate(288 26 38)" fill="#CBE8D5" />
          
          {/* Gentle Stem Leaf */}
          <path
            d="M50 72 C58 78, 62 88, 55 94 C46 95, 42 85, 50 72Z"
            fill="#8EC6A0"
          />

          {/* Center Pistil - Warm Gold */}
          <circle cx="50" cy="50" r="16" fill="#FFF9F0" />
          <circle cx="50" cy="50" r="12" fill="#E8B838" />
          
          {/* Smiling Center Eyes & Smile */}
          <circle cx="46" cy="48" r="1.8" fill="#34333A" />
          <circle cx="54" cy="48" r="1.8" fill="#34333A" />
          <path
            d="M46 53 Q50 56 54 53"
            stroke="#34333A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-heading font-bold tracking-tight transition-colors duration-200 ${
            isWhite ? 'text-white' : 'text-charcoal group-hover:text-coral'
          } ${textSizes[size]}`}
        >
          Little Flowers
        </span>
        <div className="flex items-center gap-1.5 font-bold uppercase">
          <span
            className={`${
              isWhite ? 'text-white/80' : 'text-coral-dark'
            } ${subTextSizes[size]}`}
          >
            Preschool
          </span>
          {showEst && (
            <>
              <span className={`inline-block w-1 h-1 rounded-full ${isWhite ? 'bg-white/40' : 'bg-charcoal/30'}`} />
              <span
                className={`font-semibold ${
                  isWhite ? 'text-white/70' : 'text-charcoal-muted'
                } ${subTextSizes[size]}`}
              >
                Est. 2010
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
