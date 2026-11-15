
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/Footer';
import { ArrowLeft, ShoppingBag, Send, Sparkles, Crown } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleBuyNow = () => {
    const message = `Hello Requerdo Perfumes, I'm interested in buying ${product.name} (50ml). Please guide me with the order process.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20 h-screen w-full overflow-y-auto bg-black flex flex-col">
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="flex-grow w-full max-w-7xl mx-auto px-6 py-12"
       >
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Image Section - Right */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:order-2 relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5"
            >
              <img 
                src={product.image.replace('&sz=w800', '&sz=w1200')} 
                alt={product.imageAlt}
                referrerPolicy="no-referrer"
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              {!isLoaded && <div className="absolute inset-0 bg-neutral-950 animate-pulse" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Content Section - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:order-1 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                 <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">Extrait de Parfum • 50 ML</span>
                 {product.isNew && (
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white bg-white/10 px-2 py-0.5 rounded-sm border border-white/20">
                      <Sparkles className="w-3 h-3" /> New
                    </span>
                 )}
                 {product.bestSeller && (
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-sm border border-amber-500/20">
                      <Crown className="w-3 h-3" /> Best Seller
                    </span>
                 )}
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">{product.name}</h1>
              
              {product.inspiration && (
                <div className="flex items-center gap-2 text-amber-500/80 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-bold">Inspired by: {product.inspiration}</span>
                </div>
              )}

              <p className="text-lg text-neutral-400 italic mb-8 tracking-wide">"{product.tagline}"</p>
              
              <div className="h-[1px] w-full bg-white/10 mb-8"></div>
              
              <p className="text-neutral-300 leading-relaxed mb-12 text-lg">
                {product.description}
              </p>

              <div className="grid grid-cols-1 gap-8 mb-12">
                <div>
                   <h4 className="text-white font-serif text-xl mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-white/20"></span>
                     Top Notes
                   </h4>
                   <p className="text-neutral-400 leading-relaxed">
                     {product.notes.top.join(' • ')}
                   </p>
                </div>
                <div>
                   <h4 className="text-white font-serif text-xl mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-white/40"></span>
                     Heart Notes
                   </h4>
                   <p className="text-neutral-400 leading-relaxed">
                     {product.notes.heart.join(' • ')}
                   </p>
                </div>
                <div>
                   <h4 className="text-white font-serif text-xl mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-white/60"></span>
                     Base Notes
                   </h4>
                   <p className="text-neutral-400 leading-relaxed">
                     {product.notes.base.join(' • ')}
                   </p>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-serif text-white">Rs. {product.price.toLocaleString()}</span>
                  <span className="text-neutral-500 text-sm italic">Inclusive of all taxes</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="primary" 
                    className="flex-1 flex justify-center items-center gap-2"
                    onClick={handleBuyNow}
                  >
                    <Send className="w-4 h-4" /> Buy Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 flex justify-center items-center gap-2"
                    onClick={() => onAddToCart(product)}
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
       </motion.div>
       <Footer />
    </div>
  );
};
