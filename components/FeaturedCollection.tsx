
import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface FeaturedCollectionProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ onAddToCart, onViewDetails }) => {
  return (
    <section className="py-24 bg-black relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">The Collection</h2>
          <div className="h-[1px] w-24 bg-white/20 mx-auto mb-6"></div>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our range of meticulously crafted scents. Each bottle contains a memory, a feeling, and an unspoken story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PRODUCTS.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
