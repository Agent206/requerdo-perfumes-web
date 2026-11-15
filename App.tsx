import React, { Component, useState, Suspense, lazy, ErrorInfo, ReactNode, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { PageTransition } from './components/ui/PageTransition';
import { Toast } from './components/ui/Toast';
import { CustomCursor } from './components/ui/CustomCursor';
import { CartItem, Product } from './types';
import { PRODUCTS } from './constants';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Fixed ErrorBoundary by using Component from named import and property initializers to resolve TypeScript inheritance errors
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Explicitly define state property to ensure TS recognition
  state: ErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(): ErrorBoundaryState { 
    return { hasError: true }; 
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) { 
    console.error("Requerdo Crash:", error, errorInfo); 
  }

  render() {
    // Correctly accessing state inherited from Component
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen bg-black flex flex-col items-center justify-center p-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4 italic">Something unexpected happened.</h2>
          <button onClick={() => window.location.reload()} className="text-xs uppercase tracking-widest text-neutral-500 border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
            Reload Experience
          </button>
        </div>
      );
    }
    // Correctly accessing props inherited from Component
    return this.props.children;
  }
}

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(m => ({ default: m.ProductDetail })));

type PageType = 'home' | 'about' | 'contact' | 'cart' | 'product' | 'collection';
const MAX_ITEMS_PER_PERSON = 5;

function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Sync state with URL hash
  const parseHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '') || 'home';
    
    if (hash.startsWith('product/')) {
      const productId = hash.split('/')[1];
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        setActivePage('product');
      } else {
        setActivePage('home');
      }
    } else if (['home', 'about', 'contact', 'cart', 'collection'].includes(hash)) {
      setActivePage(hash as PageType);
    } else {
      setActivePage('home');
    }
  }, []);

  useEffect(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, [parseHash]);

  const transitionTo = (page: PageType, productId?: string) => {
    setIsTransitioning(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const newHash = productId ? `product/${productId}` : page;
      window.location.hash = newHash;
      setIsTransitioning(false);
    }, 1200);
  };

  const handleNavigate = (key: string) => {
    if (key === 'collection') {
       if (activePage === 'home') {
          window.dispatchEvent(new CustomEvent('scrollToCollection'));
       } else {
          transitionTo('home');
          // Wait for hash change and component mount
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('scrollToCollection'));
          }, 1300);
       }
       return;
    }
    transitionTo(key as PageType);
  };

  const handleViewProduct = (product: Product) => {
    transitionTo('product', product.id);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product: Product) => {
    if (cartCount >= MAX_ITEMS_PER_PERSON) {
       setNotification(`Limit reached: Max ${MAX_ITEMS_PER_PERSON} perfumes per person.`);
       return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification(`Added ${product.name} to your cart`);
  };

  const updateQuantity = (id: string, delta: number) => {
    if (delta > 0 && cartCount >= MAX_ITEMS_PER_PERSON) {
      setNotification(`Limit reached: Max ${MAX_ITEMS_PER_PERSON} perfumes per person.`);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(item => item.id !== id));

  return (
    <ErrorBoundary>
      <div className="bg-black h-screen w-full overflow-hidden text-white selection:bg-white/20 selection:text-white relative">
        <CustomCursor />
        <PageTransition isTransitioning={isTransitioning} />
        
        <Navbar 
          isScrolled={isScrolled} 
          onNavigate={handleNavigate} 
          activePage={activePage}
          cartCount={cartCount}
        />
        
        <main className="h-full w-full" id="main-content">
          <Suspense fallback={<div className="h-full w-full bg-black animate-pulse" />}>
            {activePage === 'home' && (
              <Home onAddToCart={addToCart} onViewDetails={handleViewProduct} setIsScrolled={setIsScrolled} />
            )}
            {activePage === 'about' && <About />}
            {activePage === 'contact' && <Contact />}
            {activePage === 'cart' && (
              <Cart cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} onNavigate={handleNavigate} />
            )}
            {activePage === 'product' && selectedProduct && (
              <ProductDetail product={selectedProduct} onBack={() => handleNavigate('collection')} onAddToCart={addToCart} />
            )}
          </Suspense>
        </main>

        <Toast message={notification} onClose={() => setNotification(null)} />
      </div>
    </ErrorBoundary>
  );
}

export default App;