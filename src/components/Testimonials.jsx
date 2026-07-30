'use client';

import { useState, useEffect } from 'react';
import { FEATURED_REVIEWS, GRID_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '@/data/reviewsData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ExternalLink } from 'lucide-react';

const AVATAR_GRADIENTS = [
  'from-purple-600 via-indigo-600 to-purple-700',
  'from-pink-600 via-rose-500 to-purple-600',
  'from-amber-500 via-orange-600 to-amber-600',
  'from-[#8162BB] via-purple-600 to-indigo-700',
  'from-emerald-500 via-teal-600 to-cyan-600',
  'from-cyan-500 via-blue-600 to-indigo-600',
  'from-violet-600 via-fuchsia-600 to-pink-600',
  'from-rose-500 via-purple-600 to-indigo-600',
  'from-indigo-500 via-cyan-600 to-blue-700',
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const featured = FEATURED_REVIEWS[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FEATURED_REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + FEATURED_REVIEWS.length) % FEATURED_REVIEWS.length);
  };

  // Reset expansion state when slide changes
  useEffect(() => {
    setIsExpanded(false);
  }, [currentIndex]);

  // Auto-play carousel for Design 1
  useEffect(() => {
    if (!isAutoPlaying || isExpanded) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, isExpanded]);

  return (
    <section className="py-20 bg-[#0C0B10] text-white relative overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge & Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md shadow-lg shadow-purple-900/10">
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: '8s' }} /> 
            <span>{GOOGLE_REVIEWS_SUMMARY.badgeText}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            Kind Words From Happy Clients
          </h2>
          <p className="text-neutral-400 text-base font-light max-w-2xl mx-auto">
            Discover how Balloon Galaxy brings dream celebrations to life across the West Midlands.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESIGN 1: Featured Testimonial Hero Slider (First Screenshot Design)      */}
        {/* ========================================================================= */}
        <div 
          className="mb-24"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/20 text-slate-900 relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Fixed Height Decor Image */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl h-[340px] sm:h-[400px] lg:h-[440px] bg-neutral-100 shadow-lg">
                <img
                  key={featured.decoreImage}
                  src={featured.decoreImage}
                  alt={featured.name}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Uniform Height Review Details & Controls */}
              <div className="lg:col-span-7 flex flex-col justify-between h-auto lg:h-[440px] py-1 px-1 sm:px-3">
                
                <div className="flex flex-col justify-between flex-1">
                  
                  {/* 1. Feedback Text Box with Hidden Scrollbar & More functionality */}
                  <div className="h-[190px] sm:h-[210px] flex flex-col justify-start overflow-hidden relative">
                    <div 
                      className={`text-slate-800 text-base sm:text-lg font-medium leading-relaxed font-sans ${
                        isExpanded 
                          ? 'max-h-[200px] overflow-y-auto pr-2' 
                          : 'overflow-hidden'
                      }`}
                      style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none' 
                      }}
                    >
                      <span className="whitespace-pre-line select-text">
                        "{isExpanded || featured.feedback.length <= 210 
                          ? featured.feedback 
                          : featured.feedback.slice(0, 200) + '...'}"
                      </span>
                      {featured.feedback.length > 210 && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="text-[#8162BB] font-bold hover:text-purple-900 text-sm ml-2 inline-block underline focus:outline-none cursor-pointer"
                        >
                          {isExpanded ? 'Less' : 'More'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* 2. BIG & ANIMATED 5 STARS (Below Feedback, Above Name) */}
                  <div className="flex items-center gap-1.5 my-3">
                    <div className="flex items-center gap-1">
                      {[...Array(featured.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-6 h-6 sm:w-7 sm:h-7 fill-[#F59E0B] text-[#F59E0B] drop-shadow-[0_0_10px_rgba(245,158,11,0.6)] transition-transform duration-300 hover:scale-125 animate-pulse"
                          style={{ animationDelay: `${i * 180}ms`, animationDuration: '3s' }}
                        />
                      ))}
                    </div>
                    <span className="ml-2.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300/80 shadow-sm uppercase tracking-wider">
                      5.0 Rating
                    </span>
                  </div>

                  {/* 3. Creative Author Badge & Name ONLY */}
                  <div className="flex items-center gap-3.5 mb-2">
                    {featured.personImage ? (
                      <img
                        src={featured.personImage}
                        alt={featured.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-400 shadow-md ring-4 ring-purple-500/10"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-700 via-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-base shadow-md ring-4 ring-purple-500/15 tracking-wider">
                        {featured.personText || featured.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-slate-900 text-base sm:text-xl leading-none tracking-tight">
                        {featured.name}
                      </h4>
                    </div>
                  </div>

                </div>

                {/* 4. Bottom Navigation Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  
                  {/* Indicator Pills */}
                  <div className="flex items-center gap-2">
                    {FEATURED_REVIEWS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          idx === currentIndex
                            ? 'w-9 h-2.5 bg-purple-700 shadow-sm'
                            : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Creative Circular Navigation Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      className="w-11 h-11 rounded-full bg-slate-800 hover:bg-purple-900 text-white flex items-center justify-center transition-all shadow-md hover:shadow-purple-900/40 active:scale-95 cursor-pointer border border-slate-700 hover:border-purple-500/50"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-11 h-11 rounded-full bg-slate-800 hover:bg-purple-900 text-white flex items-center justify-center transition-all shadow-md hover:shadow-purple-900/40 active:scale-95 cursor-pointer border border-slate-700 hover:border-purple-500/50"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESIGN 2: Masonry Layout Dark Testimonial Cards (Second Screenshot)       */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-serif text-white/90">
              More Client Experiences
            </h3>
            <div className="w-12 h-0.5 bg-purple-500/40 mx-auto mt-2 rounded-full" />
          </div>

          {/* Staggered Masonry Layout using CSS Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 sm:gap-6 space-y-5 sm:space-y-6">
            {GRID_REVIEWS.map((rev, idx) => {
              const gradientClass = AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length];

              return (
                <div
                  key={rev.id}
                  className="break-inside-avoid bg-[#171622] rounded-2xl p-6 border border-white/5 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-900/20"
                >
                  <div>
                    {/* Top Quote Icon */}
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                      <Quote className="w-4 h-4 fill-purple-300/30 text-purple-300" />
                    </div>

                    {/* Review Text */}
                    <p className="text-neutral-200 text-sm font-light leading-relaxed mb-5 font-sans">
                      {rev.feedback}
                    </p>
                  </div>

                  <div>
                    {/* 5 Stars Rating Above Name */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(rev.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B] drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                      ))}
                    </div>

                    {/* Author Information */}
                    <div className="flex items-center gap-3 pt-3.5 border-t border-white/5">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${gradientClass} flex items-center justify-center text-white font-bold text-xs shadow-md flex-shrink-0 ring-2 ring-white/10 tracking-wider`}>
                        {rev.personText}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-white text-sm truncate">
                          {rev.name}
                        </h4>
                        <p className="text-xs text-neutral-400 font-light truncate">
                          {rev.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* See More Reviews Button */}
          <div className="mt-14 text-center">
            <a
              href="https://www.google.com/search?q=balloon.galaxy+birmingham+uk&rlz=1C1ONGR_enIN1185IN1185&oq=balloon+gala&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyBggCECMYJzIHCAMQABiABDILCAQQABgKGAsYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg2Njg1ajBqN6gCCLACAfEFtMnNcCpD-1U&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x8a696f3d7324eee9:0x71c115e9407d59de,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white font-semibold text-sm sm:text-base shadow-xl shadow-purple-900/30 hover:shadow-purple-900/60 hover:-translate-y-1 transition-all duration-300 border border-purple-400/30 group cursor-pointer"
            >
              <span>See More Reviews on Google</span>

            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
