'use client';

import Link from 'next/link';
import { Eye, Star, MapPin, Asterisk  } from 'lucide-react';

const REVIEWER_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
];

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
        
        {/* Eyebrow — reviewer avatars + 5-star Google badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-white mb-5 animate-fade-in shadow-xl">
          {/* Stacked reviewer avatars */}
          <div className="flex -space-x-2">
            {REVIEWER_AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Google reviewer"
                className="w-6 h-6 rounded-full object-cover border-2 border-white/20"
                style={{ zIndex: REVIEWER_AVATARS.length - i }}
              />
            ))}
          </div>
          {/* Divider */}
          <span className="w-px h-4 bg-white/20" />
          {/* Stars */}
          <div className="flex items-center text-[#D4AF37] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <span className="font-semibold text-white">5.0 · 143+ Google Reviews</span>
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
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8162BB] hover:bg-[#5C4092] text-white font-medium text-base px-9 py-3.5 rounded-full shadow-2xl shadow-inner shadow-purple-900/50 hover:scale-105 active:scale-95 transition-all duration-300"
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

