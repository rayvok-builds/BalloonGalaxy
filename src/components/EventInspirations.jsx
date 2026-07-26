'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function EventInspirations({ onOpenQuoteModal }) {
  const inspirations = [
    {
      title: "🎈 First Birthday",
      subtitle: "Jungle, Safari & Teddy Bear Meadows",
      desc: "Soft organic arches, giant plush teddy bears, and gentle earth tones crafted for milestone memories.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/751713272_18022859771853271_5163289055223755411_n_yd7cwm.jpg",
      link: "/portfolio?category=birthdays"
    },
    {
      title: "🎈 Baby Shower",
      subtitle: "Oh Baby Cloud Sailboards",
      desc: "Eucalyptus greens, nude blush, and soft white balloons surrounding bespoke acrylic backdrop boards.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/753092380_18023160485853271_7024676582473989644_n_rhmif2.jpg",
      link: "/portfolio?category=baby-showers"
    },
    {
      title: "🎈 Wedding Entrance",
      subtitle: "High-Fashion Ivory & Gold Arches",
      desc: "Grand welcome arches decorated with double-stuffed champagne balloons and delicate silk florals.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/745152064_18021964016853271_2886719108912963478_n_xavocn.jpg",
      link: "/portfolio?category=weddings"
    },
    {
      title: "🎈 Corporate Launch",
      subtitle: "NEC Exhibition & Gala Backdrop",
      desc: "Brand-aligned color palettes, vinyl logos, and metallic balloon cascades designed to elevate corporate prestige.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/746285169_18021678161853271_5030388314847864711_n_mejna5.jpg",
      link: "/portfolio?category=corporate"
    },
    {
      title: "🎈 Bridal Shower",
      subtitle: "Chic Pastel & Champagne Waterfall",
      desc: "Intimate bridal suite decorations with personalized Mr & Mrs backdrop frames and champagne accents.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/736420557_18021118742853271_5705423997968146030_n_a1uwor.jpg",
      link: "/portfolio?category=weddings"
    },
    {
      title: "🎈 Graduation & Milestones",
      subtitle: "4ft LED Light-Up Numbers",
      desc: "Illuminate Class of 2026 or milestone 21st, 30th, 50th celebrations with illuminated fairground numbers.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/751784173_18022976744853271_5268845485108318708_n_pilwcg.jpg",
      link: "/portfolio?category=number-stacks"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
              Imagine Your Celebration
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight">
              Inspiration Made Real
            </h2>
          </div>
          <p className="text-neutral-600 font-light text-sm sm:text-base max-w-md">
            No matter the occasion, we help you turn empty venues into warm, picture-perfect settings your guests will remember forever.
          </p>
        </div>

        {/* Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirations.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden border border-neutral-200/80 hover-lift flex flex-col justify-between"
            >
              {/* Photo Header */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-900 shadow-md">
                  {card.title}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-2">
                    {card.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* View Gallery Link */}
                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <Link
                    href={card.link}
                    className="text-xs font-semibold text-[#8162BB] group-hover:text-[#5C4092] flex items-center gap-1.5"
                  >
                    View Gallery <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={onOpenQuoteModal}
                    className="text-[11px] font-medium text-neutral-500 hover:text-neutral-900 underline"
                  >
                    Plan This Setup
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
