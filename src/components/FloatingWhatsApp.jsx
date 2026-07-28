'use client';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/447841696582?text=Hi%20Kam!%20I'm%20on%20your%20website%20and%20would%20love%20to%20chat%20about%20a%20balloon%20decor%20setup."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Kam"
      className="fixed hidden md:block bottom-20 right-5 lg:bottom-8 lg:right-8 z-40 w-14 h-14 rounded-full  flex items-center justify-center shadow-2xl shadow-emerald-900/40 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
    >
      <img src="/whatsappicon - Copy.gif" alt="WhatsApp" className="w-12 h-12 object-contain rounded-full " />
      <span className="absolute right-full mr-3 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp 👋
      </span>
    </a>
  );
}
