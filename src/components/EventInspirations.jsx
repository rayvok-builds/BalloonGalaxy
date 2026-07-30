'use client';

import Link from 'next/link';

export default function EventInspirations() {
  const inspirations = [
    {
      title: "First Birthday",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/751713272_18022859771853271_5163289055223755411_n_yd7cwm.jpg",
      link: "/portfolio?category=birthdays"
    },
    {
      title: "Baby Shower",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/753092380_18023160485853271_7024676582473989644_n_rhmif2.jpg",
      link: "/portfolio?category=baby-showers"
    },
    {
      title: "Wedding Entrance",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/736420557_18021118742853271_5705423997968146030_n_a1uwor.jpg",
      link: "/portfolio?category=weddings"
    },
    {
      title: "Corporate Launch",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785392608/79167c42-9809-4e56-a330-81b2599bdf49.png",
      link: "/portfolio?category=corporate"
    },
    {
      title: "Bridal Shower",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785392188/Screenshot_20260730_113435_Instagram_pwexas.jpg",
      link: "/portfolio?category=weddings"
    },
    {
      title: "Sequin Wall",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785392185/Screenshot_20260730_113852_Instagram_qecvid.jpg",
      link: "/portfolio?category=number-stacks"
    }
  ];

  return (
    <section className="py-24 bg-[#0B0A0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block border border-[#8162BB]/40 bg-[#F3EEF9]/10 text-[#8162BB] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Imagine Your Celebration
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Inspiration Made Real
            </h2>
          </div>
          <p className="text-neutral-400 font-light text-sm sm:text-base max-w-md">
            No matter the occasion, we help you turn empty venues into warm, picture-perfect settings your guests will remember forever.
          </p>
        </div>

        {/* Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirations.map((card, idx) => (
            <Link
              key={idx}
              href={card.link}
              className="group block relative bg-[#121118] rounded-3xl overflow-hidden border border-purple-900/30 hover-lift transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Title */}
              <div className="p-5 sm:p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[#8162BB] transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
