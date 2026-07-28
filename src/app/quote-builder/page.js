'use client';

import { useState } from 'react';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import FinalCTA from '@/components/FinalCTA';

export default function QuoteBuilderPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-16 min-h-[80vh] flex flex-col justify-center items-center bg-[#0B0A0E]">
      <div className="text-center max-w-xl px-4 mb-8">
        <span className="inline-block border border-[#8162BB]/40 bg-[#F3EEF9]/10 text-[#8162BB] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
          Tailored Quotation
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
          Build Your Event Quote
        </h1>
        <p className="text-neutral-400 text-sm font-light">
          Use our interactive visual builder to configure your event type, preferred colors, and date for an instant proposal.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 bg-[#8162BB] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer"
        >
          Open Visual Builder Window
        </button>
      </div>

      <QuoteBuilderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
