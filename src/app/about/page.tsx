import type { Metadata } from 'next';
import { AboutView } from '@/components/views/AboutView';

export const metadata: Metadata = {
  title: 'About Us | Established 2010 in Makola',
  description:
    'Discover Little Flowers Preschool in Makola South. Founded in 2010 with 14+ years of dedicated early childhood care under Principal Mrs. Indrani Wettasinghe.',
  alternates: {
    canonical: 'https://little-flowers-preschool.vercel.app/about',
  },
  openGraph: {
    title: 'About Us | Little Flowers Preschool (Est. 2010)',
    description:
      'Our story, heritage, leadership, and educational philosophy in Makola South, Sri Lanka.',
    url: 'https://little-flowers-preschool.vercel.app/about',
    images: [
      {
        url: '/images/opt-children-play-smiles.jpg',
        width: 1200,
        height: 900,
        alt: 'Little Flowers Preschool children in school uniform smiling happily',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
