'use client';

import { CheckCircle2, Sparkles, Award } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const points = [
    {
      title: "Custom Designed For Every Event",
      desc: "No copied designs. Every setup is custom-made to match your personal style, event theme, or corporate brand hex code.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978899/747207900_18022285613853271_6768489452173827855_n_qwv9zy.jpg",
      reverse: false
    },
    {
      title: "Luxury Quality Double-Stuffed Balloons",
      desc: "We exclusively use professional, double-stuffed balloons to achieve rich matte opacity, zero translucency, and colors that stay fresh throughout your event.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978897/753225062_18023418170853271_2517762698763169016_n_vl1moo.jpg",
      reverse: true
    },
    {
      title: "Accountant-Level Attention to Detail",
      desc: "Founded by Kam (a former qualified accountant), Balloon Galaxy approaches every setup with extreme precision, flawless prop prep by Sandeep, and prompt communication.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/745152064_18021964016853271_2886719108912963478_n_xavocn.jpg",
      reverse: false
    },
    {
      title: "Professional Stress-Free Setup & Breakdown",
      desc: "We deliver, inflate, install, and position everything before your guests arrive—and return post-event to safely collect props so you don't lift a finger.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/753092380_18023160485853271_7024676582473989644_n_rhmif2.jpg",
      reverse: true
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
            Why People Choose Balloon Galaxy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
            Uncompromising Luxury & Care
          </h2>
          <p className="text-neutral-600 text-base font-light">
            We care about every single detail, so you can relax and enjoy your special day without the stress.
          </p>
        </div>

        {/* Alternating Editorial Sections */}
        <div className="space-y-24">
          {points.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
            >
              {/* Large Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEF9] text-[#8162BB] text-xs font-semibold mb-4">
                  <Award className="w-3.5 h-3.5" /> Key Advantage 0{idx + 1}
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-normal text-neutral-900 leading-snug mb-4">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-base font-light leading-relaxed mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 mb-8 text-sm text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8162BB]" />
                    <span>Personalized service managed directly by Kam</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8162BB]" />
                    <span>Prop painting and perfection by Sandeep</span>
                  </li>
                </ul>

                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center justify-center bg-[#8162BB] hover:bg-[#5C4092] text-white text-xs font-medium px-6 py-3 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer transition-all"
                >
                  Start My Booking
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
