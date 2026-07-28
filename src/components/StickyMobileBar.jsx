'use client';

export default function StickyMobileBar({ onOpenQuoteModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-200 px-3 py-2.5 shadow-2xl animate-in slide-in-from-bottom-2">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto text-center">
        
        {/* Call Button */}
        <a
          href="tel:+447841696582"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-all active:scale-95 cursor-pointer"
        >
          <img src="/callIcon - Copy.gif" alt="Call" className="w-5 h-5 mb-0.5 object-contain" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/447841696582?text=Hi%20Kam!%20I'd%20like%20to%20enquire%20about%20a%20balloon%20decor%20setup."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-emerald-500 text-white transition-all active:scale-95 shadow-sm cursor-pointer"
        >
          <img src="/whatsappicon - Copy.gif" alt="WhatsApp" className="w-6 h-6 mb-0.5 rounded-full object-contain" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Quote Button */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#8162BB] text-white transition-all active:scale-95 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer"
        >
          <span className="text-[11px] font-bold">Quote</span>
        </button>

      </div>
    </div>
  );
}
