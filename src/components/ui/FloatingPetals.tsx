'use client';

import React from 'react';
import { FlowerIcon, LeafIcon, SparkleIcon } from './FlowerDeco';

export const FloatingPetals: React.FC = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Petal 1 - Top Left */}
      <div className="absolute top-[8%] left-[5%] animate-float-slow opacity-60">
        <FlowerIcon size={26} color="#F28B78" />
      </div>

      {/* Leaf 1 - Top Right */}
      <div className="absolute top-[14%] right-[8%] animate-float-medium opacity-50">
        <LeafIcon size={28} color="#8EC6A0" />
      </div>

      {/* Sparkle 1 - Mid Left */}
      <div className="absolute top-[45%] left-[8%] animate-float-reverse opacity-70">
        <SparkleIcon size={22} color="#FFD66B" />
      </div>

      {/* Petal 2 - Mid Right */}
      <div className="absolute top-[52%] right-[5%] animate-float-slow opacity-60">
        <FlowerIcon size={24} color="#F9DCE5" />
      </div>

      {/* Leaf 2 - Bottom Left */}
      <div className="absolute bottom-[18%] left-[12%] animate-float-medium opacity-40">
        <LeafIcon size={22} color="#CBE8D5" />
      </div>

      {/* Sparkle 2 - Bottom Right */}
      <div className="absolute bottom-[12%] right-[10%] animate-float-reverse opacity-65">
        <SparkleIcon size={24} color="#FFD66B" />
      </div>
    </div>
  );
};
