'use client';

import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/galleryData';

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
              @balloon.galaxy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight">
              Follow Our Latest Creations
            </h2>
          </div>
          <a
            href="https://www.instagram.com/balloon.galaxy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8162BB] hover:bg-[#5C4092] text-white text-xs font-semibold px-6 py-3.5 rounded-full shadow-md transition-all self-center md:self-auto"
          >
            <Instagram className="w-4 h-4" /> Follow @balloon.galaxy
          </a>
        </div>

        {/* 12 Instagram Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {GALLERY_ITEMS.slice(0, 12).map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/balloon.galaxy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 shadow-sm border border-neutral-200/60"
            >
              <img
                src={post.url}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-xs font-semibold">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-white" /> {120 + idx * 34}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-white" /> {12 + idx * 3}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
