'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/servicesData';
import { LOCATIONS_DATA } from '@/data/locationsData';
import { Phone, Sparkles, ChevronDown, Menu, X, Star } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const showSolidBg = isScrolled || !isHome || isMobileMenuOpen;

  const linkClass = showSolidBg
    ? 'text-neutral-200 hover:text-[#8162BB] transition-colors'
    : 'text-white/90 hover:text-white transition-colors';

  return (
    <header className={`top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHome ? 'fixed' : 'sticky'
    } ${
      showSolidBg
        ? 'bg-[#0B0A0E]/95 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-black/50'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-purple-900/40">
              <Image
                src="/logo.jpg"
                alt="Balloon Galaxy Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`block font-serif text-xl font-semibold tracking-tight transition-colors ${
              showSolidBg ? 'text-white group-hover:text-[#8162BB]' : 'text-white group-hover:text-purple-200'
            }`}>
              Balloon Galaxy
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={linkClass}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/services" className={`flex items-center gap-1 py-2 ${linkClass}`}>
                Services <ChevronDown className={`w-4 h-4 transition-colors ${showSolidBg ? 'text-neutral-400 group-hover:text-[#8162BB]' : 'text-white/70 group-hover:text-white'}`} />
              </Link>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-80 bg-[#121118]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-900/40 p-4 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8162BB] px-3 py-1 mb-1">
                    Event Styling Services
                  </div>
                  {SERVICES_DATA.slice(0, 8).map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="px-3 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:bg-[#231C32] hover:text-[#8162BB] transition-all flex items-center justify-between"
                    >
                      {svc.title}
                    </Link>
                  ))}
                  <Link href="/services" className="px-3 py-2 text-xs text-center font-bold text-[#8162BB] hover:underline mt-2 border-t border-purple-900/30 pt-2">
                    View All 15 Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('locations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/locations" className={`flex items-center gap-1 py-2 ${linkClass}`}>
                Locations <ChevronDown className={`w-4 h-4 transition-colors ${showSolidBg ? 'text-neutral-400 group-hover:text-[#8162BB]' : 'text-white/70 group-hover:text-white'}`} />
              </Link>

              {activeDropdown === 'locations' && (
                <div className="absolute top-full left-0 w-72 bg-[#121118]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-900/40 p-4 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8162BB] px-3 py-1 mb-1">
                    West Midlands Service Areas
                  </div>
                  {LOCATIONS_DATA.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="px-3 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:bg-[#231C32] hover:text-[#8162BB] transition-all"
                    >
                      {loc.cityName} Balloon Styling
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/portfolio" className={linkClass}>
              Portfolio
            </Link>
            
            <Link href="/about" className={linkClass}>
              About Kam & Sandeep
            </Link>

            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+447841696582"
              className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                showSolidBg
                  ? 'text-black bg-white border-purple-900/40 hover:border-[#8162BB] hover:text-[#8162BB] '
                  : 'text-black bg-white border-white/20 hover:border-white/50 hover:bg-white'
              }`}
            >
              <img src="/callIcon - Copy.gif" alt="Call" className="w-4 h-4 rounded-full object-contain" />
              Call Now
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 bg-[#8162BB] hover:bg-[#5C4092] text-white text-xs font-medium px-5 py-2.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get Your Free Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors cursor-pointer ${
              showSolidBg ? 'text-neutral-200 hover:text-[#8162BB]' : 'text-white hover:text-purple-200'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0A0E] border-b border-purple-900/30 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 py-2 border-b border-neutral-800"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 py-2 border-b border-neutral-800"
          >
            Services (15 Decor Options)
          </Link>
          <Link
            href="/locations"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 py-2 border-b border-neutral-800"
          >
            Locations (West Midlands)
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 py-2 border-b border-neutral-800"
          >
            Portfolio Gallery
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 py-2 border-b border-neutral-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 py-2"
          >
            Contact
          </Link>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#8162BB] text-white py-3 rounded-full font-medium text-sm flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer"
            >
              Get Your Free Quote
            </button>

            <a
              href="tel:+447841696582"
              className="w-full text-center py-2.5 rounded-full border border-white/20 text-sm font-bold text-black flex items-center justify-center gap-2 cursor-pointer bg-white hover:bg-neutral-100 transition-colors shadow-md"
            >
              <img src="/callIcon - Copy.gif" alt="Call" className="w-4 h-4 object-contain" /> Call +44 7841 696582
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
