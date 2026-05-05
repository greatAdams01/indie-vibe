import React from 'react';
import { motion } from 'motion/react';

const locations = [
  {
    city: 'Dublin',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop',
    tagline: 'Acoustic roots.',
  },
  {
    city: 'Lagos',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    tagline: 'Alté energy.',
  },
  {
    city: 'Abuja',
    image: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f92c?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Studio camps.',
  },
  {
    city: 'London',
    image: 'https://images.unsplash.com/photo-1598369527926-ec483ae59a0f?q=80&w=1887&auto=format&fit=crop',
    tagline: 'Diaspora link up.',
  }
];

export default function Gallery() {
  // Duplicate for seamless infinite marquee
  const marqueeItems = [...locations, ...locations];

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
            <h3 className="font-serif font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter lowercase">
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
      <div className="relative w-full overflow-hidden flex bg-ochre py-12 border-y-8 border-espresso shadow-[0_10px_0_#2A2321] -rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="flex animate-marquee whitespace-nowrap min-w-max">
          {marqueeItems.map((loc, i) => (
            <div key={i} className="mx-6 relative group w-[280px] md:w-[350px] shrink-0">
              <div className="aspect-[4/5] w-full border-4 border-espresso bg-cream p-3 shadow-[8px_8px_0px_#2A2321] group-hover:shadow-[4px_4px_0px_#2A2321] group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300">
                <div className="w-full h-full relative overflow-hidden bg-espresso">
                  <img 
                    src={loc.image} 
                    alt={loc.city}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.2] contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h4 className="font-serif font-bold text-3xl text-cream lowercase">{loc.city}</h4>
                    <span className="text-[10px] uppercase font-bold text-ochre bg-espresso px-2 py-1 rotate-[-5deg]">
                      {loc.tagline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
