
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { CONTACT_EMAIL, DISPLAY_PHONE, INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.2em] pl-[0.2em] text-white mb-4">REQUERDO</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Capturing memories in every bottle. The essence of ethereal alchemy for the modern individual.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-center gap-3">
                <span className="p-2 bg-white/5 rounded-full"><Mail className="w-4 h-4" aria-hidden="true" /></span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors" aria-label={`Email us at ${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 bg-white/5 rounded-full"><Phone className="w-4 h-4" aria-hidden="true" /></span>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors" aria-label={`Call us at ${DISPLAY_PHONE}`}>{DISPLAY_PHONE}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                aria-label="Follow Requerdo Perfumes on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={FACEBOOK_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                aria-label="Follow Requerdo Perfumes on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-neutral-600">
              Subscribe to get exclusive offers and early access to new drops.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-[10px] text-center md:text-left uppercase tracking-widest">
            © {new Date().getFullYear()} Requerdo Perfumes.
          </p>
        </div>
      </div>
    </footer>
  );
};
