'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { schoolInfo } from '@/data/siteContent';

export const VideoShowcaseSection: React.FC = () => {
  const { t, isSinhala } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t.videoShowcase.badge}
          title={t.videoShowcase.headline}
          subtitle={t.videoShowcase.subhead}
          badgeColor="sky"
        />

        {/* Video Player Box with Ambient Backdrop */}
        <div className="relative max-w-4xl mx-auto rounded-4xl sm:rounded-5xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-charcoal group">
          <video
            ref={videoRef}
            src="/videos/preschool-children-running.mp4"
            poster="/images/opt-preschool-activity-banner.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full aspect-[16/9] object-cover"
          />

          {/* Video Control Bar Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-90 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6">
            {/* Top Bar with Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wide">
                🎥 {t.videoShowcase.videoBadge}
              </span>
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-transform duration-200 hover:scale-110 active:scale-95"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-white text-base sm:text-lg font-heading font-bold drop-shadow-md">
                  {isSinhala ? 'සිනහවෙන් දුවපැන සෙල්ලම් කරන අපේ දරුවන්' : 'Running together with boundless joy and friendship'}
                </p>
                <p className="text-white/80 text-xs sm:text-sm drop-shadow">
                  {isSinhala ? 'මාකොළ ලිට්ල් ෆ්ලවර්ස් පෙර පාසල් මිදුලේදී' : 'Little Flowers Preschool Courtyard, Makola'}
                </p>
              </div>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="p-3 sm:p-4 rounded-full bg-coral hover:bg-coral-dark text-white shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 shrink-0"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* YouTube Channel Feature Box */}
        <div className="mt-12 max-w-4xl mx-auto bg-cream rounded-3xl p-6 sm:p-8 border border-charcoal/5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Youtube className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                <span>{t.videoShowcase.youtubeBadge}</span>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-charcoal">
                {isSinhala ? 'ළමා දින ප්‍රසංග සහ වේදිකා රංගනයන්' : 'Children’s Variety Shows & Stage Performances'}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light font-body mt-0.5">
                {t.videoShowcase.youtubeDesc}
              </p>
            </div>
          </div>

          <a
            href={schoolInfo.contact.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-sm shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 shrink-0"
          >
            <span>{t.videoShowcase.visitYoutube}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
