'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/447841696582?text=Hi%20Kam!%20I'm%20on%20your%20website%20and%20would%20love%20to%20chat%20about%20a%20balloon%20decor%20setup."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Kam"
      className="fixed bottom-20 right-5 lg:bottom-8 lg:right-8 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-900/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-3 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with Kam on WhatsApp 👋
      </span>
    </a>
  );
}
