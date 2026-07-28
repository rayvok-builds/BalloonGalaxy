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
    <div className="py-12 bg-[#FAF8F5]">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-[#8162BB] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
              Specialized Event Styling
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
              {service.heroHeadline}
            </h1>
            <p className="text-neutral-600 text-base font-light leading-relaxed mb-8">
              {service.heroSubheading}
            </p>

            <div className="space-y-3 mb-8">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-neutral-800">
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

          <div className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
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
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-md space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-neutral-900">
            About Our {service.title} in Birmingham & West Midlands
          </h2>
          <p className="text-neutral-700 text-base font-light leading-relaxed">
            {service.description}
          </p>

          <div className="bg-[#F3EEF9] rounded-2xl p-6 border border-[#8162BB]/20 text-xs text-neutral-800 space-y-2">
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
          <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-6 text-center">
            {service.title} FAQs
          </h3>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 text-base mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#8162BB]" /> {faq.question}
                </h4>
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
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
