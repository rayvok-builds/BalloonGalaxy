'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import MasonryGallery from '@/components/MasonryGallery';
import Testimonials from '@/components/Testimonials';
import Packages from '@/components/Packages';
import EventInspirations from '@/components/EventInspirations';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import HowItWorks from '@/components/HowItWorks';
import MeetTheTeam from '@/components/MeetTheTeam';
import InstagramFeed from '@/components/InstagramFeed';
import FaqAccordion from '@/components/FaqAccordion';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);

  return (
    <div className="overflow-hidden">
      {/* 1. Conversion Hero Section */}
      <Hero onOpenQuoteModal={openQuoteModal} />

      {/* 2. Instant Trust Bar (143+ 5★ Google Reviews Spotlight) */}
      <TrustBar />

      {/* 3. Portfolio Gallery (Show Don't Tell) */}
      <MasonryGallery onOpenQuoteModal={openQuoteModal} />

      {/* 4. Real Client Testimonials (Social Proof after Gallery) */}
      <Testimonials />

      {/* 5. Curated Pricing Packages (Classic, Premium, Luxury) */}
      <Packages onOpenQuoteModal={openQuoteModal} />

      {/* 6. Inspiration by Occasion (Birthdays, Baby Showers, Weddings) */}
      <EventInspirations onOpenQuoteModal={openQuoteModal} />

      {/* 7. Why Choose Balloon Galaxy (Value Props & Craftsmanship) */}
      <WhyChooseUs onOpenQuoteModal={openQuoteModal} />

      {/* 8. Before & After Venue Transformation Slider */}
      <BeforeAfterSlider />

      {/* 9. How It Works (5-Step Visual Process Timeline) */}
      <HowItWorks onOpenQuoteModal={openQuoteModal} />

      {/* 10. Meet The Team (Kam & Sandeep Founder Story) */}
      <MeetTheTeam />

      {/* 11. Instagram Live Feed Grid */}
      <InstagramFeed />

      {/* 12. FAQ Knowledge Hub (Objection Handling) */}
      <FaqAccordion onOpenQuoteModal={openQuoteModal} />

      {/* 13. Strong Final CTA Banner */}
      <FinalCTA onOpenQuoteModal={openQuoteModal} />

      {/* Embedded Interactive Quote Modal */}
      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}

