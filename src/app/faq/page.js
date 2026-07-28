'use client';

import { useState } from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';

export default function FAQPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="py-12 bg-[#0B0A0E]">
      <FaqAccordion onOpenQuoteModal={() => setIsQuoteOpen(true)} />
      <FinalCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
