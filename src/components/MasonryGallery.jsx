'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/data/galleryData';
import LightboxModal from './LightboxModal';
import { Sparkles, Maximize2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MasonryGallery({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);
  const [categoryStartIndex, setCategoryStartIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver for smooth card reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory || item.tags.includes(selectedCategory));

  // Category navigation: exactly 3 visible options at a time
  const visibleCategories = GALLERY_CATEGORIES.slice(categoryStartIndex, categoryStartIndex + 3);
  const canPrev = categoryStartIndex > 0;
  const canNext = categoryStartIndex < GALLERY_CATEGORIES.length - 3;

  const handlePrevCategory = () => {
    if (canPrev) setCategoryStartIndex(prev => prev - 1);
  };

  const handleNextCategory = () => {
    if (canNext) setCategoryStartIndex(prev => prev + 1);
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8162BB]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Full-width Screen Container */}
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs rounded-full border border-[#8162BB]/50 px-4 py-1.5 uppercase tracking-widest text-[#8162BB] font-semibold mb-3">
            Made to Be Remembered
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-2">
            Beautiful moments begin with beautiful designs. See what we've created.
          </h2>
        </div>

        {/* Category Filters Carousel (Only 3 Options Visible At A Time) */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {/* Previous Button */}
            <button
              onClick={handlePrevCategory}
              disabled={!canPrev}
              aria-label="Previous categories"
              className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                canPrev
                  ? 'bg-white border border-neutral-300 text-neutral-800 hover:bg-[#8162BB] hover:border-[#8162BB] hover:text-white shadow-sm cursor-pointer'
                  : 'bg-neutral-100 border border-neutral-200 text-neutral-400 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 3 Visible Category Options */}
            <div className="grid grid-cols-3 gap-2 flex-1 text-center">
              {visibleCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-300 truncate rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-[#8162BB] text-white shadow-md shadow-purple-900/20'
                      : 'bg-white text-neutral-700 hover:bg-[#F3EEF9] hover:text-[#8162BB] border border-neutral-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextCategory}
              disabled={!canNext}
              aria-label="Next categories"
              className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                canNext
                  ? 'bg-white border border-neutral-300 text-neutral-800 hover:bg-[#8162BB] hover:border-[#8162BB] hover:text-white shadow-sm cursor-pointer'
                  : 'bg-neutral-100 border border-neutral-200 text-neutral-400 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Category Range Indicator */}
          <div className="text-[11px] text-neutral-400 font-medium text-center mt-2 tracking-wider uppercase">
            Showing {categoryStartIndex + 1}-{categoryStartIndex + 3} of {GALLERY_CATEGORIES.length} Categories
          </div>
        </div>

        {/* Dynamic Full-Width Pinterest Masonry Layout with Sharp Corners & Smooth Staggered Reveal */}
        <div className="masonry-columns">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              style={{
                transitionDelay: `${(idx % 10) * 80}ms`,
              }}
              className={`masonry-item group relative  overflow-hidden bg-neutral-900 border border-neutral-200/50 cursor-pointer transition-all duration-700 ease-out rounded-lg ${
                isRevealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16 pointer-events-none'
              }`}
            >
              {/* Dynamic Image with Sharp Edges */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out "
                />

       
              </div>

            </div>
          ))}
        </div>

        {/* View All / CTA Footer */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-3 bg-[#8162BB] hover:bg-[#5C4092] text-white text-sm font-medium px-8 py-4 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer hover:scale-105 transition-all"
          >
            Request Custom Design Quote
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      )}
    </section>
  );
}

