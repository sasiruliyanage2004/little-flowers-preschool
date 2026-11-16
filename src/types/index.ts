export type Language = 'en' | 'si';

export interface SchoolInfo {
  name: {
    en: string;
    si: string;
  };
  tagline: {
    en: string;
    si: string;
  };
  establishedYear: number;
  principal: {
    name: {
      en: string;
      si: string;
    };
    qualifications: {
      en: string;
      si: string;
    };
    role: {
      en: string;
      si: string;
    };
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappUrl: string;
    address: {
      en: string;
      si: string;
    };
    city: string;
    postalCode: string;
    country: string;
    googleMapsUrl: string;
    googleMapsEmbedQuery: string;
    youtubeUrl: string;
    youtubeChannelId: string;
  };
}

export interface GalleryItem {
  id: string;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  category: 'all' | 'activities' | 'outdoor' | 'classroom' | 'celebration' | 'video';
  imageSrc: string;
  originalSrc?: string;
  videoSrc?: string;
  alt: string;
  isFeatured?: boolean;
}

export interface DevelopmentArea {
  id: string;
  title: {
    en: string;
    si: string;
  };
  subtitle: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  iconName: string;
  accentColor: string;
  bgLight: string;
  points: {
    en: string[];
    si: string[];
  };
}

export interface ActivityItem {
  id: string;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  category: string;
  accentColor: string;
  iconName: string;
  image?: string;
}

export interface AdmissionFormValues {
  parentName: string;
  contactNumber: string;
  email?: string;
  childName?: string;
  childAge?: string;
  desiredYear: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  message?: string;
}
