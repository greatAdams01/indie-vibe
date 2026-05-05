import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const points = [
  'Music that feels like home through intimate, intentional experiences',
  'Artist-first platform focused on independent talent development',
  'Hybrid of live events, collective, and music creation ecosystem',
  'End-to-end creative pipeline from idea to released music projects',
  'Immersive recording camps and creative retreats',
  'Authentic brand activations rooted in culture, not ads',
  'Champion of independent African and diaspora music',
  'Community-led approach built on collaboration over competition',
  'Support for producers and creatives through key partnerships',
  "Story-driven music projects like Tales We Tell At Home",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-espresso text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-ochre font-bold mb-4 border-l-2 border-terracotta pl-2">
            Why IVHP
          </h2>
          <h3 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tighter lowercase text-sand">
            what makes us <span className="text-terracotta italic">different.</span>
          </h3>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {points.map((text, i) => (
            <motion.li
              key={text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex gap-3 items-start bg-sand/5 border border-cream/10 p-4 sm:p-5"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ochre bg-ochre/20">
                <Check className="h-4 w-4 text-ochre" strokeWidth={3} />
              </span>
              <span className="text-sm sm:text-base font-medium text-cream/90 leading-snug">{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
