'use client';

import { useState } from 'react';
import { FAQ_LIST } from '@/data/faqData';
import { ChevronDown, Search, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqAccordion({ onOpenQuoteModal }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQ_LIST.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
            SEO & Event Styling Knowledge Hub
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
            Questions? We’ve Got You Covered
          </h2>
          <p className="text-neutral-600 text-base font-light">
            Everything you need to know about booking, color matching, setup logistics, and balloon longevity.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative mb-10">
          <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. outdoors, colors, deposit, travel)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200 focus:outline-none focus:border-[#8162BB] focus:ring-2 focus:ring-[#8162BB]/20 text-sm font-medium transition-all"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl border border-neutral-200/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left font-serif text-lg font-medium text-neutral-900 flex items-center justify-between gap-4 hover:text-[#8162BB] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#8162BB] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#8162BB] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-200/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 p-8 rounded-3xl bg-[#F3EEF9] border border-[#8162BB]/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg font-semibold text-neutral-900 mb-1">
              Have a custom question for Kam?
            </h4>
            <p className="text-xs text-neutral-600 font-light">
              Chat directly with Kam on WhatsApp for instant assistance.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 bg-[#8162BB] text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-[#5C4092] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] cursor-pointer hover:cursor-pointer"
          >
            Ask Kam a Question
          </button>
        </div>

      </div>
    </section>
  );
}
