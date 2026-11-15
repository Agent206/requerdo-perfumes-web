
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  themeColor: string; 
  inspiration?: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  bestSeller?: boolean;
  isNew?: boolean;
  discontinued?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CartItem extends Product {
  quantity: number;
}
