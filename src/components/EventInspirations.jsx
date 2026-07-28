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
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/745152064_18021964016853271_2886719108912963478_n_xavocn.jpg",
      link: "/portfolio?category=weddings"
    },
    {
      title: "Corporate Launch",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/746285169_18021678161853271_5030388314847864711_n_mejna5.jpg",
      link: "/portfolio?category=corporate"
    },
    {
      title: "Bridal Shower",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/736420557_18021118742853271_5705423997968146030_n_a1uwor.jpg",
      link: "/portfolio?category=weddings"
    },
    {
      title: "Graduation & Milestones",
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
            <Link
              key={idx}
              href={card.link}
              className="group block relative bg-[#FAF8F5] rounded-3xl overflow-hidden border border-neutral-200/80 hover-lift transition-all duration-300"
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
                <h3 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-[#8162BB] transition-colors duration-300">
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
