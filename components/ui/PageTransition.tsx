
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  isTransitioning: boolean;
  label?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ isTransitioning, label = 'The Alchemy of Scent' }) => {
  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-white font-serif text-3xl md:text-5xl tracking-[0.4em] pl-[0.4em] font-bold text-center">
              REQUERDO
            </span>
            <div className="flex items-center gap-4 mt-3">
              <span className="h-[1px] w-6 bg-white/20"></span>
              <span className="text-[0.65rem] uppercase tracking-[0.6em] pl-[0.6em] text-neutral-400 text-center">
                {label}
              </span>
              <span className="h-[1px] w-6 bg-white/20"></span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
