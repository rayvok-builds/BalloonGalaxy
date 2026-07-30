'use client';

const ROW_1_IMAGES = [
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785387119/2918bc41-768f-41a0-bc19-0e862eef4e66.png",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978897/753225062_18023418170853271_2517762698763169016_n_vl1moo.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/745152064_18021964016853271_2886719108912963478_n_xavocn.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/753092380_18023160485853271_7024676582473989644_n_rhmif2.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/751784173_18022976744853271_5268845485108318708_n_pilwcg.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978896/746285169_18021678161853271_5030388314847864711_n_mejna5.jpg"
];

const ROW_2_IMAGES = [
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978895/742929880_18021362003853271_6786502757536564344_n_ar9bvr.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978895/491466463_17971303763853271_1028522542787474171_n_ro5eab.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/751713272_18022859771853271_5163289055223755411_n_yd7cwm.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/749270469_18022504205853271_4959650509017087581_n_holdku.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/736420557_18021118742853271_5705423997968146030_n_a1uwor.jpg",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978894/741481635_18020887268853271_3698939570006077006_n_p6mu0q.jpg"
];

const ROW_3_IMAGES = [
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785386657/0af044c6-bc94-4d09-869a-b9d305f7b538.png",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785386790/da69048d-9e65-4c81-9ad4-930372a7cbac.png",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785387283/1f9de278-400b-4bf3-a2a2-ae2d594962ed.png",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785387385/752efbba-baa5-4346-bd90-58c3390741d9.png",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785387428/4c35399c-aaa2-42a6-9aba-98572bc00166.png",
  "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785392608/79167c42-9809-4e56-a330-81b2599bdf49.png"
];

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0A0E] text-white relative overflow-hidden">
      
      {/* Dynamic Keyframes for Continuous Marquee */}
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 40s linear infinite;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-[#12111A] rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative min-h-[540px] sm:min-h-[600px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
          
          {/* Top Marquee Background Vault */}
          <div className="absolute inset-0 top-0 overflow-hidden flex flex-col gap-4 sm:gap-6 pt-4 pointer-events-none">
            
            {/* Row 1: Marquee Moving LEFT */}
            <div className="overflow-hidden">
              <div className="animate-marquee-left gap-4 sm:gap-6">
                {[...ROW_1_IMAGES, ...ROW_1_IMAGES].map((imgUrl, i) => (
                  <div key={i} className="w-[180px] sm:w-[240px] md:w-[280px] h-[110px] sm:h-[140px] md:h-[160px] rounded-2xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 bg-neutral-900">
                    <img src={imgUrl} alt="Gallery Installation" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 (Middle): Marquee Moving RIGHT */}
            <div className="overflow-hidden">
              <div className="animate-marquee-right gap-4 sm:gap-6">
                {[...ROW_2_IMAGES, ...ROW_2_IMAGES].map((imgUrl, i) => (
                  <div key={i} className="w-[180px] sm:w-[240px] md:w-[280px] h-[110px] sm:h-[140px] md:h-[160px] rounded-2xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 bg-neutral-900">
                    <img src={imgUrl} alt="Gallery Installation" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Marquee Moving LEFT */}
            <div className="overflow-hidden">
              <div className="animate-marquee-left gap-4 sm:gap-6">
                {[...ROW_3_IMAGES, ...ROW_3_IMAGES].map((imgUrl, i) => (
                  <div key={i} className="w-[180px] sm:w-[240px] md:w-[280px] h-[110px] sm:h-[140px] md:h-[160px] rounded-2xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 bg-neutral-900">
                    <img src={imgUrl} alt="Gallery Installation" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Dark Overlay Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-50% to-transparent pointer-events-none z-10" />

          {/* Bottom Content Area */}
          <div className="relative z-20 text-center max-w-3xl mx-auto pt-24 sm:pt-32">
            
            {/* Main Headline ONLY */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-8 tracking-tight">
              Your Perfect Celebration <span className="italic font-subserif text-[#8162BB]">Starts Here</span>
            </h2>

            {/* Single White CTA Button with Call Gif */}
            <div className="flex justify-center">
              <a
                href="tel:+447841696582"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-black font-semibold text-base sm:text-lg px-10 py-4.5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              >
                <img src="/callIcon - Copy.gif" alt="Call" className="w-6 h-6 object-contain" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
