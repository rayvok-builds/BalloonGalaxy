'use client';

import { Sparkles, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';

export default function MeetTheTeam() {
  return (
    <section className="py-24 bg-[#0B0A0E] text-white relative overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Our Story & Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            About Balloon Galaxy
          </h2>
          <p className="text-neutral-400 text-base font-light max-w-2xl mx-auto">
            A family-founded luxury balloon styling studio born out of passion, financial precision, and an obsession with perfection.
          </p>
        </div>

        {/* Premium Single-Box Editorial Card */}
        <div className="bg-[#14131F] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Top Accent Gradient Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Side: Featured Showcase Image & Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px] sm:h-[480px] group border border-white/10">
                <img
                  src="https://res.cloudinary.com/dokrpo5fl/image/upload/v1785431481/balloongalxy-logo_mrxcvi.jpg"
                  alt="Balloon Galaxy Installation"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Excellence Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/75 backdrop-blur-md rounded-xl p-4 border border-white/15 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                      <img src="https://res.cloudinary.com/dokrpo5fl/image/upload/v1785431654/print-creative-modern-color-full-logo-design_1271730-562_bdijek.avif" alt="google logo" className='rounded-lg' />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold leading-tight">143+ 5-Star Google Reviews</h4>
                      <p className="text-xs text-neutral-400 font-light">West Midlands' Premier Event Stylists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Company Story & Founders Signature */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-medium mb-6 leading-tight">
                  Where Financial Precision Meets Creative Artistry
                </h3>

                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Founded in October 2022 by <span className="text-white font-semibold">Kam</span>, a qualified corporate accountant who made the bold decision to leave corporate finance to follow her artistic passion for balloon styling and spend more quality time with her family.
                </p>

                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                  Partnered with <span className="text-white font-semibold">Sandeep</span>—the master behind prop painting, structural engineering, and event logistics—Balloon Galaxy brings a level of financial-grade accuracy, custom color matching, and punctuality that sets a new standard for luxury event decor.
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#1B1A28] rounded-xl p-4 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mb-2" />
                    <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Double-Stuffed</h4>
                    <p className="text-xs text-neutral-400 font-light">Rich matte opacity & true custom colors.</p>
                  </div>
                  <div className="bg-[#1B1A28] rounded-xl p-4 border border-white/5">
                    <ShieldCheck className="w-5 h-5 text-purple-400 mb-2" />
                    <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Accountant Precision</h4>
                    <p className="text-xs text-neutral-400 font-light">Punctual setup & transparent pricing.</p>
                  </div>
                  <div className="bg-[#1B1A28] rounded-xl p-4 border border-white/5">
                    <Heart className="w-5 h-5 text-purple-400 mb-2" />
                    <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Full-Service Care</h4>
                    <p className="text-xs text-neutral-400 font-light">From concept to post-party cleanup.</p>
                  </div>
                </div>

              </div>

              {/* Founders Signature Block */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif italic text-sm text-neutral-300 mb-1">
                    "Our promise is simple: to make your event look extraordinary so you can cherish every moment with your guests."
                  </p>
                  <span className="text-xs text-purple-400 font-semibold tracking-wider uppercase">
                    — Kam & Sandeep, Founders & Lead Stylists
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
