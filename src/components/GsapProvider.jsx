'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function GsapProvider({ children }) {
  useEffect(() => {
    // Basic GSAP fade-in observer for elements with .gsap-fade
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gsap-fade').forEach((el) => {
      gsap.set(el, { opacity: 0, y: 30 });
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
