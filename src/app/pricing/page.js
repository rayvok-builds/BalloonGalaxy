'use client';

import { useState } from 'react';
import Packages from '@/components/Packages';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';

export default function PricingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="py-12 bg-[#FAF8F5]">
      <Packages onOpenQuoteModal={() => setIsQuoteOpen(true)} />
      <FinalCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
