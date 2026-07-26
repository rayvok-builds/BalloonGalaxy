'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/data/galleryData';
import LightboxModal from './LightboxModal';
import { Sparkles, Maximize2, MapPin, ArrowRight } from 'lucide-react';

export default function MasonryGallery({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory || item.tags.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8162BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs rounded-full border border-[#8162BB]/50 px-4 py-2 uppercase tracking-widest text-[#8162BB] font-semibold  mb-3">
            Made to Be Remembered
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
          Beautiful moments begin with beautiful designs. See what we've created.
          </h2>
        
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#8162BB] text-white shadow-md shadow-purple-900/20 scale-105'
                  : 'bg-white text-neutral-700 hover:bg-[#F3EEF9] hover:text-[#8162BB] border border-neutral-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Pinterest Masonry Layout */}
        <div className="masonry-columns gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="masonry-item group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-neutral-200/60 cursor-pointer hover-lift"
            >
              {/* Dynamic Image with Native Aspect Ratio */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  
                  {/* Top Right Zoom Icon */}
                  <div className="self-end w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Details */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#D4AF37] block mb-1">
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-serif text-lg font-semibold leading-tight text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-neutral-300 font-light">
                      <MapPin className="w-3 h-3 text-[#8162BB]" /> {item.location}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All / CTA Footer */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-3 bg-[#8162BB] hover:bg-[#5C4092] text-white text-sm font-medium px-8 py-4 rounded-full shadow-xl shadow-purple-900/20 hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
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
