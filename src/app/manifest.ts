import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Little Flowers Preschool | ලිට්ල් ෆ්ලවර්ස් පෙර පාසල',
    short_name: 'Little Flowers',
    description:
      'Little Flowers Preschool in Makola South, Sri Lanka — Established in 2010. Growing together with love, learning and happiness.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF9F0',
    theme_color: '#FFF9F0',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
