
import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { CartItem } from '../types';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onNavigate: (key: string) => void;
}

export const Cart: React.FC<CartProps> = ({ cart, onUpdateQuantity, onRemove, onNavigate }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleCheckout = () => {
    // Construct WhatsApp Message
    let message = "Hello Requerdo Perfumes, I would like to place an order:\n\n";
    cart.forEach(item => {
      message += `• ${item.name} (50ml) x${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\nTotal: Rs. ${subtotal.toLocaleString()}`;
    message += `\n\nPlease confirm my order.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20 h-screen w-full overflow-y-auto bg-black flex flex-col">
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full"
       >
          <h1 className="font-serif text-4xl text-white mb-12">Your Selection</h1>
          
          {cart.length === 0 ? (
            <div className="text-center py-20 border border-white/10 bg-neutral-900/20">
              <p className="text-neutral-400 mb-6">Your cart is empty.</p>
              <Button onClick={() => onNavigate('collection')} variant="outline">
                 Browse Collection
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-white/10 bg-neutral-900/30">
                    <div className="w-20 h-20 bg-neutral-800 flex-shrink-0">
                       <img 
                          src={item.image.replace('&sz=w800', '&sz=w200')} 
                          alt={item.name} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-80" 
                       />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg text-white">{item.name}</h3>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">50 ML • Extrait de Parfum</p>
                      <p className="text-sm text-neutral-300 mt-1">Rs. {item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-black border border-white/10 px-2 py-1">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:text-white text-neutral-500">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:text-white text-neutral-500">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button onClick={() => onRemove(item.id)} className="p-2 hover:text-red-400 text-neutral-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8 flex flex-col items-end">
                 <div className="flex justify-between w-full md:w-80 mb-4 text-sm">
                    <span className="text-neutral-400">Subtotal</span>
                    <span className="text-white">Rs. {subtotal.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between w-full md:w-80 mb-4 text-sm">
                    <span className="text-neutral-400">Shipping</span>
                    <span className="text-neutral-500 text-xs italic">Calculated at checkout</span>
                 </div>
                 <div className="flex justify-between w-full md:w-80 mb-8 text-xl font-serif">
                    <span className="text-white">Total</span>
                    <span className="text-white">Rs. {subtotal.toLocaleString()}</span>
                 </div>
                 
                 <Button onClick={handleCheckout} className="w-full md:w-80 flex justify-center items-center gap-2">
                    Proceed to WhatsApp <ArrowRight className="w-4 h-4" />
                 </Button>
              </div>
            </div>
          )}
       </motion.div>
       <Footer />
    </div>
  );
};
