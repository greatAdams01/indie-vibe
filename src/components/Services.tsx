import React from 'react';
import { motion } from 'motion/react';
import { Mic2, Flame, Handshake, Sparkles, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Live Shows',
    description: 'Intimate, curated live sets. No barricades, pure cultural energy.',
    icon: Mic2,
    color: 'bg-cream',
    textColor: 'text-espresso'
  },
  {
    title: 'Camps',
    description: 'Immersive spaces for collaboration. A lived-in home for modern Afro-creation.',
    icon: Flame,
    color: 'bg-espresso',
    textColor: 'text-cream'
  },
  {
    title: 'Activations',
    description: 'We connect brands with the vanguard of independent music through high-energy events.',
    icon: Handshake,
    color: 'bg-terracotta',
    textColor: 'text-cream'
  },
  {
    title: 'Development',
    description: 'Guiding voices from potential to stage-readiness, referencing our roots.',
    icon: Sparkles,
    color: 'bg-ochre',
    textColor: 'text-espresso'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-sand text-espresso relative">
      {/* Background vintage texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="inline-block bg-espresso text-ochre px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 rotate-2 shadow-[2px_2px_0px_#B94B29]">
              Core Experiences
            </h2>
            <h3 className="font-serif font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter lowercase">
              the <span className="text-terracotta">architecture</span> <br />
              of our collective.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${service.color} border-4 border-espresso p-6 group hover:-translate-y-2 shadow-[8px_8px_0px_#2A2321] transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[320px] cursor-pointer`}
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 border-2 border-current shadow-[4px_4px_0px_currentColor] rounded-full ${service.textColor} ${service.textColor === 'text-cream' ? 'shadow-cream' : 'shadow-espresso'}`}>
                  <service.icon size={24} strokeWidth={2.5}/>
                </div>
                <ArrowUpRight size={32} className={`${service.textColor} opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300`} />
              </div>
              
              <div className="mt-8">
                <h4 className={`font-serif font-bold text-3xl mb-4 lowercase ${service.textColor}`}>
                  {service.title}
                </h4>
                <p className={`font-medium leading-snug text-sm ${service.textColor} opacity-90`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
