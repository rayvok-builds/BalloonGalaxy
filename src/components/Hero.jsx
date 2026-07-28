'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative h-screen min-h-[620px] flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark Luxury Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/40 via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-8">
        
        {/* Eyebrow Image */}
        <div className="flex justify-center mb-5 animate-fade-in">
          <img
            src="https://res.cloudinary.com/dokrpo5fl/image/upload/v1785250122/143_m4qkvz.png"
            alt="143+ 5-Star Google Reviews"
            className="h-12 sm:h-16 md:w-24 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
          />
        </div>

        {/* Massive Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-4 max-w-4xl mx-auto drop-shadow-2xl">
          Beautiful Balloon Styling That Makes Every Celebration
          <span className="italic font-subserif text-[#D4AF37] font-light">
              Unforgettable
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-6">
          From birthdays and baby showers to weddings and business launches, we create bespoke balloon displays that turn empty spaces into magical experiences.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-5">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8162BB] hover:bg-[#5C4092] text-white font-medium text-base px-9 py-3.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get Your Free Quote
          </button>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-base px-8 py-3.5 rounded-full backdrop-blur-md hover:border-white/50 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>

        {/* Location Subtext — after CTAs */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-purple-200/80 font-medium">
          <MapPin className="w-3.5 h-3.5 text-white" />
          <span>Serving Birmingham, Coventry, Solihull, Wolverhampton &amp; Surrounding West Midlands</span>
        </div>

      </div>
    </section>
  );
}

