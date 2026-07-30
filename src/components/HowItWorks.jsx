'use client';

import { MessageSquare, Palette, CheckSquare, Sparkles, Smile, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenQuoteModal }) {
  const steps = [
    {
      step: "01",
      title: "Tell Us Your Vision",
      desc: "Share your event date, location, theme ideas or inspiration photos.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Custom Design & Quote",
      desc: "Receive a bespoke proposal with exact color palettes and transparent pricing.",
      icon: Palette
    },
    {
      step: "03",
      title: "Approve & Secure Date",
      desc: "Confirm your design and place a small deposit to lock your setup date.",
      icon: CheckSquare
    },
    {
      step: "04",
      title: "On-Site Installation",
      desc: "Kam & Sandeep arrive early to inflate, assemble, and detail your setup.",
      icon: Sparkles
    },
    {
      step: "05",
      title: "Enjoy Your Event",
      desc: "Walk into your transformed venue, take photos, and relax stress-free.",
      icon: Smile
    }
  ];

  return (
    <section className="py-20 bg-[#0C0B10] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            Simple 5-Step Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white leading-tight mb-3">
            How It Works
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            We handle everything from initial design to setup and packdown.
          </p>
        </div>

        {/* Minimal 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#15141E] border border-white/5 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#8162BB]/60 group-hover:text-[#8162BB] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-medium text-white text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-[#8162BB] hover:bg-purple-700 text-white text-xs sm:text-sm font-medium px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
