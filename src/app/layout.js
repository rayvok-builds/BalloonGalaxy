'use client';

import { useState } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import GsapProvider from '@/components/GsapProvider';

export default function RootLayout({ children }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

      </head>
      <body className="bg-[#FAF8F5] text-[#1A191D] antialiased">
        <GsapProvider>
          <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
          
          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          {/* Sticky Mobile Bar & Floating WhatsApp */}
          <StickyMobileBar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
          <FloatingWhatsApp />

          {/* Interactive Quote Builder Modal */}
          <QuoteBuilderModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
          />
        </GsapProvider>
      </body>
    </html>
  );
}
