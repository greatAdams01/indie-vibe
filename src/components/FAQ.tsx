import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is Indie Vibe House Party?',
    answer:
      'A live music collective that supports independent artists through events, retreats, and creative projects.',
  },
  {
    question: 'Who do you work with?',
    answer: 'Independent artists, producers, and creatives across Africa and the diaspora.',
  },
  {
    question: 'Is it just an event platform?',
    answer: 'No. It also includes recording camps, retreats, and music project development.',
  },
  {
    question: 'What is Tales We Tell At Home?',
    answer:
      'A collective music project created from an IVHP recording camp featuring multiple indie artists.',
  },
  {
    question: 'Do you offer brand partnerships?',
    answer: 'Yes. We collaborate with brands on cultural activations and music-driven experiences.',
  },
  {
    question: 'How do artists get involved?',
    answer: 'Artists can apply via our website or by emailing us.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream text-espresso relative scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 shrink-0">
          <div className="md:sticky md:top-28 lg:top-32">
            <h2 className="inline-block bg-terracotta text-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 rotate-[-2deg] shadow-[2px_2px_0px_#2A2321]">
              Curiosity
            </h2>
            <h3 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tighter lowercase">
              all your <br />
              <span className="text-ochre">questions,</span>
              <br />
              answered.
            </h3>
            <p className="mt-6 text-espresso/70 font-bold border-l-4 border-ochre pl-4 text-sm">
              If you don&apos;t see your question here, reach out via{' '}
              <a href="#contact" className="text-terracotta underline underline-offset-2">
                contact
              </a>
              .
            </p>
          </div>
        </div>

        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border-4 border-espresso transition-all duration-300 ${
                  isOpen
                    ? 'bg-sand shadow-[8px_8px_0px_#2A2321]'
                    : 'bg-cream hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2A2321]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-6 flex justify-between items-start gap-4 text-left group"
                >
                  <span
                    className={`font-serif font-extrabold text-lg sm:text-2xl md:text-3xl lowercase pr-2 sm:pr-6 transition-colors duration-300 min-w-0 ${
                      isOpen ? 'text-terracotta' : 'text-espresso'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 border-2 border-espresso bg-ochre flex items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'group-hover:scale-110'
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={20} strokeWidth={3} className="text-espresso" />
                    ) : (
                      <Plus size={20} strokeWidth={3} className="text-espresso" />
                    )}
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
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-ochre"></div>
                          <div className="w-2 h-2 rounded-full bg-terracotta"></div>
                        </div>
                        <p className="text-espresso font-medium leading-relaxed max-w-xl text-md">{faq.answer}</p>
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
