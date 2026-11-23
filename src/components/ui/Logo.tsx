import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    md: 'w-10 h-10 md:w-11 md:h-11',
    lg: 'w-14 h-14 md:w-16 md:h-16',
  };

  const imagePixelSizes = {
    sm: 32,
    md: 44,
    lg: 64,
  };

  const textSizes = {
    sm: 'text-base font-extrabold',
    md: 'text-lg md:text-xl font-extrabold',
    lg: 'text-2xl md:text-3xl font-extrabold',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] tracking-wider',
    lg: 'text-xs tracking-widest',
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none transition-transform duration-200 active:scale-95 shrink-0 ${className}`}
      aria-label="Little Flowers Preschool Homepage"
    >
      {/* Official School Emblem Badge */}
      <div
        className={`relative flex-shrink-0 ${iconSizes[size]} rounded-full overflow-hidden shadow-sm ring-2 ${
          isWhite ? 'ring-white/80 shadow-md' : 'ring-coral/40 group-hover:ring-coral shadow-sm'
        } transition-all duration-300 group-hover:scale-105 bg-[#C3986B]`}
      >
        <Image
          src="/images/little-flowers-logo-badge.png"
          alt="Little Flowers Preschool Official Logo Emblem"
          width={imagePixelSizes[size]}
          height={imagePixelSizes[size]}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-heading tracking-tight transition-colors duration-200 ${
            isWhite ? 'text-white' : 'text-charcoal group-hover:text-coral'
          } ${textSizes[size]}`}
        >
          Little Flowers
        </span>
        <div className="flex items-center gap-1.5 font-bold uppercase">
          <span
            className={`${
              isWhite ? 'text-white/85' : 'text-coral-dark'
            } ${subTextSizes[size]}`}
          >
            Preschool
          </span>
          {showEst && (
            <>
              <span
                className={`inline-block w-1 h-1 rounded-full ${
                  isWhite ? 'bg-white/50' : 'bg-charcoal/30'
                }`}
              />
              <span
                className={`font-semibold ${
                  isWhite ? 'text-white/75' : 'text-charcoal-muted'
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
