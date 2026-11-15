
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS, INSTAGRAM_URL, FACEBOOK_URL } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (key: string) => void;
  activePage: string;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate, activePage, cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (key: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(key);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || activePage !== 'home' ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex flex-col items-center group"
          aria-label="Requerdo Perfumes Home"
        >
          <span className="font-serif text-2xl tracking-[0.3em] pl-[0.3em] font-bold text-white group-hover:text-neutral-300 transition-all duration-500 text-center">
            REQUERDO
          </span>
          <span className="text-[0.5rem] uppercase tracking-[0.5em] pl-[0.5em] text-neutral-500 group-hover:text-neutral-200 transition-colors text-center">
            Perfumes
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.href)}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                activePage === item.href ? 'text-white after:w-full' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('cart')} 
            className="relative group p-2"
            aria-label={`View Shopping Bag, ${cartCount} items`}
          >
            <ShoppingBag className={`w-5 h-5 transition-colors ${activePage === 'cart' ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-white text-black text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('cart')} 
            className="relative p-2"
            aria-label={`View Shopping Bag, ${cartCount} items`}
          >
             <ShoppingBag className="w-5 h-5 text-white" />
             {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-white text-black text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 relative z-50"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col p-8 space-y-6"
            >
              <button 
                 onClick={() => handleNavClick('home')}
                 className={`text-sm uppercase tracking-[0.3em] font-medium text-left transition-colors ${activePage === 'home' ? 'text-white' : 'text-neutral-500'}`}
              >
                Home
              </button>
              {NAV_ITEMS.map((item) => (
                <button 
                  key={item.label} 
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm uppercase tracking-[0.3em] font-medium text-left transition-colors ${activePage === item.href ? 'text-white' : 'text-neutral-500'}`}
                >
                  {item.label}
                </button>
              ))}
               <button 
                 onClick={() => handleNavClick('cart')}
                 className={`text-sm uppercase tracking-[0.3em] font-medium text-left transition-colors ${activePage === 'cart' ? 'text-white' : 'text-neutral-500'}`}
              >
                Shopping Bag ({cartCount})
              </button>
              
              <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Follow Our Journey</p>
                <div className="flex gap-6">
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Instagram
                  </a>
                  <a 
                    href={FACEBOOK_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-[10px]"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
