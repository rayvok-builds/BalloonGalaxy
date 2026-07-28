'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="py-16 bg-[#0B0A0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block border border-[#8162BB]/40 bg-[#F3EEF9]/10 text-[#8162BB] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Bespoke Styling Options
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white leading-tight mb-4">
            Our Event Decor Services
          </h1>
          <p className="text-neutral-400 text-base font-light">
            Explore our 15 specialized event balloon decoration services across Birmingham, Coventry & the West Midlands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES_DATA.map((svc) => (
            <div
              key={svc.slug}
              className="bg-[#121118] rounded-3xl overflow-hidden border border-purple-900/30 shadow-2xl hover-lift flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={svc.heroImage}
                  alt={svc.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4 line-clamp-3">
                    {svc.heroSubheading}
                  </p>
                  
                  <ul className="space-y-1.5 mb-6 text-xs text-neutral-300">
                    {svc.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#8162BB]" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-xs font-bold text-[#8162BB] hover:underline flex items-center gap-1"
                  >
                    Read Details & Pricing <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="text-[11px] font-semibold text-neutral-400 hover:text-white cursor-pointer"
                  >
                    Quick Quote
                  </button>
                </div>
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
