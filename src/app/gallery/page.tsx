'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Maximize2, Play, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { galleryItems, youtubeShowcases } from '@/data/galleryData';
import { Lightbox } from '@/components/ui/Lightbox';
import { schoolInfo } from '@/data/siteContent';
import { FlowerIcon } from '@/components/ui/FlowerDeco';

export default function GalleryPage() {
  const { t, isSinhala } = useLanguage();
  const g = t.galleryPage;
  const langKey = isSinhala ? 'si' : 'en';

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filters = [
    { key: 'all', label: g.filterAll },
    { key: 'classroom', label: g.filterClassroom },
    { key: 'activities', label: g.filterActivities },
    { key: 'outdoor', label: g.filterOutdoor },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Hero Banner */}
      <section className="bg-cream py-16 sm:py-24 relative overflow-hidden border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-charcoal/10 shadow-sm text-xs sm:text-sm font-heading font-bold text-coral uppercase tracking-wider mb-6">
            <FlowerIcon size={16} color="#F28B78" />
            <span>{g.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
            {g.heroTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-charcoal-light font-body max-w-2xl mx-auto leading-relaxed">
            {g.heroSubtitle}
          </p>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {filters.map((flt) => (
              <button
                key={flt.key}
                onClick={() => setActiveFilter(flt.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-200 ${
                  activeFilter === flt.key
                    ? 'bg-coral text-white shadow-md transform scale-105'
                    : 'bg-white text-charcoal hover:bg-cream-100 border border-charcoal/10'
                }`}
              >
                {flt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Masonry Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group relative rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-cream-50 border-4 border-white aspect-[4/3] sm:aspect-[4/3]"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                {/* Info Text in overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-yellow-sunshine text-charcoal text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {item.title[langKey]}
                  </h3>
                  <p className="font-body text-xs text-white/80 mt-1 line-clamp-2">
                    {item.description[langKey]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery & Official YouTube Channel Integration */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={isSinhala ? 'වීඩියෝ දසුන්' : 'Video Highlights'}
            title={isSinhala ? 'අපේ දූ දරුවන්ගේ සුන්දර රංගනයන්' : 'Live Energy & Stage Performances'}
            subtitle={g.videoNotice}
            badgeColor="yellow"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Real Courtyard Running Video Card */}
            <div className="bg-white rounded-4xl overflow-hidden shadow-md border border-charcoal/5 group">
              <div className="relative aspect-video w-full bg-charcoal">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/opt-preschool-activity-banner.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/preschool-children-running.webm" type="video/webm" />
                  <source src="/videos/preschool-children-running.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-sky-soft text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                  {isSinhala ? 'මිදුලේ සෙල්ලම්' : 'Courtyard Play'}
                </span>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                  {isSinhala ? 'සිනහවෙන් හා සතුටින් පියවර තබන දරුවන්' : 'Children Running with Joy Across the Courtyard'}
                </h3>
                <p className="font-body text-charcoal-light text-sm">
                  {isSinhala
                    ? 'මාකොළ ලිට්ල් ෆ්ලවර්ස් පෙර පාසලේ සුරක්ෂිත පරිසරය තුළ දරුවන් විඳින ප්‍රබෝධවත් නිදහස.'
                    : 'Authentic preschool moments capturing happiness, freedom, and health in our sunny Makola courtyard.'}
                </p>
              </div>
            </div>

            {/* Official YouTube Channel Showcase */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-charcoal/5 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Youtube className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-red-600 block">
                      Official YouTube Channel
                    </span>
                    <h3 className="font-heading font-bold text-xl text-charcoal">
                      @littleflowerspreschool3677
                    </h3>
                  </div>
                </div>

                <p className="font-body text-charcoal-light text-base leading-relaxed mb-6">
                  {isSinhala
                    ? 'අපගේ නිල යූටියුබ් නාලිකාව ඔස්සේ දරුවන්ගේ වාර්ෂික ළමා දින ප්‍රසංග (“අපි පුංචි පුංචි තරු වගේ” වැනි සුන්දර ගීත හා නැටුම්), ගුරු උපහාර සහ සැමරුම් අවස්ථා සජීවීව නරඹන්න.'
                    : 'Explore our official preschool YouTube channel featuring children’s variety shows, cultural stage dances, nursery musical recitals, and precious festival memories.'}
                </p>

                <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-900 text-xs sm:text-sm font-medium mb-6">
                  <Play className="w-4 h-4 fill-red-600 text-red-600 shrink-0" />
                  <span>
                    {isSinhala
                      ? 'ප්‍රධාන ආචාරිණී ඉන්ද්‍රාණි වෙත්තසිංහ මියගේ ගුරු මගපෙන්වීම යටතේ ඉදිරිපත් කෙරෙන දරුවන්ගේ නිර්මාණ.'
                      : 'Preschool variety show items guided by Principal Mrs. Indrani Wettasinghe.'}
                  </span>
                </div>
              </div>

              <a
                href={schoolInfo.contact.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-sm shadow-md transition-all transform hover:scale-102 active:scale-98"
              >
                <span>{isSinhala ? 'නිල යූටියුබ් නාලිකාවට පිවිසෙන්න' : 'Visit Official YouTube Channel'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        items={filteredItems}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={() =>
          setSelectedPhotoIndex((prev) =>
            prev !== null ? (prev + 1) % filteredItems.length : 0
          )
        }
        onPrev={() =>
          setSelectedPhotoIndex((prev) =>
            prev !== null
              ? (prev - 1 + filteredItems.length) % filteredItems.length
              : 0
          )
        }
      />
    </div>
  );
}
