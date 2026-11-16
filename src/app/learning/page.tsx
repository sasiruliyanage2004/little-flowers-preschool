import type { Metadata } from 'next';
import { LearningView } from '@/components/views/LearningView';

export const metadata: Metadata = {
  title: 'Our Learning & Holistic Development | Little Flowers Preschool',
  description:
    'Explore the 6 core developmental domains and joyful daily rhythms at Little Flowers Preschool Makola. Cognitive, social, motor, language, creative and emotional growth.',
  alternates: {
    canonical: 'https://little-flowers-preschool.vercel.app/learning',
  },
  openGraph: {
    title: 'Our Learning & Early Childhood Development | Little Flowers Preschool',
    description:
      'Curating age-appropriate activities to uncover hidden talents and nurture every child’s unique potential.',
    url: 'https://little-flowers-preschool.vercel.app/learning',
    images: [
      {
        url: '/images/opt-happy-learning-group.jpg',
        width: 1200,
        height: 900,
        alt: 'Little Flowers Preschool learning environment and happy group activities',
      },
    ],
  },
};

export default function LearningPage() {
  return <LearningView />;
}
