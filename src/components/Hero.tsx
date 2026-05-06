import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { HERO_SHORT_DESCRIPTION, TAGLINE } from '../constants/site';

const FEATURED_SLIDES = [
  { src: '/img/IMG_5107.JPG', alt: 'IVHP live moment' },
  { src: '/img/IMG_5098.JPG', alt: 'Community at an IVHP event' },
  { src: '/img/IMG_5104.JPG', alt: 'Artists and crowd' },
  { src: '/img/730IVHP-224.jpeg', alt: 'House party energy' },
  { src: '/PHOTO-2026-05-05-18-44-37.jpg', alt: 'IVHP gathering' },
] as const;

const SLIDE_INTERVAL_MS = 6000;

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
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = FEATURED_SLIDES.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setSlideIndex((i) => (i + dir + slideCount) % slideCount);
    },
    [slideCount],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % slideCount);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, slideCount]);

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
                  <div className="absolute inset-0 bg-black opacity-20 mix-blend-overlay"></div>
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
          className="relative w-full max-w-full h-[200px] sm:h-[240px] shrink-0 rounded-xl overflow-hidden shadow-2xl pointer-events-auto group border border-white/5 bg-black md:absolute md:bottom-24 md:left-6 lg:left-24 md:h-[320px] md:w-[480px] lg:w-[560px] md:max-w-none md:rounded-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full h-full">
            {FEATURED_SLIDES.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : undefined}
                aria-hidden={i !== slideIndex}
                className={`absolute inset-0 h-full w-full object-cover mix-blend-luminosity brightness-90 transition-all duration-700 ease-out motion-reduce:transition-none ${
                  i === slideIndex ? 'z-10 opacity-80 scale-100' : 'z-0 opacity-0 scale-105'
                }`}
              />
            ))}

            <div className="pointer-events-none absolute inset-0 z-20 bg-linear-to-b from-black/25 via-transparent to-black/50" />

            <div className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <Images className="h-3.5 w-3.5 text-white/80" strokeWidth={2} />
              <span>Scenes</span>
            </div>

            <div className="absolute inset-y-0 left-0 z-30 flex w-11 items-center justify-start pl-1 sm:w-12 sm:pl-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 z-30 flex w-11 items-center justify-end pr-1 sm:w-12 sm:pr-2">
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div
              className="absolute bottom-12 left-0 right-0 z-30 flex justify-center gap-1.5 sm:bottom-14 md:bottom-16"
              role="tablist"
              aria-label="Featured photos"
            >
              {FEATURED_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === slideIndex}
                  aria-label={`Show slide ${i + 1} of ${slideCount}`}
                  onClick={() => setSlideIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === slideIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 flex h-14 sm:h-16 md:h-20 items-end justify-between gap-3 bg-linear-to-t from-black/90 to-transparent px-4 pb-3 sm:px-6 sm:pb-4">
              <span className="min-w-0 truncate text-xs font-bold text-white sm:text-sm md:text-base">
                Indie Vibe House Party
              </span>
              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <span className="text-[10px] font-medium tabular-nums text-white/55 sm:text-xs">
                  {slideIndex + 1}/{slideCount}
                </span>
                <span className="text-[#a0402b] text-xs font-medium sm:text-sm md:text-base">©2026</span>
              </div>
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
