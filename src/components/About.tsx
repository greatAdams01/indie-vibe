import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { TAGLINE } from '../constants/site';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-espresso text-cream overflow-hidden relative scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-5/12 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-ochre font-bold mb-4 border-l-2 border-terracotta pl-2">
                About us
              </h2>
              <p className="font-serif font-bold text-lg sm:text-xl text-ochre/90 italic mb-4 border-l-2 border-ochre pl-3">
                {TAGLINE}
              </p>
              <h3 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] sm:leading-[0.9] tracking-tighter mb-8 lowercase text-sand">
                from <span className="text-terracotta italic">creation</span> <br />
                to <span className="underline decoration-ochre decoration-4 underline-offset-8">community</span>.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-cream/80 font-medium text-base sm:text-lg leading-relaxed relative pl-4 md:pl-0"
            >
              <div className="absolute left-0 md:-left-6 top-0 bottom-0 w-1 bg-linear-to-b from-terracotta to-ochre"></div>
              <p>
                <strong className="text-sand font-bold">Indie Vibe House Party (IVHP)</strong> is a live music event production company and music collective that spotlights and supports independent musicians, music companies, and private and corporate consumers of music across Africa and the global African diaspora. Indie Vibe House Party exists to make music feel like home both for creators and for music lovers through live experiences, creative collaborations, and intentional community spaces.
              </p>
              <p>
                Indie Vibe House Party is committed to creating safe, hospitable, and empowering environments where artists can connect with audiences, industry peers, and collaborators without traditional gatekeeping.
              </p>

              <div className="pt-4 space-y-8">
                <div className="bg-sand/5 p-6 border-l-2 border-ochre hover:bg-sand/10 transition-colors">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-ochre font-bold mb-2">Mission</h4>
                  <p className="text-base leading-snug">
                    To elevate independent music voices by curating intentional experiences that foster artistic growth, professional opportunities, and meaningful community connections across Africa and beyond.
                  </p>
                </div>

                <div className="bg-sand/5 p-6 border-l-2 border-terracotta hover:bg-sand/10 transition-colors">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-bold mb-2">Vision</h4>
                  <p className="text-base leading-snug">
                    To evolve into a global indie music movement recognized for cultivating culture, amplifying authentic voices, and co-creating sustainable pathways for independent artists.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 inline-block max-w-full bg-terracotta p-4 sm:p-6 shadow-[8px_8px_0px_#D99C3B] -rotate-1"
            >
              <p className="font-serif font-bold text-xl sm:text-2xl text-cream leading-tight lowercase">
                &ldquo;Not just an audience, <br />
                but a community.&rdquo;
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12 relative min-h-[380px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[600px] order-1 lg:order-2">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-3/4 md:w-2/3 aspect-3/4 z-10">
              <div className="w-full h-full border-4 border-cream bg-espresso shadow-[12px_12px_0px_#B94B29] overflow-hidden p-2">
                <img
                  src="/boyspce.jpg"
                  alt="Live indie performance moment"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 75vw, 45vw"
                  className="w-full h-full object-cover "
                />
              </div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute bottom-10 left-0 w-1/2 md:w-5/12 aspect-square z-20">
              <div className="w-full h-full border-4 border-espresso bg-ochre shadow-[8px_8px_0px_#EAE3D9] overflow-hidden p-2">
                <img
                  src="/blqck.jpg"
                  alt="IVHP crowd and community"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 contrast-150 sepia-[.2]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
