
import React, { useEffect, useRef } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { Footer } from '../components/Footer';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  setIsScrolled: (scrolled: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({ onAddToCart, onViewDetails, setIsScrolled }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrolledRef = useRef(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      const collectionSection = document.getElementById('collection-container');
      if (collectionSection) {
        collectionSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('scrollToCollection', handleScrollEvent);
    return () => window.removeEventListener('scrollToCollection', handleScrollEvent);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrolled = e.currentTarget.scrollTop > 50;
    if (scrolled !== lastScrolledRef.current) {
      lastScrolledRef.current = scrolled;
      setIsScrolled(scrolled);
    }
  };

  return (
    <div 
      ref={containerRef} 
      onScroll={handleScroll}
      className="h-screen w-full overflow-y-auto bg-black scroll-smooth"
    >
      <div className="h-screen w-full relative z-20">
        <Hero />
      </div>

      <div 
        id="collection-container"
        className="w-full relative z-30 bg-black"
      >
        <FeaturedCollection 
          onAddToCart={onAddToCart} 
          onViewDetails={onViewDetails}
        />
        <Footer />
      </div>
    </div>
  );
};
