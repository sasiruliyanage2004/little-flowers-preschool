import type { Metadata } from 'next';
import { GalleryView } from '@/components/views/GalleryView';

export const metadata: Metadata = {
  title: 'Campus & Activity Photo Gallery | Little Flowers Preschool',
  description:
    'Experience joyful memories, classroom explorations, outdoor play, cultural shows, and courtyard running videos at Little Flowers Preschool Makola.',
  alternates: {
    canonical: 'https://little-flowers-preschool.vercel.app/gallery',
  },
  openGraph: {
    title: 'Photo & Video Gallery | Little Flowers Preschool',
    description:
      'Authentic preschool activities, creative learning, cultural concerts, and sunny courtyard moments in Makola South.',
    url: 'https://little-flowers-preschool.vercel.app/gallery',
    images: [
      {
        url: '/images/opt-preschool-fun-expressions.jpg',
        width: 1200,
        height: 900,
        alt: 'Little Flowers Preschool cheerful children learning and playing',
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
