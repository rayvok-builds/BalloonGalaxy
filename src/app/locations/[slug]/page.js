'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LOCATIONS_DATA } from '@/data/locationsData';
import FinalCTA from '@/components/FinalCTA';
import Testimonials from '@/components/Testimonials';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import { MapPin, Sparkles, CheckCircle2, ArrowLeft, Building2 } from 'lucide-react';

export default function LocationDetailPage({ params }) {
  const resolvedParams = use(params);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const loc = LOCATIONS_DATA.find(l => l.slug === resolvedParams.slug);

  if (!loc) {
    notFound();
  }

  return (
    <div className="py-12 bg-[#0B0A0E]">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/locations" className="inline-flex items-center gap-2 text-xs font-semibold text-[#8162BB] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Locations
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#121118] rounded-3xl p-8 sm:p-12 border border-purple-900/30 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8162BB]/20 border border-[#8162BB]/30 text-[#C4B8DC] text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5" /> Local Specialist in {loc.cityName}
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
              {loc.heroHeadline}
            </h1>
            <p className="text-neutral-400 text-base font-light leading-relaxed mb-8">
              {loc.heroSubheading}
            </p>

            <div className="bg-[#1A1921] p-5 rounded-2xl border border-purple-900/30 mb-8 space-y-2 text-xs text-neutral-300">
              <div className="font-bold text-white text-sm">Key Neighborhoods Covered:</div>
              <div className="flex flex-wrap gap-2 pt-1">
                {loc.areasServed.map((area, idx) => (
                  <span key={idx} className="bg-[#121118] border border-purple-900/40 px-3 py-1 rounded-full text-neutral-200">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#8162BB] hover:bg-[#5C4092] text-white px-8 py-4 rounded-full text-sm font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer flex items-center justify-center"
            >
              Book {loc.cityName} Balloon Decor
            </button>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-purple-900/30">
            <iframe
              title={`Google Map for ${loc.cityName}`}
              src={loc.googleMapEmbed}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Local Content & Popular Venues */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-[#121118] rounded-3xl p-8 sm:p-12 border border-purple-900/30 shadow-2xl space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Luxury Balloon Styling Services in {loc.cityName}
          </h2>
          <p className="text-neutral-300 text-base font-light leading-relaxed">
            {loc.introText}
          </p>

          <div className="pt-4 border-t border-purple-900/30">
            <h3 className="font-semibold text-white text-base mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#8162BB]" /> Popular Venues & Hotels We Style in {loc.cityName}:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-medium">
              {loc.popularVenues.map((v, i) => (
                <li key={i} className="flex items-center gap-2 bg-[#1A1921] p-3 rounded-xl border border-purple-900/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8162BB]" /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Testimonials />
      <FinalCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
