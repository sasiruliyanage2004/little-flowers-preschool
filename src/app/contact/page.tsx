import type { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us & Campus Location | Little Flowers Preschool Makola',
  description:
    'Contact Little Flowers Preschool in Makola South. Call 071 960 6126, chat on WhatsApp, find Google Maps directions, or send an enquiry directly to Principal Mrs. Indrani Wettasinghe.',
  alternates: {
    canonical: 'https://little-flowers-preschool.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact & Location | Little Flowers Preschool (Makola South)',
    description:
      'We welcome prospective families to visit our safe, joyful preschool campus at 96/2 Makola South, Makola, Sri Lanka.',
    url: 'https://little-flowers-preschool.vercel.app/contact',
    images: [
      {
        url: '/images/opt-preschool-entrance-sign.jpg',
        width: 1200,
        height: 900,
        alt: 'Little Flowers Preschool entrance sign and garden in Makola',
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
