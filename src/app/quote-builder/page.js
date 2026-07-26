'use client';

import { useState } from 'react';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import FinalCTA from '@/components/FinalCTA';

export default function QuoteBuilderPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-16 min-h-[80vh] flex flex-col justify-center items-center bg-[#FAF8F5]">
      <div className="text-center max-w-xl px-4 mb-8">
        <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-2">
          Tailored Quotation
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 mb-4">
          Build Your Event Quote
        </h1>
        <p className="text-neutral-600 text-sm font-light">
          Use our interactive visual builder to configure your event type, preferred colors, and date for an instant proposal.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 bg-[#8162BB] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-xl"
        >
          Open Visual Builder Window
        </button>
      </div>

      <QuoteBuilderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
