import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WHY IVHP', href: '#why-us' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-8 lg:py-12'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              className={`font-serif font-extrabold text-2xl tracking-tighter lowercase transition-colors ${
                isScrolled ? 'text-white' : 'text-white lg:text-transparent'
              }`}
            >
              ivhp.
            </a>
          </div>
          
          <div className="hidden lg:flex space-x-8 xl:space-x-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              className="p-2 -mr-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-16 relative z-10 mt-2">
              <span className="font-serif font-extrabold text-3xl tracking-tighter text-white lowercase">ivhp.</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-white"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 flex-1 px-4 relative z-10 mt-10">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif font-bold text-3xl text-white hover:text-white/50 lowercase transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <div className="pb-8 px-4 relative z-10 mt-auto">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 text-xs uppercase tracking-[0.15em] font-bold bg-white text-[#0a0a0a]"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
