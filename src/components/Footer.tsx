import React from 'react';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';
import { BRAND_EMAIL, getWhatsAppHref, WHATSAPP_DISPLAY } from '../constants/site';

export default function Footer() {
  return (
    <footer id="footer" className="bg-espresso text-cream pt-24 pb-12 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-7xl mb-4 text-cream lowercase tracking-tighter">
              Get in touch
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/70 font-medium font-serif italic">
              Let&apos;s make it happen. Get in touch now!
            </p>
          </div>
          <div className="flex flex-col gap-3 font-medium text-lg text-cream/90">
            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta pb-1 inline-block w-max break-all"
            >
              {BRAND_EMAIL}
            </a>
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              className="hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta pb-1 inline-block w-max"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-cream/10 pt-16">
          <div className="md:col-span-4">
            <h3 className="font-serif font-extrabold text-4xl mb-6 text-ochre lowercase tracking-tighter">
              ivhp.
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed pr-4 font-medium mb-8">
              Indie Vibe House Party is a live music event production company and collective spotlighting independent musicians and music lovers across Africa and the diaspora—through events, camps, and culture-first collaborations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all"
              >
                <Music size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-cream/50">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-cream/80">
              <li>
                <a href="#" className="hover:text-ochre transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-ochre transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ochre transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-ochre transition-colors">
                  Why IVHP
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-ochre transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-cream/50">Resources</h4>
            <ul className="space-y-4 text-sm font-medium text-cream/80">
              <li>
                <a href="#testimonials" className="hover:text-ochre transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ochre transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-ochre transition-colors">
                  Apply
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-ochre transition-colors">
                  Book a call
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ochre transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-cream/50">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-cream/80">
              <li>
                <a href="#" className="hover:text-ochre transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ochre transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 text-center text-[10px] text-cream/40 uppercase tracking-[0.1em] font-medium">
          <p>&copy; {new Date().getFullYear()} Indie Vibe House Party. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
