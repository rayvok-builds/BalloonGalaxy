'use client';

import { useState } from 'react';
import MeetTheTeam from '@/components/MeetTheTeam';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import { Award, CheckCircle2, Heart, Star, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
          Founded October 2022
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-normal text-neutral-900 leading-tight mb-6">
          The Story of Balloon Galaxy
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg font-light max-w-3xl mx-auto leading-relaxed">
          How a qualified corporate accountant left the desk to spend more time with her two boys and build Birmingham & Coventry’s favorite luxury event decor business.
        </p>
      </div>

      {/* Meet The Team Section */}
      <MeetTheTeam />

      {/* Story Narrative Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xl space-y-6 text-neutral-700 font-light text-base leading-relaxed">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">
            From Balance Sheets to Luxury Balloon Artistry
          </h2>
          <p>
            In October 2022, Kam took a bold leap of faith. As a qualified accountant working long corporate hours, she wanted a career that allowed her to spend precious quality time with her two growing boys while expressing her deep love for creativity, color, and design.
          </p>
          <p>
            What started as a passion for styling family birthday parties quickly grew into <strong>Balloon Galaxy</strong>. Today, Kam manages client relations, financial accounting, balloon orders, color mixing, double-stuffing, and vinyl lettering. Her corporate accounting background means every client receives bulletproof organization, rapid responses, and transparent pricing.
          </p>
          <p>
            Sandeep joins Kam on event days, taking charge of prop craftsmanship, custom backdrop painting, weighted structural base safety, and precision venue setup. Together, they have styled over 1800 events and earned <strong>143+ 5★ Google reviews</strong>.
          </p>

          <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              <span>5.0 Rating • 143 Verified Google Reviews</span>
            </div>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#8162BB] text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-[#5C4092] transition-all"
            >
              Plan Your Event With Kam
            </button>
          </div>
        </div>
      </div>

      <FinalCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
