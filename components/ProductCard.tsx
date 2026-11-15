
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { Button } from './ui/Button';
import { Crown, Sparkles, Ban } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const THEME_STYLES: Record<string, { gradient: string; text: string }> = {
  cyan: { gradient: 'from-cyan-900/40 via-black to-black', text: 'text-cyan-400' },
  amber: { gradient: 'from-amber-900/40 via-black to-black', text: 'text-amber-400' },
  indigo: { gradient: 'from-indigo-900/40 via-black to-black', text: 'text-indigo-400' },
  purple: { gradient: 'from-purple-900/40 via-black to-black', text: 'text-purple-400' },
  emerald: { gradient: 'from-emerald-900/40 via-black to-black', text: 'text-emerald-400' },
  default: { gradient: 'from-neutral-900/40 via-black to-black', text: 'text-white' }
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, index, onAddToCart, onViewDetails }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const styles = THEME_STYLES[product.themeColor] || THEME_STYLES.default;

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col h-full bg-neutral-900/20 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10"
      onClick={() => onViewDetails(product)}
    >
        <div className={`absolute inset-0 bg-gradient-to-b ${styles.gradient} opacity-20`}></div>

        <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-950" data-cursor-enlarge="true">
           <img 
             src={product.image} 
             alt={product.imageAlt}
             loading="lazy"
             decoding="async"
             referrerPolicy="no-referrer"
             onLoad={() => setIsLoaded(true)}
             onError={() => setIsLoaded(true)}
             className={`object-cover w-full h-full transition-all duration-1000 ${
               product.id === 'twilight' ? 'scale-[1.14] origin-top-left group-hover:scale-[1.18]' : 'group-hover:scale-105'
             } ${
               isLoaded ? (product.discontinued ? 'opacity-50 grayscale-[40%]' : 'opacity-100') : 'opacity-0'
             }`}
           />
           {!isLoaded && <div className="absolute inset-0 bg-neutral-900 animate-pulse" />}
           
           <div className="absolute inset-0 bg-black/5 transition-colors duration-700 group-hover:bg-black/20"></div>

           {/* Badges Container */}
           <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
             {product.discontinued && (
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-red-950/90 backdrop-blur-md border border-red-500/40 shadow-2xl"
                >
                    <Ban className="w-3 h-3 text-red-400" />
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-red-300">Discontinued</span>
                </motion.div>
             )}
             {product.bestSeller && (
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-600/90 backdrop-blur-md border border-amber-400/50 shadow-2xl"
                >
                    <Crown className="w-3 h-3 text-white" fill="currentColor" />
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-white">Best Seller</span>
                </motion.div>
             )}
             {product.isNew && (
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
                >
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-white">New Arrival</span>
                </motion.div>
             )}
           </div>
           
           <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2 pointer-events-none">
             <span className="text-[9px] font-bold tracking-widest uppercase border px-2 py-1 bg-black/80 border-white/15 text-white">
               Extrait de Parfum
             </span>
             <span className="text-[9px] font-bold tracking-widest uppercase border px-2 py-1 bg-black/80 border-white/15 text-neutral-300">
               50 ML
             </span>
           </div>
        </div>

        <div className="relative z-10 flex flex-col flex-grow p-6 text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 group-hover:tracking-wider transition-all duration-500">
              {product.name}
            </h3>
            <p className={`text-[10px] uppercase tracking-[0.3em] mb-4 opacity-70 font-bold ${styles.text}`}>
              {product.tagline}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
              {product.description}
            </p>
            <div className="mt-auto flex flex-col gap-4 items-center">
               <span className={`font-serif text-xl ${product.discontinued ? 'text-neutral-500 line-through' : 'text-white'}`}>
                 Rs. {product.price.toLocaleString()}
               </span>
               <div className="flex gap-2 w-full">
                  {product.discontinued ? (
                    <Button 
                      variant="outline" 
                      disabled 
                      className="flex-1 text-[9px] px-2 opacity-40 cursor-not-allowed hover:bg-transparent hover:border-white/30" 
                      onClick={(e) => { e.stopPropagation(); }}
                    >
                      Discontinued
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1 text-[9px] px-2" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
                      Add to Cart
                    </Button>
                  )}
                  <Button variant="primary" className="flex-1 text-[9px] px-2" onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}>
                    View Details
                  </Button>
               </div>
            </div>
        </div>
    </motion.article>
  );
};
