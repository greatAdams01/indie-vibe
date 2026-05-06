import React from 'react';
import { Instagram } from 'lucide-react';
import { BRAND_EMAIL, getWhatsAppHref, OPERATING_LOCATIONS, SOCIAL_LINKS } from '../constants/site';

function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
              Chat on WhatsApp
            </a>
            <div className="pt-4 mt-2 border-t border-cream/15">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-cream/50 mb-2">
                Locations of operation
              </p>
              <p className="text-base text-cream/90 font-medium leading-snug">
                {OPERATING_LOCATIONS.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-cream/10 pt-16">
          <div className="md:col-span-4">
            <img src="/logo-clean.png" alt="Indie Vibe House Party" className="h-14 w-auto mb-6" />
            <p className="text-sm text-cream/60 leading-relaxed pr-4 font-medium mb-8">
              Indie Vibe House Party is a live music event production company and collective spotlighting independent musicians and music lovers across Africa and the diaspora—through events, camps, and culture-first collaborations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all"
                aria-label="Indie Vibe House Party on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all"
                aria-label="Indie Vibe House Party on X"
              >
                <XLogo className="h-[18px] w-[18px]" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/80 hover:bg-terracotta hover:text-cream hover:border-terracotta transition-all"
                aria-label="Indie Vibe House Party on TikTok"
              >
                <TikTokGlyph className="h-[18px] w-[18px]" />
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

        <div className="mt-20 pt-8 border-t border-cream/10 text-center text-[10px] text-cream/40 uppercase tracking-widest font-medium">
          <p>&copy; {new Date().getFullYear()} Indie Vibe House Party. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
