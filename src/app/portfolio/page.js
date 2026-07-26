'use client';

import { useState } from 'react';
import MasonryGallery from '@/components/MasonryGallery';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';

export default function PortfolioPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="pt-8">
      <MasonryGallery onOpenQuoteModal={() => setIsQuoteOpen(true)} />
      <FinalCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
