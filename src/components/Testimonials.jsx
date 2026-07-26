'use client';

import { REVIEWS_LIST, GOOGLE_REVIEWS_SUMMARY } from '@/data/reviewsData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EEF9] text-[#8162BB] text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" /> {GOOGLE_REVIEWS_SUMMARY.badgeText}
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
            Kind Words From Happy Clients
          </h2>
          <p className="text-neutral-600 text-base font-light">
            Nothing makes Kam & Sandeep happier than seeing client smiles when their event setup is revealed.
          </p>
        </div>

        {/* Large Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5] rounded-3xl p-8 border border-neutral-200/80 shadow-md hover-lift flex flex-col justify-between"
            >
              <div>
                {/* Event Photo Preview Header */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                  <img
                    src={rev.eventPhoto}
                    alt={rev.event}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" /> Verified Setup
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-800 text-base font-light leading-relaxed mb-6 font-subserif italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/60">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#8162BB]"
                />
                <div>
                  <h4 className="font-serif text-base font-semibold text-neutral-900">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light">
                    {rev.event} • <span className="text-[#8162BB] font-medium">Google Review</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
