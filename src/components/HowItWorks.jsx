'use client';

import { MessageSquare, Palette, CheckSquare, Sparkles, Smile } from 'lucide-react';

export default function HowItWorks({ onOpenQuoteModal }) {
  const steps = [
    {
      step: "01",
      title: "Tell Us Your Vision",
      desc: "Share your event date, venue location, theme ideas, or inspiration photos via our quote tool.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Receive Custom Design & Quote",
      desc: "Kam will craft a bespoke styling proposal with exact color palettes and transparent pricing.",
      icon: Palette
    },
    {
      step: "03",
      title: "Approve & Secure Date",
      desc: "Confirm your design details and place a small deposit to hold your setup date on our calendar.",
      icon: CheckSquare
    },
    {
      step: "04",
      title: "Professional Installation",
      desc: "On event day, Sandeep & Kam deliver, assemble props, inflate double-stuffed balloons & detail vinyl.",
      icon: Sparkles
    },
    {
      step: "05",
      title: "Enjoy Your Event!",
      desc: "Walk into your beautifully transformed venue, take photos with guests, and enjoy a stress-free day.",
      icon: Smile
    }
  ];

  return (
    <section className="py-24 bg-[#121118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block border border-[#8162BB]/40 bg-[#F3EEF9]/10 text-[#8162BB] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Simple 5-Step Process
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            It’s Easy to Get Started
          </h2>
          <p className="text-neutral-400 text-base font-light">
            We handle everything from initial concept to post-party cleanup so you can be a guest at your own event.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#1A1921] rounded-3xl p-6 border border-purple-900/30 shadow-2xl flex flex-col justify-between hover-lift group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#8162BB]/50 group-hover:text-[#8162BB] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#8162BB]/20 text-[#C4B8DC] border border-[#8162BB]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Connector Arrow (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-purple-900/50 font-serif text-xl">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center bg-[#8162BB] hover:bg-[#5C4092] text-white text-sm font-medium px-8 py-4 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer hover:scale-105 transition-all"
          >
            Start Step 1 - Get Free Quote
          </button>
        </div>

      </div>
    </section>
  );
}
