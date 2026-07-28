'use client';

import { useState } from 'react';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import { Phone, Mail, Instagram, MapPin, Star, Send, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-neutral-900 leading-tight mb-4">
            Contact Balloon Galaxy
          </h1>
          <p className="text-neutral-600 text-base font-light">
            Kam & Sandeep are here to help turn your event vision into reality. Reach out via phone, WhatsApp, or message form below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Info Side */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl space-y-8">
            <h2 className="font-serif text-2xl font-semibold text-neutral-900">
              Direct Contact Details
            </h2>

            <div className="space-y-6">
              <a
                href="tel:+447841696582"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#8162BB] transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#8162BB] text-white flex items-center justify-center shrink-0">
                  <img src="/callIcon - Copy.gif" alt="Call" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-semibold uppercase">Phone / Call</div>
                  <div className="text-base font-bold text-neutral-900">+44 7841 696582</div>
                  <div className="text-xs text-neutral-500">Mon-Sun 9am - 7pm</div>
                </div>
              </a>

              <a
                href="https://wa.me/447841696582"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-500 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <img src="/whatsappicon - Copy.gif" alt="WhatsApp" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-semibold uppercase">WhatsApp Chat</div>
                  <div className="text-base font-bold text-emerald-950">Chat directly with Kam</div>
                  <div className="text-xs text-emerald-700">Instant response during business hours</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/balloon.galaxy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#8162BB] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-semibold uppercase">Instagram DMs</div>
                  <div className="text-base font-bold text-neutral-900">@balloon.galaxy</div>
                  <div className="text-xs text-neutral-500">4.5k+ Followers • Daily Setup Stories</div>
                </div>
              </a>
            </div>

            {/* Google Reviews Badge */}
            <div className="p-6 rounded-2xl bg-[#F3EEF9] border border-[#8162BB]/20 flex items-center justify-between">
              <div>
                <div className="flex text-[#D4AF37] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <div className="text-sm font-bold text-neutral-900">5.0 Star Rated Decorator</div>
                <div className="text-xs text-neutral-600">143+ Verified Google Reviews</div>
              </div>
              <a
                href="https://www.google.com/search?q=Balloon+Galaxy+Birmingham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#8162BB] hover:underline"
              >
                Read Reviews →
              </a>
            </div>

          </div>

          {/* Contact Form Side */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl">
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-2">
              Send Kam & Sandeep a Message
            </h2>
            <p className="text-xs text-neutral-500 mb-6">
              Fill out the form below and Kam will respond within 2-4 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="07841 696582"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Event Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none">
                      <option>Birthday Party</option>
                      <option>Baby Shower</option>
                      <option>Wedding / Bridal</option>
                      <option>Corporate Gala</option>
                      <option>Gender Reveal</option>
                      <option>Christening</option>
                      <option>Other Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Event Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Message / Setup Ideas</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your venue location and balloon decor ideas..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8162BB] hover:bg-[#5C4092] text-white py-4 rounded-xl font-bold text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer flex items-center justify-center"
                >
                  Send Message To Kam
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Message Received!</h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                  Kam will review your message and reply shortly. For immediate urgent queries, feel free to call us directly on 07841 696582.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

      <FinalCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
