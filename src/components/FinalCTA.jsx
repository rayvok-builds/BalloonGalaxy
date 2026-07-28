'use client';

import { Sparkles, Phone, MessageCircle } from 'lucide-react';

export default function FinalCTA({ onOpenQuoteModal }) {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-950 via-[#1A191D] to-neutral-900 text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8162BB]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-block border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Ready to Start Planning?
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white leading-tight mb-6">
          Let’s Create Something <br />
          <span className="italic font-subserif text-[#D4AF37]">Beautiful Together</span>
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Tell Kam & Sandeep about your event, and we will turn your vision into an effortless, picture-perfect luxury setup.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8162BB] hover:bg-[#5C4092] text-white font-medium text-base px-9 py-4.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer hover:scale-105 transition-all"
          >
            Get Your Free Quote
          </button>

          <a
            href="tel:+447841696582"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-base px-8 py-4.5 rounded-full backdrop-blur-md transition-all cursor-pointer"
          >
            <img src="/callIcon - Copy.gif" alt="Call" className="w-5 h-5 object-contain" />
            Call Us Today (+44 7841 696582)
          </a>
        </div>

      </div>
    </section>
  );
}
