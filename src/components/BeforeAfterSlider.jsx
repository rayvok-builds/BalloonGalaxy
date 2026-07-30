'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BEFORE_AFTER_ITEMS = [
  {
    id: 1,
    beforeImage: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785246337/before_tomoqi.png",
    afterImage: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785246322/after_p8pzey.jpg"
  },
  {
    id: 2,
    beforeImage: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785394325/0938aea5-b05a-45d9-b6b5-5c2c27508d3d_doohht.png",
    afterImage: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785394357/ba3_wsg2z1.webp"
  },
  {
    id: 3,
    beforeImage: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785394692/eb7f92c9-7596-4ee2-a88d-3ab57ff56ff0_zgazoo.png",
    afterImage: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1785394697/ba4_ivagu9.webp"
  }
];

function BeforeAfterCard({ item, index }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div className="bg-[#161520] rounded-3xl p-1 sm:p-1.5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-4 border-purple-900/40 backdrop-blur-md h-full flex flex-col">
      {/* Interactive Comparison Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative h-full w-full rounded-2xl overflow-hidden select-none cursor-ew-resize touch-none flex-1"
      >
        {/* After Image (Background - Full Width) */}
        <img
          src={item.afterImage}
          alt={`Finished Transformation ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-[#8162BB] text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg max-w-[42%] sm:max-w-none truncate whitespace-nowrap pointer-events-none transition-opacity duration-300 ${
            sliderPosition > 82 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          AFTER: Balloon Galaxy Touch
        </span>

        {/* Before Image (Clipped Foreground) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.beforeImage}
            alt="Before Venue Room"
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
          />
          <span
            className={`absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-neutral-900/85 text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md max-w-[42%] sm:max-w-none truncate whitespace-nowrap pointer-events-none transition-opacity duration-300 ${
              sliderPosition < 18 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            BEFORE: Plain Venue
          </span>
        </div>

        {/* Slider Handle Line */}
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-[#8162BB] text-white flex items-center justify-center shadow-xl border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <Sliders className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const sectionRef = useRef(null);
  const pinnedContainerRef = useRef(null);
  const cardsRef = useRef([]);

  const setCardRef = (el, idx) => {
    if (el) cardsRef.current[idx] = el;
  };

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    const cards = cardsRef.current;

    // Set initial GSAP positions
    // Card 1 is visible at yPercent: 0
    // Cards 2 & 3 start off-screen below (yPercent: 115)
    gsap.set(cards[0], { yPercent: 0, scale: 1, opacity: 1, pointerEvents: 'auto', transformOrigin: 'top center' });
    gsap.set(cards[1], { yPercent: 115, scale: 1, opacity: 1, pointerEvents: 'none', transformOrigin: 'top center' });
    gsap.set(cards[2], { yPercent: 115, scale: 1, opacity: 1, pointerEvents: 'none', transformOrigin: 'top center' });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // --- 0.0 -> 0.5: Hold Card 1 fully centered & visible alone ---

      // --- 0.5 -> 1.5: Card 2 comes UP to stack over Card 1 ---
      tl.to(cards[1], {
        yPercent: 0,
        ease: 'power1.inOut',
        duration: 1,
        onStart: () => {
          gsap.set(cards[1], { pointerEvents: 'auto' });
        },
        onReverseComplete: () => {
          gsap.set(cards[1], { pointerEvents: 'none' });
        }
      }, 0.5);

      tl.to(cards[0], {
        scale: 0.92,
        opacity: 0.6,
        y: -14,
        ease: 'power1.inOut',
        duration: 1
      }, 0.5);

      // --- 1.5 -> 2.0: Hold Card 2 fully visible ---

      // --- 2.0 -> 3.0: Card 3 comes UP to stack over Card 2 ---
      tl.to(cards[2], {
        yPercent: 0,
        ease: 'power1.inOut',
        duration: 1,
        onStart: () => {
          gsap.set(cards[2], { pointerEvents: 'auto' });
        },
        onReverseComplete: () => {
          gsap.set(cards[2], { pointerEvents: 'none' });
        }
      }, 2.0);

      tl.to(cards[1], {
        scale: 0.95,
        opacity: 0.7,
        y: -10,
        ease: 'power1.inOut',
        duration: 1
      }, 2.0);

      tl.to(cards[0], {
        scale: 0.85,
        opacity: 0.35,
        y: -24,
        ease: 'power1.inOut',
        duration: 1
      }, 2.0);

      // --- 3.0 -> 3.5: Hold Card 3 fully visible before unpinning ---

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0B0A0E] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Full-screen Pinned Container with Flex Center */}
      <div ref={pinnedContainerRef} className="min-h-screen h-screen flex flex-col justify-center items-center py-6 sm:py-10 px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-5xl mx-auto">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 shrink-0">
          <span className="inline-block border border-[#8162BB]/40 bg-[#F3EEF9]/10 text-[#8162BB] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2 sm:mb-3">
            Real Transformation Impact
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-2 sm:mb-3">
            See the Difference
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            From a simple blank venue wall to a stunning luxury balloon experience. Move the slider to reveal the transformation!
          </p>
        </div>

        {/* Stacked Cards Frame - Vertically Centered */}
        <div className="relative w-full max-w-4xl h-[370px] sm:h-[460px] lg:h-[490px] overflow-hidden rounded-3xl shrink-0">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => setCardRef(el, idx)}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 10 + idx }}
            >
              <BeforeAfterCard item={item} index={idx} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

