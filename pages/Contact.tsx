
import React from 'react';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, CONTACT_EMAIL, DISPLAY_PHONE } from '../constants';

const CONTACT_INFO = [
  { icon: User, label: 'Founder and Creative Director', value: 'Muhammad Aayan Anis', href: null },
  { icon: Phone, label: 'Phone', value: DISPLAY_PHONE, href: `tel:+${WHATSAPP_NUMBER}` },
  { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }
];

export const Contact: React.FC = () => {

  const handleWhatsAppClick = () => {
     const message = "Hello, I have a question about Requerdo Perfumes.";
     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
     window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20 h-screen w-full overflow-y-auto bg-black flex flex-col">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="flex-grow max-w-7xl mx-auto px-6 py-20 w-full flex flex-col items-center"
       >
          <div className="text-center mb-16">
             <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Get in Touch</h1>
             <p className="text-neutral-400 max-w-xl mx-auto text-lg font-light">
               We believe in direct connection. No automated bots, just us.
             </p>
          </div>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900/30 border border-white/10 p-10 rounded-sm">
             
             {/* Main Action */}
             <div className="flex flex-col justify-center items-start space-y-6">
                <h3 className="font-serif text-3xl text-white">Chat with us</h3>
                <p className="text-neutral-400 leading-relaxed">
                   The fastest way to reach us. Whether you want to customize an order, ask about ingredients, or track your shipment.
                </p>
                
                <button 
                  onClick={handleWhatsAppClick} 
                  className="px-8 py-4 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/20 hover:border-white font-serif uppercase tracking-widest text-sm font-bold flex items-center gap-3"
                >
                   <MessageCircle className="w-5 h-5" />
                   WhatsApp Us
                </button>
             </div>

             {/* Info List */}
             <div className="flex flex-col justify-center space-y-10 border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-10">
                {CONTACT_INFO.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                     <div className="p-3 bg-white/5 rounded-full">
                        <item.icon className="w-5 h-5 text-white" />
                     </div>
                     <div>
                        <h4 className="font-serif text-lg text-white mb-1">{item.label}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-neutral-400 hover:text-white transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-neutral-400">{item.value}</p>
                        )}
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </motion.div>
       <Footer />
    </div>
  );
};
