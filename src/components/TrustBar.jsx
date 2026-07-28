'use client';

import { useState, useEffect, useRef } from 'react';

function CountUpNumber({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quadratic animation
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {hasAnimated ? count : 0}{suffix}
    </span>
  );
}

export default function TrustBar() {
  const stats = [
    {
      value: 143,
      suffix: '+',
      label: '5-Star Google Reviews',
    },
    {
      value: 5,
      suffix: '',
      label: 'Years in Business',
    },
    {
      value: 200,
      suffix: '+',
      label: 'Events Styled',
    },
    {
      value: 6,
      suffix: '+',
      label: 'West Midlands Locations',
    },
  ];

  return (
    <section className="bg-[#121118] border-y border-purple-900/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-medium max-w-[180px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

