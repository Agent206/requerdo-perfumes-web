
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div 
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-8 left-1/2 z-[100] bg-white text-black px-6 py-4 shadow-2xl flex items-center gap-4 min-w-[320px] border-l-4 border-black"
        >
          <div className="bg-black rounded-full p-1">
             <Check className="w-3 h-3 text-white" />
          </div>
          <div>
             <p className="font-serif text-sm font-bold tracking-wide uppercase">Success</p>
             <p className="text-sm text-neutral-600">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
