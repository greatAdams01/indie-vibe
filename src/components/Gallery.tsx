import React from 'react';
import { motion } from 'motion/react';

const galleryPhotos = [
  { image: '/PHOTO-2026-05-05-18-44-36.jpg' },
  { image: '/PHOTO-2026-05-05-18-44-37.jpg' },
  { image: '/PHOTO-2026-05-05-18-44-37%202.jpg' },
  { image: '/PHOTO-2026-05-05-18-44-37%203.jpg' },
  { image: '/PHOTO-2026-05-05-18-44-37%204.jpg' },
];

export default function Gallery() {
  // Duplicate for seamless infinite marquee
  const marqueeItems = [...galleryPhotos, ...galleryPhotos];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream text-espresso relative overflow-hidden">
      {/* Background vintage texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="inline-block bg-espresso text-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-4 shadow-[2px_2px_0px_#D99C3B]">
              The Aesthetic
            </div>
            <h3 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter lowercase">
              documenting <br/>
              the <span className="text-terracotta italic pr-4">vibe.</span>
            </h3>
          </div>
          <p className="max-w-xs text-sm font-bold text-espresso/70 border-l-4 border-ochre pl-4">
            Through the lens. No barricades, no filters. Just raw cultural energy across borders.
          </p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex bg-ochre py-8 sm:py-12 border-y-4 sm:border-y-8 border-espresso shadow-[0_10px_0_#2A2321] -rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="flex animate-marquee whitespace-nowrap min-w-max">
          {marqueeItems.map((photo, i) => (
            <div key={i} className="mx-3 sm:mx-6 relative group w-[240px] sm:w-[280px] md:w-[350px] shrink-0">
              <div className="aspect-[4/5] w-full border-4 border-espresso bg-cream p-3 shadow-[8px_8px_0px_#2A2321] group-hover:shadow-[4px_4px_0px_#2A2321] group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300">
                <div className="w-full h-full relative overflow-hidden bg-espresso">
                  <img 
                    src={photo.image}
                    alt="Gallery photo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.2] contrast-125"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
