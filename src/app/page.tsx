import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IdealForSection from '@/components/IdealForSection';
import ReviewsSection from '@/components/ReviewsSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdealForSection />
      <ServicesSection />
      <HowItWorksSection />
      <ReviewsSection />
    </>
  );
}
