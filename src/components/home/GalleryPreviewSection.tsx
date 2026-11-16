'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Maximize2, Camera } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { galleryItems } from '@/data/galleryData';
import { Lightbox } from '@/components/ui/Lightbox';

export const GalleryPreviewSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const langKey = isSinhala ? 'si' : 'en';

  const previewItems = galleryItems.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.galleryPreview.badge}
          title={t.galleryPreview.headline}
          subtitle={t.galleryPreview.subhead}
          badgeColor="pink"
        />

        {/* Editorial Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer bg-white aspect-[4/5]"
            >
              <Image
                src={item.imageSrc}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white" />

              {/* Hover Text & Icon */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white drop-shadow-md">
                    {item.title[langKey]}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="mt-1 text-xs text-white/80 line-clamp-2 drop-shadow-sm">
                  {item.description[langKey]}
                </p>
              </div>

              {/* Top corner photo badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-bold text-charcoal flex items-center gap-1.5 shadow-sm">
                <Camera className="w-3 h-3 text-coral" />
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Gallery CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-coral text-white font-heading font-bold text-base shadow-md hover:bg-coral-dark hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.galleryPreview.viewGallery}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        items={previewItems}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={() =>
          setSelectedPhotoIndex((prev) =>
            prev !== null ? (prev + 1) % previewItems.length : 0
          )
        }
        onPrev={() =>
          setSelectedPhotoIndex((prev) =>
            prev !== null
              ? (prev - 1 + previewItems.length) % previewItems.length
              : 0
          )
        }
      />
    </section>
  );
};
