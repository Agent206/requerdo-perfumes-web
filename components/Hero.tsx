
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToCollection = () => {
    window.dispatchEvent(new CustomEvent('scrollToCollection'));
  };

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-40"></div>
      
      {/* Content */}
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo representation - reduced weight for main name */}
          <h1 className="font-serif text-5xl md:text-8xl font-light tracking-[0.25em] pl-[0.25em] text-white mb-6">
            REQUERDO
          </h1>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-12 bg-neutral-800"></div>
            {/* Bold PERFUMES */}
            <span className="text-xs md:text-sm uppercase tracking-[0.7em] pl-[0.7em] text-neutral-400 font-bold">Perfumes</span>
            <div className="h-[1px] w-12 bg-neutral-800"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Bold #EtherealAlchemy */}
          <p className="font-bold text-neutral-500 italic text-lg md:text-xl tracking-wider">
            #EtherealAlchemy
          </p>

          <Button 
            variant="outline" 
            className="text-[10px] tracking-[0.4em] px-10 py-4 opacity-70 hover:opacity-100"
            onClick={scrollToCollection}
          >
            Explore Collection
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/30" />
      </motion.div>
    </section>
  );
};
