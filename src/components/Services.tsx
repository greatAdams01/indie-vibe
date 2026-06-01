import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const serviceItems = [
  'Live music event production',
  'Curated indie music showcases',
  'Artist discovery and booking opportunities',
  'Artist development and performance platforms',
  'Music recording camps and creative residencies',
  'Collaborative songwriting and production sessions',
  'EP, album, and collective music project development',
  'Creative retreats and cultural immersion experiences',
  `Experiential event production
(Weddings, Dinners and more.)`,
  'Brand partnerships and cultural activations',
  'Experiential marketing for music and culture-led campaigns',
  'Community building and industry networking events',
  'Workshops, mentorship, and knowledge-sharing sessions',
  'Collaboration facilitation between artists and producers',
  'Music content creation and cultural storytelling',
  'Event documentation, interviews, and editorial features',
  'Press and media amplification for independent artists',
  'Creative direction for indie music releases and projects',
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-sand text-espresso relative scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/stucco.webp')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-5 md:mb-5">
          <div className="max-w-2xl w-full min-w-0">
            <h2 className="inline-block font-serif font-extrabold bg-espresso text-ochre px-3 py-1 text-[30px] uppercase tracking-[0.2em] mb-6 rotate-2 shadow-[2px_2px_0px_#B94B29]">
              Core services
            </h2>
            <h3 className="font-serif font-extrabold text-[35px] leading-[0.9] tracking-tighter lowercase mb-6 w-full max-w-[400px]">
              what we <span className="text-terracotta">build</span> with you.
            </h3>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
              className="flex gap-3 items-start bg-cream border-4 border-espresso p-4 shadow-[4px_4px_0px_#2A2321]"
            >
              <Check className="h-5 w-5 shrink-0 text-terracotta mt-0.5" strokeWidth={2.5} />
              <span className="text-sm font-bold leading-snug">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
