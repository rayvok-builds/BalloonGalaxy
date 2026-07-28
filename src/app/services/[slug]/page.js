'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import FinalCTA from '@/components/FinalCTA';
import QuoteBuilderModal from '@/components/QuoteBuilderModal';
import { CheckCircle2, Sparkles, HelpCircle, Star, ArrowLeft, Phone } from 'lucide-react';

export default function ServiceDetailPage({ params }) {
  const resolvedParams = use(params);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const service = SERVICES_DATA.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 bg-[#0B0A0E]">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-[#8162BB] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#121118] rounded-3xl p-8 sm:p-12 border border-purple-900/30 shadow-2xl">
          <div>
            <span className="inline-block border border-[#8162BB]/40 bg-[#F3EEF9]/10 text-[#8162BB] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Specialized Event Styling
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
              {service.heroHeadline}
            </h1>
            <p className="text-neutral-400 text-base font-light leading-relaxed mb-8">
              {service.heroSubheading}
            </p>

            <div className="space-y-3 mb-8">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#8162BB] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#8162BB] hover:bg-[#5C4092] text-white px-8 py-4 rounded-full text-sm font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer flex items-center justify-center"
            >
              Request Quote For {service.title}
            </button>
          </div>

          <div className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-purple-900/30">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Description Content & SEO Copy */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-[#121118] rounded-3xl p-8 sm:p-12 border border-purple-900/30 shadow-2xl space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-white">
            About Our {service.title} in Birmingham & West Midlands
          </h2>
          <p className="text-neutral-300 text-base font-light leading-relaxed">
            {service.description}
          </p>

          <div className="bg-[#1A1921] rounded-2xl p-6 border border-purple-900/30 text-xs text-neutral-300 space-y-2">
            <div className="font-bold uppercase text-[#8162BB]">Why Choose Balloon Galaxy For {service.title}?</div>
            <div>• Founded by Kam (former qualified accountant) ensuring meticulous execution and 100% reliability.</div>
            <div>• Prop painting and structural prep by Sandeep for safety and aesthetic harmony.</div>
            <div>• Double-stuffed premium balloons for zero opacity loss and rich matte hues.</div>
          </div>
        </div>
      </div>

      {/* Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h3 className="font-serif text-2xl font-semibold text-white mb-6 text-center">
            {service.title} FAQs
          </h3>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-[#121118] p-6 rounded-2xl border border-purple-900/30">
                <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#8162BB]" /> {faq.question}
                </h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <FinalCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
