'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Star, Phone, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/galleryData';


export default function Hero({ onOpenQuoteModal }) {
  // Client avatars for social proof stack
  const clientAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80",
  ];

  // Left marquee column images (Mix of portrait, landscape, square)
  const leftColumnImages = [
    GALLERY_ITEMS[0], // Celestial Pastel (aspect-[3/4] portrait)
    GALLERY_ITEMS[4], // Illuminated 21st (aspect-[4/3] landscape)
    GALLERY_ITEMS[2], // Wedding Entrance (aspect-[9/16] tall portrait)
    GALLERY_ITEMS[3], // Teddy Bear Meadow (aspect-[1/1] square)
    GALLERY_ITEMS[6], // Blush Pink Hoop (aspect-[4/5] portrait)
  ];

  // Right marquee column images (Mix of portrait, landscape, square)
  const rightColumnImages = [
    GALLERY_ITEMS[1], // Elegance Gold (aspect-[4/5] portrait)
    GALLERY_ITEMS[9], // Royal Purple Arch (aspect-[4/3] landscape)
    GALLERY_ITEMS[7], // Gender Reveal (aspect-[9/16] tall portrait)
    GALLERY_ITEMS[8], // Wild One Garland (aspect-[1/1] square)
    GALLERY_ITEMS[5], // Corporate Brand (aspect-[3/4] portrait)
  ];

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col lg:flex-row bg-neutral-950 text-white overflow-hidden">
      
      {/* Editorial Decorative Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-3 divide-x divide-white/10">
          <div className="h-full" />
          <div className="h-full" />
          <div className="h-full" />
        </div>
      </div>

      {/* Left Side Content Container */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-12 lg:py-0 lg:h-full relative z-10">
        <div className="space-y-6 max-w-2xl text-center lg:text-left">
          
          {/* Social Proof Review Eyebrow */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-3">
              {clientAvatars.map((url, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border border-neutral-950 overflow-hidden bg-neutral-900">
                  <img src={url} alt={`Client avatar ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Stars & Text */}
            <div className="flex flex-col items-center  md:items-start text-left">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
                <span className="text-xs font-bold text-white ml-1">5.0</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                143+ Reviews • Trusted by 100+ Businesses
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl  font-serif font-normal tracking-tight text-white leading-[1.08]">
            Beautiful Balloon Styling That Makes Every Celebration <br/>
            
            <span className="font-subserif italic text-[#D4AF37] block sm:inline mt-1 sm:mt-0 font-light">
              Unforgettable
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
            From birthdays and baby showers to weddings and business launches, we create bespoke balloon displays that turn empty spaces into magical experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center space-x-2 bg-[#8162BB] hover:bg-[#5C4092] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-900/30 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Get Your Free Quote</span>
            </button>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest border border-neutral-700/80 transition-all duration-300 hover:scale-105"
            >
              <span>View Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>

          {/* 6 Key Locations Served Horizontal Marquee */}
          <div className="pt-3 relative max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-neutral-400 font-medium mb-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#8162BB] shrink-0" />
              <span>Serving 6 Key West Midlands Areas:</span>
            </div>

            {/* Marquee Wrapper with Left & Right Gradient Fade Masks */}
            <div className="relative overflow-hidden w-full py-1">
              {/* Left Fade Mask */}
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
              {/* Right Fade Mask */}
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

              {/* Infinite Scrolling Marquee Track */}
              <div className="animate-marquee-left flex items-center gap-2.5 whitespace-nowrap">
                {[
                  { name: 'Birmingham', href: '/locations/birmingham' },
                  { name: 'Coventry', href: '/locations/coventry' },
                  { name: 'Solihull', href: '/locations/solihull' },
                  { name: 'Wolverhampton', href: '/locations/wolverhampton' },
                  { name: 'Warwick', href: '/locations/warwick' },
                  { name: 'Leamington Spa', href: '/locations/leamington-spa' },
                  { name: 'Birmingham', href: '/locations/birmingham' },
                  { name: 'Coventry', href: '/locations/coventry' },
                  { name: 'Solihull', href: '/locations/solihull' },
                  { name: 'Wolverhampton', href: '/locations/wolverhampton' },
                  { name: 'Warwick', href: '/locations/warwick' },
                  { name: 'Leamington Spa', href: '/locations/leamington-spa' },
                ].map((loc, idx) => (
                  <Link
                    key={idx}
                    href={loc.href}
                    className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-[#8162BB]/25 text-neutral-300 hover:text-white border border-white/10 hover:border-[#8162BB]/50 text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{loc.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* Right Side: Full Screen Height Dual Staggered Image Marquee */}
      <div className="w-full lg:w-[45%] h-[60vh] lg:h-full relative overflow-hidden flex items-center z-10">
        
        {/* Top & Bottom gradient fades for seamless edge transitions */}
        <div className="absolute top-0 left-0 right-0 h-16 lg:h-28 bg-gradient-to-b from-neutral-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-28 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none" />

        <div className="grid grid-cols-2 gap-4 w-full h-full px-4 lg:px-6 py-0">
          
          {/* Left Column Marquee (Scrolls Upwards) */}
          <div className="w-full h-full overflow-hidden relative">
            <div className="animate-marquee-up space-y-4">
              {[...leftColumnImages, ...leftColumnImages].map((item, index) => (
                <div
                  key={`left-img-${index}`}
                  className={`relative w-full ${item.aspectRatio || 'aspect-[3/4]'} rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl hover:scale-[1.02] transition-transform duration-300 group`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                        {item.category}
                      </span>
                      <span className="text-xs font-medium text-white line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Marquee (Scrolls Downwards) */}
          <div className="w-full h-full overflow-hidden relative">
            <div className="animate-marquee-down space-y-4">
              {[...rightColumnImages, ...rightColumnImages].map((item, index) => (
                <div
                  key={`right-img-${index}`}
                  className={`relative w-full ${item.aspectRatio || 'aspect-[4/5]'} rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl hover:scale-[1.02] transition-transform duration-300 group`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                        {item.category}
                      </span>
                      <span className="text-xs font-medium text-white line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}




