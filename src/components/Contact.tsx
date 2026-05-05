import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageCircle, ExternalLink } from 'lucide-react';
import ApplicationForm from './ApplicationForm';
import {
  BOOKING_AVAILABILITY,
  BRAND_EMAIL,
  CONSULTATION_OPTIONS,
  getWhatsAppHref,
  WHATSAPP_DISPLAY,
} from '../constants/site';

const CALENDLY_EMBED = import.meta.env.VITE_CALENDLY_EMBED_URL ?? '';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-sand text-espresso relative scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-14">
          <h2 className="inline-block bg-espresso text-ochre px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 shadow-[2px_2px_0px_#B94B29]">
            Contact
          </h2>
          <h3 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tighter lowercase mb-6">
            apply, book, <span className="text-terracotta">connect.</span>
          </h3>
          <p className="text-espresso/80 font-medium leading-relaxed">
            Artists can apply via the form or by emailing us. For paid consultations, use Calendly when available, or reach out on WhatsApp.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <ApplicationForm />

          <div className="space-y-8">
            <motion.div
              id="book"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="border-4 border-espresso bg-cream p-5 sm:p-8 shadow-[8px_8px_0px_#B94B29]"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-0.5 rounded-full border-2 border-espresso bg-ochre p-2">
                  <Calendar className="h-5 w-5 text-espresso" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl lowercase tracking-tight">Paid consultations</h4>
                  <p className="text-sm text-espresso/70 font-medium mt-1">{BOOKING_AVAILABILITY}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {CONSULTATION_OPTIONS.map((row) => (
                  <li
                    key={row.duration}
                    className="flex justify-between gap-4 text-sm font-bold border-b border-espresso/10 pb-2"
                  >
                    <span>{row.duration}</span>
                    <span className="text-terracotta">${row.priceUsd} USD</span>
                  </li>
                ))}
              </ul>

              {CALENDLY_EMBED ? (
                <div className="rounded-lg overflow-hidden border-2 border-espresso bg-white min-h-[520px]">
                  <iframe
                    title="Book a consultation — Calendly"
                    src={CALENDLY_EMBED}
                    className="w-full h-[560px] border-0"
                  />
                </div>
              ) : (
                <div className="rounded-lg border-2 border-dashed border-espresso/30 bg-espresso/3 p-6 text-center">
                  <p className="text-sm font-medium text-espresso/80 mb-4">
                    Add your Calendly embed URL to <code className="text-xs bg-white px-1 py-0.5 border border-espresso/20">VITE_CALENDLY_EMBED_URL</code> in{' '}
                    <code className="text-xs bg-white px-1 py-0.5 border border-espresso/20">.env</code> (from your Calendly dashboard: Share → Embed).
                  </p>
                  <p className="text-xs text-espresso/60 font-medium">
                    Until then, email <a className="text-terracotta underline" href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a> or WhatsApp us to book.
                  </p>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-4 border-espresso bg-espresso text-cream p-5 sm:p-8 shadow-[8px_8px_0px_#D99C3B]"
            >
              <div className="flex items-start gap-3 mb-4">
                <MessageCircle className="h-6 w-6 text-ochre shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-xl lowercase">Direct line</h4>
                  <p className="text-sm text-cream/70 font-medium mt-1">WhatsApp</p>
                </div>
              </div>
              <a
                href={getWhatsAppHref("Hi IVHP — I'd like to connect.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-ochre hover:text-cream transition-colors"
              >
                {WHATSAPP_DISPLAY}
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm text-cream/65 font-medium">
                Email:{' '}
                <a href={`mailto:${BRAND_EMAIL}`} className="text-ochre underline underline-offset-2 hover:text-cream">
                  {BRAND_EMAIL}
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
