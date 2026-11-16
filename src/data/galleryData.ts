import { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'running-joy',
    title: {
      en: 'Happy Steps Forward',
      si: 'සතුටින් පිරි පුංචි පියවර',
    },
    description: {
      en: 'Preschool children running together across the courtyard with bright radiant smiles and boundless energy.',
      si: 'අපේ පෙරපාසල් මිදුලේ යහළුවන් සමඟ සිනහවෙන් හා ප්‍රබෝධයෙන් දිව යන සොඳුරු මොහොතක්.',
    },
    category: 'outdoor',
    imageSrc: '/images/opt-preschool-activity-banner.jpg',
    originalSrc: '/images/hero-running-children.jpg',
    videoSrc: '/videos/preschool-children-running.mp4',
    alt: 'Preschool children at Little Flowers running happily together across the school courtyard in Makola',
    isFeatured: true,
  },
  {
    id: 'school-family',
    title: {
      en: 'Preschool Smiles & Uniform Pride',
      si: 'නිල ඇඳුමින් සැරසුණු පුංචි පැටවුන්',
    },
    description: {
      en: 'Our little flowers in their iconic school uniforms gathered outside the vibrant classroom entrance.',
      si: 'ලිට්ල් ෆ්ලවර්ස් නිල ඇඳුමෙන් සැරසී පන්ති කාමරය අභියස සතුටින් රැඳී සිටින දරුවන්.',
    },
    category: 'classroom',
    imageSrc: '/images/opt-children-play-smiles.jpg',
    originalSrc: '/images/IMG_7611.jpg',
    alt: 'Little Flowers Preschool children wearing official uniform standing together outside classroom',
    isFeatured: true,
  },
  {
    id: 'playful-moments',
    title: {
      en: 'Innocent Laughter & Playful Poses',
      si: 'අහිංසක හුරතල් සිනහවන්',
    },
    description: {
      en: 'Playful expressions and innocent camaraderie capturing the genuine happiness of childhood.',
      si: 'සැබෑ ළමා ලොවේ අව්‍යාජ සතුට සහ දඟකාර සුරතල් ඉරියව් මැනවින් පිළිඹිබු වන මොහොතක්.',
    },
    category: 'activities',
    imageSrc: '/images/opt-happy-learning-group.jpg',
    originalSrc: '/images/IMG_7612.jpg',
    alt: 'Happy Little Flowers students posing playfully with cheerful smiles',
    isFeatured: true,
  },
  {
    id: 'candid-joy',
    title: {
      en: 'Spontaneous Joy & Freedom',
      si: 'නිදහස් ප්‍රීතිය සහ ප්‍රබෝධය',
    },
    description: {
      en: 'A joyful candid moment of laughter where every child feels confident, free, and embraced with love.',
      si: 'ආදරය සහ රැකවරණය පිරි පරිසරයක දරුවන් විඳින අපරිමිත නිදහස හා අව්‍යාජ ප්‍රීතිය.',
    },
    category: 'activities',
    imageSrc: '/images/opt-preschool-fun-expressions.jpg',
    originalSrc: '/images/IMG_7613.jpg',
    alt: 'Candid photo of children laughing and expressing joy at Little Flowers Preschool',
    isFeatured: false,
  },
  {
    id: 'entrance-swings',
    title: {
      en: 'Courtyard Swings & School Heritage',
      si: 'පෙරපාසල් දොරටුව සහ පැද්දුම් පරිශ්‍රය',
    },
    description: {
      en: 'The welcoming entrance bearing the traditional blessing “දිනෙන් දින දියුණු වේවා!” alongside the leafy garden playground.',
      si: '“ලිට්ල් ෆ්ලවර්ස් පෙර පාසල දිනෙන් දින දියුණු වේවා!” ආශිර්වාදය හා ගස්කොළන් පිරි පැද්දුම් පරිශ්‍රය.',
    },
    category: 'outdoor',
    imageSrc: '/images/opt-preschool-entrance-sign.jpg',
    originalSrc: '/images/IMG_7614.jpg',
    alt: 'Little Flowers Preschool entrance with official sign board and garden playground swings',
    isFeatured: true,
  },
];

export const youtubeShowcases = [
  {
    id: 'youtube-channel',
    title: {
      en: 'Annual Variety Shows & Stage Performances',
      si: 'වාර්ෂික විවිධ ප්‍රසංග හා වේදිකා රංගනයන්',
    },
    description: {
      en: 'Watch our talented little learners perform beloved songs such as “Api punchi punchi Tharu wage” and cultural dances on the official YouTube channel.',
      si: 'අපේ දූ පුතුන් “අපි පුංචි පුංචි තරු වගේ” වැනි සුන්දර ළමා ගීත සහ නැටුම් ඉදිරිපත් කරන ආකාරය නිල යූටියුබ් නාලිකාවෙන් නරඹන්න.',
    },
    youtubeUrl: 'https://youtube.com/@littleflowerspreschool3677?si=O4jSjcF1sCO6Ue6r',
    thumbnail: '/images/opt-preschool-activity-banner.jpg',
    badge: 'Official YouTube Channel',
  },
];
