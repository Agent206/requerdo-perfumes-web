
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden flex items-center bg-black">
      {/* Subtle light bloom for depth - creates a seamless feel */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-8 block font-bold">The Requerdo Ethos</span>
          <h2 className="font-serif text-4xl md:text-7xl text-white mb-12 leading-tight">
            Affordable Luxury, <br/><span className="italic opacity-80 text-neutral-300">Uncompromised.</span>
          </h2>
          
          <div className="space-y-8 max-w-2xl mx-auto text-neutral-400">
            <p className="leading-relaxed font-light text-lg md:text-xl">
              Requerdo Perfumes was born from a simple desire: to make high-quality, long-lasting fragrances accessible without compromising on the experience of luxury.
            </p>
            <p className="leading-relaxed font-light text-lg md:text-xl">
              Based in Pakistan, we blend local artistry with international standards. We believe that smelling expensive shouldn't have to be expensive. Our "Ethereal Alchemy" represents the magical transformation of rare ingredients into memories that last forever.
            </p>
          </div>

          <div className="mt-20 flex justify-center items-center">
            <div className="text-center">
               <h4 className="font-serif text-4xl md:text-5xl text-white mb-2 uppercase tracking-wide">Luxury</h4>
               <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] font-bold">Renditions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
