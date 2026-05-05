import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-cream text-espresso relative">
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center rounded-full border-2 border-espresso bg-ochre/15 p-3 mb-6">
            <Quote className="h-6 w-6 text-espresso" />
          </div>
          <h3 className="font-serif font-extrabold text-3xl sm:text-4xl lowercase tracking-tighter mb-4">
            voices from the community
          </h3>
          <p className="text-espresso/75 font-medium leading-relaxed max-w-2xl mx-auto">
            We&apos;re gathering testimonials from artists, partners, and audiences who&apos;ve shared a room with us. If you&apos;ve worked with IVHP, we&apos;d love to feature your words — send a note when you{' '}
            <a href="#apply" className="text-terracotta font-bold underline underline-offset-2">
              apply
            </a>{' '}
            or reply to your project thread.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
