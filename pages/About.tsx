
import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Globe, FlaskConical, Gem, ShieldCheck, Award } from 'lucide-react';

const PROCESS_STEPS = [
  { 
    icon: Globe, 
    title: 'Sourcing', 
    desc: 'Hand-picked ingredients from around the world to ensure global standards.' 
  },
  { 
    icon: FlaskConical, 
    title: 'Blending', 
    desc: 'Matured for months in controlled environments to achieve perfect harmony.' 
  },
  { 
    icon: Gem, 
    title: 'Bottling', 
    desc: 'Packaged with care in our signature sleek vessels, ready for you.' 
  }
];

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    title: 'IFRA Compliant',
    desc: 'Adherence to International Fragrance Association safety standards and regulations.'
  },
  {
    icon: Award,
    title: 'ISO Certified Ingredients',
    desc: 'Exclusively using premium ingredients that meet international quality management certifications.'
  }
];

export const About: React.FC = () => {
  return (
    <div className="pt-20 h-screen w-full overflow-y-auto bg-black flex flex-col scroll-smooth">
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="flex-grow"
       >
          {/* Story Hero */}
          <div className="relative py-32 px-6 max-w-7xl mx-auto text-center bg-black">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tight"
             >
               The Journey
             </motion.h1>
             <p className="text-neutral-500 max-w-xl mx-auto text-lg md:text-xl font-light italic tracking-wide">
               "Capturing the ethereal, one bottle at a time."
             </p>
          </div>
          
          <AboutSection />
          
          {/* Process Section - Seamlessly integrated with same BG */}
          <section className="py-32 relative bg-black">
             {/* Subtle Divider for blending */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-white/5"></div>
             
             <div className="max-w-5xl mx-auto px-6 text-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-16">The Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {PROCESS_STEPS.map((step, idx) => (
                     <div key={idx} className="p-10 border border-white/[0.05] bg-neutral-900/10 backdrop-blur-sm transition-none">
                        <step.icon className="w-10 h-10 text-white/40 mx-auto mb-8" strokeWidth={1} />
                        <h4 className="text-white font-serif text-2xl mb-4">{step.title}</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed font-light">{step.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* New Certifications Section - Seamlessly integrated with light glow */}
          <section className="py-32 relative bg-black">
             {/* Subtle Radial Gradient to create a "glow" behind the certifications */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
             
             <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-12 block font-bold">Standards & Quality</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
                   {CERTIFICATIONS.map((cert, idx) => (
                     <div key={idx} className="p-12 border border-white/[0.03] bg-neutral-950 flex flex-col items-center transition-none">
                        <cert.icon className="w-12 h-12 text-white/80 mb-8" strokeWidth={1.5} />
                        <h4 className="text-white font-serif text-2xl mb-4 tracking-wide">{cert.title}</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed font-light">{cert.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </section>
       </motion.div>
       <Footer />
    </div>
  );
};
