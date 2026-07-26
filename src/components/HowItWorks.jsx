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
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
            Simple 5-Step Process
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
            It’s Easy to Get Started
          </h2>
          <p className="text-neutral-600 text-base font-light">
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
                className="relative bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover-lift group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#8162BB]/30 group-hover:text-[#8162BB] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#F3EEF9] text-[#8162BB] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Connector Arrow (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-300 font-serif text-xl">
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
            className="inline-flex items-center gap-2 bg-[#8162BB] hover:bg-[#5C4092] text-white text-sm font-medium px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" /> Start Step 1 - Get Free Quote
          </button>
        </div>

      </div>
    </section>
  );
}
