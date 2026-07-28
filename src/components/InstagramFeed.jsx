'use client';

import { useState, useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

function ReelCard({ reel }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkPositionAndPlay = () => {
      if (!containerRef.current || !videoRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowCenter = window.innerWidth / 2;
      const cardCenter = rect.left + rect.width / 2;
      const distanceFromCenter = Math.abs(windowCenter - cardCenter);

      // Card is visible AND close to the center of the viewport (only ~2 center cards play)
      const isCenterCard = rect.right > 0 && rect.left < window.innerWidth && distanceFromCenter < 280;

      if (isHovered || isCenterCard) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    const interval = setInterval(checkPositionAndPlay, 250);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <a
      ref={containerRef}
      href="https://www.instagram.com/balloon.galaxy/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group shrink-0 w-[230px] sm:w-[260px] md:w-[280px] aspect-[9/18.5] bg-[#16151E] rounded-[42px] border-[7px] sm:border-[8px] border-[#22202D] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-500 hover:scale-[1.03] cursor-pointer"
    >
      {/* Phone Dynamic Island / Camera Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1.5 shadow-md pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#111] border border-neutral-800" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a14]" />
      </div>

      {/* Pure Video Container - Clean Phone Screen */}
      <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={reel.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </a>
  );
}

export default function InstagramFeed() {
  const reels = [
    {
      id: 1,
      video: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1785247631/AQN8CD9NARIaTBPy7uWfgKowvBGOlDNTxEBs1-10cGvyXSjmx9Wo5d_LqSOgKbRgTkFquC3Q-7E-5NpwVN1PhAyjWI45jqp6_epjasd.mp4"
    },
    {
      id: 2,
      video: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1785247629/%EF%B8%8F_FAST_ONE_%EF%B8%8F_Fast_one_endless_memories_Our_Lightning_McQueen-inspired_setup_was_the_per_nr5zvx.mp4"
    },
    {
      id: 3,
      video: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1785247618/BABY_SHOWER_A_little_bundle_of_joy_is_on_the_way.We_had_the_pleasure_of_creating_this_dream_bn7jey.mp4"
    },
    {
      id: 4,
      video: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1785247582/GENDER_REVEAL_Neutral_elegant_and_timeless.A_beautiful_gender_reveal_setup_featuring_luxe_hfweih.mp4"
    },
    {
      id: 5,
      video: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1785247475/Wild_ONE_Celebrating_Keerat_s_first_birthday_with_this_gorgeous_Wild_One_setup_Such_a_love_dl14lc.mp4"
    }
  ];

  // Duplicated 3x for smooth infinite left marquee loop
  const marqueeItems = [...reels, ...reels, ...reels];

  return (
    <section className="py-24 bg-[#0B0A0E]  overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#8162BB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Watch Our Transformations Live
            </h2>
          </div>
          <a
            href="https://www.instagram.com/balloon.galaxy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8162BB] hover:bg-[#5C4092] text-white text-md md:text-lg font-semibold px-6 py-3.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer transition-all self-center md:self-auto hover:scale-105"
          >
            <Instagram className="w-6 h-6" />  @balloon.galaxy
          </a>
        </div>
      </div>

      {/* Marquee Track - Left Infinite Scroll */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B0A0E] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B0A0E] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-left flex gap-6 sm:gap-8 px-4">
          {marqueeItems.map((reel, idx) => (
            <ReelCard key={idx} reel={reel} />
          ))}
        </div>
      </div>

    </section>
  );
}
