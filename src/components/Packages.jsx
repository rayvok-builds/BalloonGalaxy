'use client';

import { useState } from 'react';
import { Check, Sparkles, Star, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Packages({ onOpenQuoteModal }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: "Classic",
      tagline: "Perfect for intimate celebrations & home setups",
      price: "From £175",
      badge: "Intimate Choice",
      color: "border-neutral-200",
      bg: "bg-white",
      features: [
        "8ft Organic Balloon Garland",
        "Personalized Acrylic Welcome Board & Easel",
        "Custom 2-Tone Double-Stuffed Colors",
        "Complete On-Site Delivery & Setup",
        "Post-Event Prop Collection Included"
      ],
      ctaText: "Learn More & Book"
    },
    {
      name: "Premium",
      tagline: "Our most popular choice for birthdays & baby showers",
      price: "From £320",
      popular: true,
      badge: "Most Popular",
      color: "border-[#8162BB] ring-2 ring-[#8162BB]/20",
      bg: "bg-gradient-to-b from-[#F3EEF9]/60 to-white",
      features: [
        "Full Sailboard Backdrop or 2m Balloon Hoop Frame",
        "12ft Lush Organic Balloon Cascade",
        "Bespoke Vinyl Lettering Calligraphy",
        "Matching Acrylic Display Plinth for Cakes/Flowers",
        "Double-Stuffed Custom Palette",
        "Priority Weekend Setup Slot",
        "Full Setup & Collection Included"
      ],
      ctaText: "Select Premium Package"
    },
    {
      name: "Luxury",
      tagline: "Fully bespoke installations for grand celebrations",
      price: "From £550",
      badge: "Fully Bespoke",
      color: "border-amber-300",
      bg: "bg-neutral-900 text-white",
      isDark: true,
      features: [
        "Multi-Sailboard or Shimmer Wall Installation",
        "16ft+ Grand Organic Balloon Architecture",
        "Hire of 4ft LED Light-Up Numbers or Letters",
        "Plush Teddy Bears or Luxury Floral Accent Hire",
        "2x Matching Display Plinths",
        "On-Site Styling Lead Managed by Kam & Sandeep",
        "VIP Priority Delivery & Late Collection"
      ],
      ctaText: "Get Bespoke Luxury Quote"
    }
  ];

  return (
    <section id="packages" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
            Choose the Perfect Style
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
            Curated Decor Packages
          </h2>
          <p className="text-neutral-600 text-base font-light">
            Whether you need something simple or something truly spectacular, we have a tailored package to suit your celebration.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 border ${pkg.color} ${pkg.bg} shadow-lg hover-lift flex flex-col justify-between`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8162BB] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> {pkg.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-serif text-2xl font-semibold ${pkg.isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {pkg.name}
                  </h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${pkg.isDark ? 'bg-neutral-800 text-amber-300' : 'bg-[#8162BB]/10 text-[#8162BB]'}`}>
                    {pkg.badge}
                  </span>
                </div>

                <p className={`text-xs font-light mb-6 ${pkg.isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {pkg.tagline}
                </p>

                {/* Price */}
                <div className="mb-8 border-b pb-6 border-neutral-200/40">
                  <span className={`font-serif text-4xl font-bold ${pkg.isDark ? 'text-amber-300' : 'text-neutral-900'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-xs block mt-1 ${pkg.isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    *Includes setup, prop hire & collection
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.isDark ? 'text-amber-300' : 'text-[#8162BB]'}`} />
                      <span className={pkg.isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenQuoteModal}
                className={`w-full py-4 rounded-2xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer hover:cursor-pointer transition-all ${
                  pkg.isDark
                    ? 'bg-amber-400 hover:bg-amber-300 text-neutral-900 font-bold shadow-md'
                    : pkg.popular
                    ? 'bg-[#8162BB] hover:bg-[#5C4092] text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-md'
                }`}
              >
                {pkg.popular ? null : <Sparkles className="w-4 h-4" />} {pkg.ctaText}
              </button>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 max-w-2xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-neutral-500">
          <ShieldCheck className="w-4 h-4 text-[#8162BB]" />
          <span>All packages include free delivery within 10 miles of Birmingham & Coventry. Custom additions available.</span>
        </div>

      </div>
    </section>
  );
}
