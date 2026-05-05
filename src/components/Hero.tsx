import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const columns = [
  [
    { id: 1, url: "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80" },
    { id: 2, url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80" },
    { id: 3, url: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f92c?auto=format&fit=crop&w=600&q=80" },
  ],
  [
    { id: 4, url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: 5, url: "https://images.unsplash.com/photo-1516280440502-39270df81e74?auto=format&fit=crop&w=600&q=80" },
    { id: 6, url: "https://images.unsplash.com/photo-1598369527926-ec483ae59a0f?auto=format&fit=crop&w=600&q=80" },
  ],
  [
    { id: 7, url: "https://images.unsplash.com/photo-1470229722913-7c090be5c5a5?auto=format&fit=crop&w=600&q=80" },
    { id: 8, url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 9, url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" },
  ],
  [
    { id: 10, url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80" },
    { id: 11, url: "https://images.unsplash.com/photo-1464fb525cb10-e7f098bdccb3?auto=format&fit=crop&w=600&q=80" },
    { id: 12, url: "https://images.unsplash.com/photo-1510515152705-ba0dfbddef12?auto=format&fit=crop&w=600&q=80" },
  ],
  [
    { id: 13, url: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80" },
    { id: 14, url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" },
    { id: 15, url: "https://images.unsplash.com/photo-1525331336235-d3153d86efec?auto=format&fit=crop&w=800&q=80" },
  ]
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#050505] text-white">
      {/* Background Tilted Grid Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[150vw] md:w-[120vw] flex gap-4 md:gap-6 transform rotate-[-12deg] scale-[1.1] md:scale-100 opacity-40">
          {columns.map((col, colIndex) => (
            <div 
              key={colIndex} 
              className={`w-1/4 md:w-1/5 flex flex-col gap-4 md:gap-6 ${colIndex % 2 !== 0 ? 'translate-y-20' : '-translate-y-10'}`}
            >
              {col.map((item) => (
                <div key={item.id} className="relative w-full pb-[120%] bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={item.url} 
                    alt="Artist snapshot" 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity brightness-[0.7] contrast-[1.2]"
                  />
                  {/* Subtle noise overlay */}
                  <div className="absolute inset-0 bg-[#000] opacity-20 mix-blend-overlay"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Central Circular Logo */}
      <div className="absolute top-[30%] lg:top-[25%] left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-white flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="w-8 h-[2px] bg-white rotate-[-30deg] mt-2 mb-1"></span>
            <span className="w-10 h-[2px] bg-white"></span>
            <span className="w-8 h-[2px] bg-white mt-1"></span>
            <span className="w-6 h-[2px] bg-white rotate-[-15deg] mt-1 mb-2"></span>
          </div>
        </motion.div>
      </div>

      {/* Foreground Elements Container */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Floating Video/Feature Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-16 md:bottom-24 left-6 lg:left-24 w-[320px] md:w-[480px] lg:w-[560px] h-[220px] md:h-[320px] bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl pointer-events-auto group cursor-pointer border border-white/5"
        >
          <div className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" 
              alt="Featured Artist Video" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity brightness-90"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="text-white fill-white ml-1 w-5 h-5" />
              </div>
            </div>
            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between px-6 pb-4">
              <span className="text-white font-bold text-sm md:text-base">Indie Vibe House Party</span>
              <span className="text-[#a0402b] text-sm md:text-base font-medium">©2026</span>
            </div>
          </div>
        </motion.div>

        {/* Descriptive Text Bottom Right */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-16 md:bottom-24 right-6 lg:right-24 max-w-[300px] md:max-w-md pointer-events-auto"
        >
          <p className="text-white/70 font-medium text-sm md:text-base leading-[1.6] md:leading-[1.8]">
            Indie Vibe House Party is a live music collective that curates intimate events, supports independent artists, and creates music through recording camps and collaborative retreats. It also develops collective projects and partners with brands to deliver authentic, culture-driven experiences across Africa and the diaspora.
          </p>
        </motion.div>

        {/* Frame Markers */}
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/30 hidden md:block"></div>
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/30 hidden md:block"></div>
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/30 hidden md:block"></div>
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/30 hidden md:block"></div>

        {/* Bottom Hash Marks */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-6 opacity-20">
          {[...Array(11)].map((_, i) => (
             <div key={i} className={`w-px bg-white ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
