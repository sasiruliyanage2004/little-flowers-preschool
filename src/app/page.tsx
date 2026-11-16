import { HeroSection } from '@/components/home/HeroSection';
import { EstablishedSection } from '@/components/home/EstablishedSection';
import { WelcomeSection } from '@/components/home/WelcomeSection';
import { VisionMissionSection } from '@/components/home/VisionMissionSection';
import { LearningDevelopmentSection } from '@/components/home/LearningDevelopmentSection';
import { LearningPlaySection } from '@/components/home/LearningPlaySection';
import { GalleryPreviewSection } from '@/components/home/GalleryPreviewSection';
import { VideoShowcaseSection } from '@/components/home/VideoShowcaseSection';
import { ParentCtaSection } from '@/components/home/ParentCtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EstablishedSection />
      <WelcomeSection />
      <VisionMissionSection />
      <LearningDevelopmentSection />
      <LearningPlaySection />
      <GalleryPreviewSection />
      <VideoShowcaseSection />
      <ParentCtaSection />
    </>
  );
}
