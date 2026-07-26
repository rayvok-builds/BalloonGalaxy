'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LOCATIONS_DATA } from '@/data/locationsData';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import { MapPin, ArrowRight, Star } from 'lucide-react';

export default function LocationsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
            West Midlands Coverage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-neutral-900 leading-tight mb-4">
            Service Areas & Locations
          </h1>
          <p className="text-neutral-600 text-base font-light">
            We deliver, set up, and style luxury balloon displays across Birmingham, Coventry, Solihull, Wolverhampton, Warwick, Leamington Spa, and the West Midlands.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-md hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#F3EEF9] text-[#8162BB] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-2">
                  {loc.cityName}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed mb-6">
                  {loc.metaDescription}
                </p>

                <div className="space-y-1 text-xs text-neutral-700 mb-6">
                  <div className="font-bold text-neutral-900 mb-1">Key Areas Served:</div>
                  <div className="text-neutral-500 font-light">
                    {loc.areasServed.slice(0, 5).join(' • ')}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-xs font-bold text-[#8162BB] hover:underline flex items-center gap-1"
                >
                  View {loc.cityName} Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="text-[11px] font-semibold text-neutral-700"
                >
                  Get Quote
                </button>
              </div>

            </div>
          ))}
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
