import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { HERO_SHORT_DESCRIPTION, TAGLINE } from '../constants/site';

const columns = [
  [
    { id: 1, url: "/img/IMG_5095.JPG" },
    { id: 2, url: "/img/IMG_5096.JPG" },
    { id: 3, url: "/img/IMG_5097.JPG" },
  ],
  [
    { id: 4, url: "/img/IMG_5098.JPG" },
    { id: 5, url: "/img/IMG_5099.JPG" },
    { id: 6, url: "/img/IMG_5101.JPG" },
  ],
  [
    { id: 7, url: "/img/IMG_5103.JPG" },
    { id: 8, url: "/img/IMG_5104.JPG" },
    { id: 9, url: "/img/IMG_5106.JPG" },
  ],
  [
    { id: 10, url: "/img/IMG_5107.JPG" },
    { id: 11, url: "/img/IMG_5109.JPG" },
    { id: 12, url: "/img/730IVHP-224.jpeg" },
  ],
  [
    { id: 13, url: "/img/IMG_5095.JPG" },
    { id: 14, url: "/img/IMG_5098.JPG" },
    { id: 15, url: "/img/IMG_5104.JPG" },
  ]
];

export default function Hero() {
  return (
    <section className="relative min-h-svh h-auto md:h-screen md:min-h-[700px] w-full overflow-hidden bg-[#050505] text-white">
      {/* Background Tilted Grid Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[160vw] sm:w-[150vw] md:w-[120vw] flex gap-2 sm:gap-3 md:gap-6 transform -rotate-12 scale-[1.05] sm:scale-110 md:scale-100 opacity-40 min-w-0">
          {columns.map((col, colIndex) => (
            <div 
              key={colIndex} 
              className={`w-1/5 min-w-0 flex flex-col gap-2 sm:gap-3 md:gap-6 shrink-0 ${colIndex % 2 !== 0 ? 'translate-y-10 sm:translate-y-16 md:translate-y-20' : '-translate-y-6 sm:-translate-y-8 md:-translate-y-10'}`}
            >
              {col.map((item, rowIndex) => {
                const eager = colIndex < 2 && rowIndex < 2;
                return (
                <div key={item.id} className="relative w-full pb-[100%] sm:pb-[110%] md:pb-[120%] bg-[#1a1a1a] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={item.url} 
                    alt="Artist snapshot" 
                    loading={eager ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={eager ? 'low' : undefined}
                    sizes="(max-width: 640px) 28vw, 18vw"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity brightness-[0.7] contrast-[1.2]"
                  />
                  {/* Subtle noise overlay */}
                  <div className="absolute inset-0 bg-[#000] opacity-20 mix-blend-overlay"></div>
                </div>
              );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Foreground: stacked on small screens, split corners from md up */}
      <div className="relative z-30 flex min-h-svh flex-col justify-end gap-5 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-28 pointer-events-none md:absolute md:inset-0 md:block md:min-h-0 md:p-0">
        {/* Floating Video/Feature Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-full h-[200px] sm:h-[240px] shrink-0 rounded-xl overflow-hidden shadow-2xl pointer-events-auto group cursor-pointer border border-white/5 bg-black md:absolute md:bottom-24 md:left-6 lg:left-24 md:h-[320px] md:w-[480px] lg:w-[560px] md:max-w-none md:rounded-2xl"
        >
          <div className="relative w-full h-full">
            <img 
              src="/img/IMG_5107.JPG" 
              alt="Featured Artist Video" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity brightness-90"
            />
            {/* Play Button Overlay — visible on touch; hover on md+ */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-40 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="text-white fill-white ml-1 w-5 h-5" />
              </div>
            </div>
            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 md:h-20 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between px-4 sm:px-6 pb-3 sm:pb-4">
              <span className="text-white font-bold text-xs sm:text-sm md:text-base truncate pr-2">Indie Vibe House Party</span>
              <span className="text-[#a0402b] text-xs sm:text-sm md:text-base font-medium shrink-0">©2026</span>
            </div>
          </div>
        </motion.div>

        {/* Tagline + descriptive text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-none pointer-events-auto md:absolute md:bottom-24 md:right-6 lg:right-24 md:max-w-md md:w-auto space-y-3"
        >
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-white font-bold italic tracking-tight">
            {TAGLINE}
          </p>
          <p className="text-white/70 font-medium text-sm sm:text-base leading-relaxed md:leading-[1.8]">
            {HERO_SHORT_DESCRIPTION}
          </p>
        </motion.div>

        {/* Frame Markers */}
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/30 hidden md:block pointer-events-none"></div>
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/30 hidden md:block pointer-events-none"></div>
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/30 hidden md:block pointer-events-none"></div>
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/30 hidden md:block pointer-events-none"></div>

        {/* Bottom Hash Marks */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex items-end gap-4 md:gap-6 opacity-20 pointer-events-none">
          {[...Array(11)].map((_, i) => (
             <div key={i} className={`w-px bg-white ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
