'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, PartyPopper } from 'lucide-react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Inflating Elegance...');
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const balloonsRef = useRef(null);

  // Status phrases during loading
  useEffect(() => {
    const texts = [
      'Inflating Elegance...',
      'Styling Luxury Displays...',
      'Adding Cosmic Glow...',
      'Welcome to Balloon Galaxy'
    ];
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 550);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    // Lock body scrolling during preloader
    document.body.style.overflow = 'hidden';

    // Progress counter animation
    const progressObj = { value: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        triggerRevealAnimation();
      }
    });

    tl.to(progressObj, {
      value: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(progressObj.value));
      }
    });

    function triggerRevealAnimation() {
      const exitTl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
          document.body.style.overflow = 'auto';
        }
      });

      // 1. Content scale & fade out
      exitTl.to(contentRef.current, {
        opacity: 0,
        y: -40,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.in'
      });

      // 2. Balloons accelerate upwards into sky
      if (balloonsRef.current) {
        exitTl.to(balloonsRef.current.children, {
          y: '-120vh',
          duration: 0.7,
          stagger: 0.05,
          ease: 'power3.in'
        }, '-=0.2');
      }

      // 3. Main Preloader Overlay Curtain Reveal (Bottom-to-Top wipe)
      exitTl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut'
      }, '-=0.5');
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (isFinished) return null;

  // Balloon color configurations for variety
  const balloons = [
    { id: 1, color1: '#8162BB', color2: '#5C4092', left: '8%', size: 90, speed: '4.2s', delay: '0s' },
    { id: 2, color1: '#D4AF37', color2: '#9A7B1C', left: '22%', size: 110, speed: '3.8s', delay: '0.4s' },
    { id: 3, color1: '#EC4899', color2: '#BE185D', left: '38%', size: 80, speed: '4.5s', delay: '0.2s' },
    { id: 4, color1: '#8162BB', color2: '#3B0764', left: '55%', size: 120, speed: '3.6s', delay: '0.6s' },
    { id: 5, color1: '#F4E8C1', color2: '#D4AF37', left: '72%', size: 95, speed: '4.1s', delay: '0.1s' },
    { id: 6, color1: '#A855F7', color2: '#6B21A8', left: '86%', size: 105, speed: '3.9s', delay: '0.5s' }
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0B0A0E] text-white overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8162BB]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Sparkle Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200 animate-sparkle-glow"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 95}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Balloons (Bottom-to-Top Floating Visual Effect) */}
      <div ref={balloonsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {balloons.map((b) => (
          <div
            key={b.id}
            className="absolute bottom-0 animate-balloon-sway"
            style={{
              left: b.left,
              animation: `balloonFloatUp ${b.speed} ease-in-out infinite ${b.delay}`
            }}
          >
            <svg
              width={b.size}
              height={b.size * 1.3}
              viewBox="0 0 100 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
            >
              <defs>
                <radialGradient id={`balloon-grad-${b.id}`} cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                  <stop offset="25%" stopColor={b.color1} />
                  <stop offset="100%" stopColor={b.color2} />
                </radialGradient>
              </defs>
              
              {/* String */}
              <path
                d="M50 100 Q48 115 52 125 T49 135"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Main Balloon Body */}
              <path
                d="M50 5 C22 5 5 25 5 52 C5 75 32 95 47 98 L50 100 L53 98 C68 95 95 75 95 52 C95 25 78 5 50 5 Z"
                fill={`url(#balloon-grad-${b.id})`}
              />

              {/* Specular Gloss Reflection */}
              <ellipse
                cx="32"
                cy="28"
                rx="10"
                ry="18"
                transform="rotate(-28 32 28)"
                fill="#FFFFFF"
                fillOpacity="0.45"
              />
              
              {/* Balloon Knot */}
              <polygon points="46,98 54,98 52,103 48,103" fill={b.color2} />
            </svg>
          </div>
        ))}
      </div>

      {/* Main Center Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center text-center px-4">
  

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-instrument italic tracking-wide text-white mb-2">
          Balloon Galaxy
        </h1>
      

        {/* Percentage Counter */}
        <div className="relative mb-6">
          <span className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F4E8C1] to-[#D4AF37]">
            {progress}
          </span>
          <span className="text-2xl md:text-3xl font-light text-[#D4AF37] ml-1">%</span>
        </div>

        {/* Custom Progress Bar */}
        <div className="w-64 md:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden mb-4 p-0.5 border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#8162BB] via-[#D4AF37] to-[#EC4899] rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(212,175,55,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Animated Loading Status Text */}
        <p className="text-xs tracking-widest uppercase text-gray-400 h-5 transition-all duration-300">
          {loadingText}
        </p>
      </div>

      {/* Subtle bottom indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
          Entering Experience ↑
        </span>
      </div>
    </div>
  );
}
