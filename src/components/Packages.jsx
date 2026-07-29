'use client';

import { useState } from 'react';
import { Check, Sparkles, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Packages({ onOpenQuoteModal }) {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const nextMonth = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleString('default', { month: 'long' });

  const packages = [
    {
      name: "Classic",
      tagline: "Perfect for intimate celebrations & home setups",
      price: "From £175",
      badge: "Intimate Choice",
      color: "border-purple-900/30",
      bg: "bg-[#1A1921]",
      isDark: true,
      features: [
        "8ft Organic Balloon Garland Architecture",
        "Personalized Acrylic Welcome Board & Wood Easel",
        "Custom Double-Stuffed Luxury Color Matching",
        "Full On-Site Delivery & Setup Included",
        "Post-Event Prop Collection Included"
      ],
      ctaText: "Get Your Free Quote"
    },
    {
      name: "Premium",
      tagline: "Our most popular choice for birthdays & baby showers",
      price: "From £320",
      popular: true,
      badge: "Most Popular",
      color: "border-[#8162BB] ring-2 ring-[#8162BB]/30",
      bg: "bg-gradient-to-b from-[#231C32] to-[#1A1921]",
      isDark: true,
      features: [
        "Full Arch Sailboard Backdrop or 2m Balloon Hoop Frame",
        "12ft Lush Organic Balloon Cascade",
        "Bespoke Vinyl Lettering & Personalized Calligraphy",
        "Matching Acrylic Display Plinth for Cakes/Flowers",
        "Double-Stuffed Custom Palette Color Styling",
        "Priority Weekend Setup Slot Guaranteed",
        "Full Setup & Prop Collection Included"
      ],
      ctaText: "Get Your Free Quote"
    },
    {
      name: "Luxury",
      tagline: "Fully bespoke installations for grand celebrations",
      price: "From £550",
      badge: "Fully Bespoke",
      color: "border-amber-300/60",
      bg: "bg-[#0B0A0E] text-white",
      isDark: true,
      features: [
        "Multi-Sailboard Backdrop or Shimmer Wall Installation",
        "16ft+ Grand Organic Balloon Architecture",
        "Hire of 4ft LED Light-Up Numbers or Letters",
        "Plush Teddy Bears or Luxury Floral Accent Hire",
        "2x Matching Display Plinths for Dessert Styling",
        "On-Site Styling Lead Managed by Kam & Sandeep",
        "VIP Priority Delivery & Late Night Collection"
      ],
      ctaText: "Get Your Free Quote"
    }
  ];

  return (
    <section id="packages" className="py-24 bg-[#121118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8162BB]/15 text-[#D4AF37] border border-[#8162BB]/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently Booking Weekend Slots for {currentMonth} &amp; {nextMonth}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            Transparent Pricing &amp; Packages
          </h2>
          <p className="text-neutral-400 text-base font-light max-w-xl mx-auto">
            Clear, all-inclusive pricing with zero hidden fees. Every package includes custom color palette matching, delivery, installation, and prop collection.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 border ${pkg.color} ${pkg.bg} shadow-2xl hover-lift flex flex-col justify-between`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8162BB] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> {pkg.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {pkg.name}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#8162BB]/20 text-[#C4B8DC] border border-[#8162BB]/30">
                    {pkg.badge}
                  </span>
                </div>

                <p className="text-xs font-light mb-6 text-neutral-400">
                  {pkg.tagline}
                </p>

                {/* Price */}
                <div className="mb-8 border-b pb-6 border-purple-900/30">
                  <span className="font-serif text-4xl font-bold text-amber-300">
                    {pkg.price}
                  </span>
                  <span className="text-xs block mt-1 text-neutral-400">
                    *Includes setup, prop hire &amp; collection
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-amber-300" />
                      <span className="text-neutral-300">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenQuoteModal}
                className={`w-full py-4 rounded-2xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all ${
                  pkg.name === "Luxury"
                    ? 'bg-amber-400 hover:bg-amber-300 text-neutral-900 font-bold shadow-md'
                    : pkg.popular
                    ? 'bg-[#8162BB] hover:bg-[#5C4092] text-white shadow-lg'
                    : 'bg-[#231C32] hover:bg-[#2F2642] text-white border border-purple-900/40 shadow-md'
                }`}
              >
                {pkg.popular ? null : <Sparkles className="w-4 h-4 text-amber-300" />} {pkg.ctaText}
              </button>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 max-w-2xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-neutral-400">
          <ShieldCheck className="w-4 h-4 text-[#8162BB]" />
          <span>All packages include free delivery within 10 miles of Birmingham &amp; Coventry. Custom additions available upon request.</span>
        </div>

      </div>
    </section>
  );
}

