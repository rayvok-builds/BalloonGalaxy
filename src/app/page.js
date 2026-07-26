'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import MasonryGallery from '@/components/MasonryGallery';
import EventInspirations from '@/components/EventInspirations';
import Packages from '@/components/Packages';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import VideoShowcase from '@/components/VideoShowcase';
import MeetTheTeam from '@/components/MeetTheTeam';
import Testimonials from '@/components/Testimonials';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import InstagramFeed from '@/components/InstagramFeed';
import FaqAccordion from '@/components/FaqAccordion';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);

  return (
    <div className="overflow-hidden">
      {/* 1. Full-screen Cinematic Hero */}
      <Hero onOpenQuoteModal={openQuoteModal} />

      {/* 2. Instant Trust Bar (143+ 5★ Google Reviews Spotlight) */}
      <TrustBar />

      {/* 3. Portfolio Gallery (Pinterest Masonry Grid) */}
      <MasonryGallery onOpenQuoteModal={openQuoteModal} />

      {/* 4. Imagine Your Event Like This */}
      <EventInspirations onOpenQuoteModal={openQuoteModal} />

      {/* 5. Featured Packages (Classic, Premium, Luxury) */}
      <Packages onOpenQuoteModal={openQuoteModal} />

      {/* 6. Why Choose Balloon Galaxy (Alternating Editorial Feature Layout) */}
      <WhyChooseUs onOpenQuoteModal={openQuoteModal} />

      {/* 7. How It Works (5-Step Visual Timeline) */}
      <HowItWorks onOpenQuoteModal={openQuoteModal} />

      {/* 8. Video Section (Auto-Playing Muted Reels) */}
      <VideoShowcase />

      {/* 9. Meet The Team (Kam & Sandeep Founder Story) */}
      <MeetTheTeam />

      {/* 10. Customer Reviews */}
      <Testimonials />

      {/* 11. Before & After Venue Slider */}
      <BeforeAfterSlider />

      {/* 12. Instagram Live Feed Grid */}
      <InstagramFeed />

      {/* 13. FAQ Knowledge Hub */}
      <FaqAccordion onOpenQuoteModal={openQuoteModal} />

      {/* 14. Strong Final CTA Banner */}
      <FinalCTA onOpenQuoteModal={openQuoteModal} />

      {/* Embedded Quote Modal Trigger */}
      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
