'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Sparkles, MapPin, Heart, Share2, Phone, Calendar } from 'lucide-react';

export default function LightboxModal({ item, onClose, onOpenQuoteModal }) {
  const [liked, setLiked] = useState(false);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Side (Instagram Fullscreen Style) */}
        <div className="md:w-3/5 bg-black relative flex items-center justify-center p-4 min-h-[350px] md:min-h-[550px]">
          <img
            src={item.url}
            alt={item.title}
            className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Info & Engagement Side */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-neutral-900 text-white">
          <div>
            {/* Tag Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#8162BB]/20 text-[#C4B8DC] border border-[#8162BB]/30">
                {item.category.replace('-', ' ')}
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8162BB]" /> {item.location}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-semibold mb-3 text-white">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Tags list */}
            <div className="flex flex-wrap gap-2 mb-8">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-xs text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded-lg">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-4 border-t border-neutral-800 pt-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                  liked 
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' 
                    : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
                {liked ? 'Saved to Favorites' : 'Save Design'}
              </button>

              <a
                href={`https://wa.me/447841696582?text=${encodeURIComponent(`Hi Kam! I love this setup: "${item.title}". Can I get a quote for a similar installation?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8162BB] hover:underline flex items-center gap-1"
              >
                <Share2 className="w-3.5 h-3.5" /> Share on WhatsApp
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="w-full bg-[#8162BB] hover:bg-[#5C4092] text-white py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer hover:scale-[1.02] transition-all"
            >
              Request Quote For This Style
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
