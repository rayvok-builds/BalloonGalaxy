'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/servicesData';
import { LOCATIONS_DATA } from '@/data/locationsData';
import { Phone, Mail, Instagram, MapPin, Star, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-20 pb-28 sm:pb-20 border-t border-neutral-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Balloon Galaxy Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-semibold text-white">
                Balloon Galaxy
              </span>
            </Link>

            <p className="text-neutral-400 font-light text-xs leading-relaxed max-w-sm">
              Beautiful Balloon Styling for Birthdays, Weddings, Baby Showers, Corporate Events & Every Special Occasion across Birmingham, Coventry and the West Midlands.
            </p>

            {/* Google Reviews Badge */}
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3.5 py-2 rounded-full text-xs text-white">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="font-semibold">5.0 Rating • 143+ Google Reviews</span>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <img src="/callIcon - Copy.gif" alt="Call" className="w-4 h-4 object-contain" />
                <a href="tel:+447841696582" className="hover:text-white cursor-pointer">+44 7841 696582</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#8162BB]" />
                <a href="https://www.instagram.com/balloon.galaxy/" target="_blank" rel="noopener noreferrer" className="hover:text-white">@balloon.galaxy</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8162BB]" />
                <span>Birmingham & Coventry, West Midlands</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Kam & Sandeep</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Pinterest Gallery</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services Overview</Link></li>
              <li><Link href="/quote-builder" className="hover:text-white transition-colors">Build Your Event Quote</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Guide</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services (SEO) */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Event Styling Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 7).map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`} className="hover:text-white transition-colors">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Pages (SEO) */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              West Midlands Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="hover:text-white transition-colors">
                    {loc.cityName} Balloon Styling
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Balloon Galaxy. Founded in 2022 by Kam. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-300">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#8162BB] hover:underline font-semibold"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
