'use client';

import { useState } from 'react';
import { X, Sparkles, Check, Calendar, MapPin, Phone, Mail, User, ArrowRight, Heart } from 'lucide-react';

export default function QuoteBuilderModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);

  // Form State
  const [eventType, setEventType] = useState('Birthday');
  const [style, setStyle] = useState('Organic');
  const [colorPalette, setColorPalette] = useState('Gold & Champagne');
  const [location, setLocation] = useState('Birmingham');
  const [eventDate, setEventDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const eventTypes = [
    { id: 'Birthday', label: '🎈 Birthday Party', icon: '🎂' },
    { id: 'Baby Shower', label: '👶 Baby Shower', icon: '🧸' },
    { id: 'Wedding', label: '💍 Wedding & Bridal', icon: '✨' },
    { id: 'Corporate', label: '🏢 Corporate Launch', icon: '🏆' },
    { id: 'Gender Reveal', label: '🎀 Gender Reveal', icon: '❓' },
    { id: 'Christening', label: '🕊️ Christening', icon: '👼' },
    { id: 'Custom', label: '✨ Other Custom Event', icon: '🌟' }
  ];

  const styles = [
    { id: 'Organic', label: 'Lush Organic Garland', desc: 'Flowing multi-sized balloon cascades' },
    { id: 'Luxury', label: 'Luxury Backdrop Board', desc: 'Sailboard arches & personalized signs' },
    { id: 'Minimal', label: 'Minimal & Elegant', desc: 'Subtle chic accents & clean lines' },
    { id: 'Bold', label: 'Bold Light-Up Numbers', desc: '4ft LED white numbers with balloon stacks' },
    { id: 'Hoop', label: 'Circular Hoop Display', desc: '2m framed balloon circle with signage' }
  ];

  const colorSwatches = [
    { id: 'Gold & Champagne', label: 'Champagne & Gold', colors: ['#D4AF37', '#FFFDF9', '#EFE8DE'] },
    { id: 'Soft Nude & Blush', label: 'Soft Nude & Blush', colors: ['#F5EBEB', '#E8D7D8', '#D4B8B6'] },
    { id: 'Royal Purple & Gold', label: 'Signature Galaxy Purple', colors: ['#8162BB', '#D4AF37', '#F3EEF9'] },
    { id: 'Sage & Eucalyptus', label: 'Sage & Eucalyptus', colors: ['#8F9E8B', '#D8E2DC', '#F4F1DE'] },
    { id: 'Powder Blue & White', label: 'Powder Blue & White', colors: ['#B8C0EC', '#FFFFFF', '#D4E09B'] },
    { id: 'Custom Mix', label: 'Bespoke Custom Theme', colors: ['#1A191D', '#8162BB', '#D4AF37'] }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Hi Kam! I built a quote on your website:\n- Event: ${eventType}\n- Style: ${style}\n- Colors: ${colorPalette}\n- Location: ${location}\n- Date: ${eventDate}\n- Name: ${name} (${phone})`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8162BB] to-[#5C4092] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Quote Builder
          </div>
          <h3 className="font-serif text-2xl font-semibold">
            Build Your Event Experience
          </h3>
          <p className="text-xs text-purple-100 font-light mt-1">
            Step {step} of 4 • Select your aesthetic preferences for an instant proposal
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-neutral-800">
          
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: Event Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <h4 className="font-serif text-lg font-semibold text-neutral-900">
                    1. Select Your Event Type
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {eventTypes.map((ev) => (
                      <button
                        key={ev.id}
                        type="button"
                        onClick={() => setEventType(ev.id)}
                        className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                          eventType === ev.id
                            ? 'border-[#8162BB] bg-[#F3EEF9] ring-2 ring-[#8162BB]/30 font-semibold'
                            : 'border-neutral-200 hover:border-neutral-400 bg-[#FAF8F5]'
                        }`}
                      >
                        <span className="text-2xl mb-2">{ev.icon}</span>
                        <span className="text-xs text-neutral-900 font-medium">{ev.label}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-6 bg-[#8162BB] text-white py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#5C4092] transition-all"
                  >
                    Next: Preferred Decor Style →
                  </button>
                </div>
              )}

              {/* STEP 2: Preferred Style */}
              {step === 2 && (
                <div className="space-y-6">
                  <h4 className="font-serif text-lg font-semibold text-neutral-900">
                    2. Choose Your Decor Style
                  </h4>
                  <div className="space-y-3">
                    {styles.map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setStyle(st.id)}
                        className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                          style === st.id
                            ? 'border-[#8162BB] bg-[#F3EEF9] ring-2 ring-[#8162BB]/30'
                            : 'border-neutral-200 hover:border-neutral-400 bg-[#FAF8F5]'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">{st.label}</div>
                          <div className="text-xs text-neutral-500 font-light">{st.desc}</div>
                        </div>
                        {style === st.id && <Check className="w-5 h-5 text-[#8162BB]" />}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 border border-neutral-300 text-neutral-700 py-3.5 rounded-2xl text-xs font-semibold"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 bg-[#8162BB] text-white py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#5C4092]"
                    >
                      Next: Color Palette Swatches →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Color Palette Swatches */}
              {step === 3 && (
                <div className="space-y-6">
                  <h4 className="font-serif text-lg font-semibold text-neutral-900">
                    3. Pick Visual Color Palette
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {colorSwatches.map((pal) => (
                      <button
                        key={pal.id}
                        type="button"
                        onClick={() => setColorPalette(pal.id)}
                        className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                          colorPalette === pal.id
                            ? 'border-[#8162BB] bg-[#F3EEF9] ring-2 ring-[#8162BB]/30'
                            : 'border-neutral-200 hover:border-neutral-400 bg-[#FAF8F5]'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold text-neutral-900 mb-2">{pal.label}</div>
                          <div className="flex items-center gap-1.5">
                            {pal.colors.map((c, i) => (
                              <span
                                key={i}
                                className="w-5 h-5 rounded-full border border-neutral-300 shadow-sm"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                        </div>
                        {colorPalette === pal.id && <Check className="w-5 h-5 text-[#8162BB]" />}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 border border-neutral-300 text-neutral-700 py-3.5 rounded-2xl text-xs font-semibold"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="w-2/3 bg-[#8162BB] text-white py-3.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#5C4092]"
                    >
                      Next: Event Details →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Date, Location & Contact */}
              {step === 4 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-semibold text-neutral-900">
                    4. Event Details & Contact Info
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07841 696582"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Event Date *</label>
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">Venue Area / Postcode *</label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Solihull, B91 2EE"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Inspiration Notes / Special Requests</label>
                    <textarea
                      rows="3"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Need teddy bear prop hire and custom vinyl name reading 'Sarah's Baby Shower'"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs font-medium focus:border-[#8162BB] focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-1/3 border border-neutral-300 text-neutral-700 py-3.5 rounded-2xl text-xs font-semibold"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-[#8162BB] hover:bg-[#5C4092] text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" /> Request My Custom Proposal
                    </button>
                  </div>
                </div>
              )}

            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h4 className="font-serif text-2xl font-semibold text-neutral-900">
                Thank You, {name}!
              </h4>
              <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                Kam has received your quote request for your <span className="font-semibold text-neutral-900">{eventType}</span> on <span className="font-semibold text-neutral-900">{eventDate}</span> in {location}. We will respond within 2-4 hours!
              </p>

              <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-neutral-200 text-xs text-left max-w-md mx-auto space-y-1">
                <div><strong>Event:</strong> {eventType} ({style})</div>
                <div><strong>Color Palette:</strong> {colorPalette}</div>
                <div><strong>Location:</strong> {location}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/447841696582?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#8162BB] text-white px-6 py-3 rounded-full text-xs font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  Send Instantly via WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto border border-neutral-300 text-neutral-700 px-6 py-3 rounded-full text-xs font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
