'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  // Images for transformation demo:
  const beforeImage = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"; // Empty venue / plain room
  const afterImage = "https://res.cloudinary.com/dokrpo5fl/image/upload/v1784978899/747207900_18022285613853271_6768489452173827855_n_qwv9zy.jpg"; // Finished luxury balloon setup

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8162BB] font-semibold block mb-3">
            Real Transformation Impact
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 leading-tight mb-4">
            See the Difference
          </h2>
          <p className="text-neutral-600 text-base font-light">
            From a simple blank venue wall to a stunning luxury balloon experience. Move the slider to reveal the transformation!
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative h-[400px] sm:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize touch-none"
          >
            {/* After Image (Background - Full Width) */}
            <img
              src={afterImage}
              alt="Finished Balloon Installation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 z-10 bg-[#8162BB] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> AFTER: Balloon Galaxy Touch
            </span>

            {/* Before Image (Clipped Foreground) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforeImage}
                alt="Empty Venue Room"
                className="absolute top-0 left-0 h-full max-w-none object-cover"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <span className="absolute top-4 left-4 z-10 bg-neutral-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
                BEFORE: Plain Venue
              </span>
            </div>

            {/* Slider Handle Line */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#8162BB] text-white flex items-center justify-center shadow-xl border-2 border-white pointer-events-auto">
                <Sliders className="w-5 h-5" />
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-neutral-500 font-medium mt-4">
            👈 Drag or click anywhere on the image to slide between Before and After 👉
          </p>
        </div>

      </div>
    </section>
  );
}
