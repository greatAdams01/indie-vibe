import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Indie Vibe House Party?",
    answer: "IVHP is a hybrid live event production company, music collective, and recording lab. We exist to make independent music feel like home by creating intimate, high-quality spaces where artists and audiences can genuinely connect over vintage roots and modern sounds."
  },
  {
    question: "Who do you work with?",
    answer: "We partner with emerging and established independent artists, forward-thinking brands, and cultural institutions across the globe, with a strong focus on voices connected to Africa and the diaspora highlighting Afrobeat, Highlife, and Alté cultures."
  },
  {
    question: "What are 'Tales We Tell'?",
    answer: "It is our flagship project series—a curated blend of storytelling and live performance. We strip back the grand stage production and bring the artists into a living-room-style setting where the music, rhythm, and narrative take center stage."
  },
  {
    question: "How can brands partner with us?",
    answer: "We offer bespoke cultural integrations. Rather than slapping a logo on a flyer, we integrate brands seamlessly into the creative process and live experiences, ensuring authentic resonance with our highly engaged, culturally tapped-in audience."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream text-espresso relative">
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <h2 className="inline-block bg-terracotta text-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 rotate-[-2deg] shadow-[2px_2px_0px_#2A2321]">
              Curiosity
            </h2>
            <h3 className="font-serif font-extrabold text-5xl md:text-6xl leading-[0.9] tracking-tighter lowercase">
              all your <br />
              <span className="text-ochre">questions,</span><br/>
              answered.
            </h3>
            <p className="mt-6 text-espresso/70 font-bold border-l-4 border-ochre pl-4 text-sm">
              If you don't see your question here, hit us up. We don't bite.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-4 border-espresso transition-all duration-300 ${isOpen ? 'bg-sand shadow-[8px_8px_0px_#2A2321]' : 'bg-cream hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2A2321]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left group"
                >
                  <span className={`font-serif font-extrabold text-2xl md:text-3xl lowercase pr-6 transition-colors duration-300 ${isOpen ? 'text-terracotta' : 'text-espresso'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 border-2 border-espresso bg-ochre flex items-center justify-center rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:scale-110'}`}>
                    {isOpen ? <Minus size={20} strokeWidth={3} className="text-espresso" /> : <Plus size={20} strokeWidth={3} className="text-espresso" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-cream border-t-4 border-espresso"
                    >
                      <div className="p-6 bg-cream/50 relative">
                        {/* decorative corner graphic */}
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-ochre"></div>
                          <div className="w-2 h-2 rounded-full bg-terracotta"></div>
                        </div>
                        <p className="text-espresso font-medium leading-relaxed max-w-xl text-md">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
