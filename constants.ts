
import { Product, NavItem } from './types';

export const WHATSAPP_NUMBER = '923101018789';
export const DISPLAY_PHONE = '+92 310 1018789';
export const CONTACT_EMAIL = 'aayan.anis08@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/requerdo_perfumes/';
export const FACEBOOK_URL = 'https://www.facebook.com/p/Requerdo-61579193813826/';

export const PRODUCTS: Product[] = [
  {
    id: 'serene',
    name: 'Serene',
    tagline: 'Radiant Elegance',
    description: 'A bright, sparkling fruity opening that blossoms into a signature fruity-floral bouquet, resting on a soft, sensual, and elegant dry-down.',
    price: 1900,
    image: '/assets/aistudio/serene_new_a886cc30.jpg',
    imageAlt: 'Serene perfume bottle - Bright fruity and floral notes',
    themeColor: 'purple',
    isNew: true,
    bestSeller: true,
    notes: {
      top: ['Passion Fruit', 'Mandarin Orange', 'Pear', 'Bergamot'],
      heart: ['Jasmine Sambac', 'Jasmine', 'Rose', 'Peony', 'Ylang-Ylang'],
      base: ['White Musk', 'Cedarwood', 'Soft Sandalwood']
    }
  },
  {
    id: 'amber-latte',
    name: 'Amber Latte',
    tagline: 'The Gourmand Masterpiece',
    inspiration: 'Hybrid Fusion of Lattafa Khamrah & GDT Bianco Latte',
    description: 'A decadent fusion of spicy warmth and creamy sweetness. The perfect companion for those who love to leave a trail of sophisticated comfort.',
    price: 2000,
    image: '/assets/aistudio/amber_latte_40ebb931.jpg',
    imageAlt: 'Amber Latte perfume bottle - Warm gourmand notes',
    themeColor: 'amber',
    isNew: true,
    notes: {
      top: ['Cinnamon', 'Sweet Caramel', 'Brown Sugar'],
      heart: ['Bourbon Vanilla', 'Creamy Milk', 'Praline', 'Orange Blossom'],
      base: ['Tonka Bean', 'Benzoin Resin', 'Sandalwood', 'Amberwood', 'Soft Musk']
    }
  },
  {
    id: 'wild-rush',
    name: 'Wild Rush',
    tagline: 'Untamed Spirit',
    inspiration: 'Sauvage EDT',
    description: 'Raw, noble, and powerful. A fragrance that captures the spirit of the open wilderness with a crisp, spicy edge.',
    price: 2000,
    image: '/assets/aistudio/wild_rush_e98cb029.jpg',
    imageAlt: 'Wild Rush perfume bottle - Fresh and spicy',
    themeColor: 'indigo',
    isNew: true,
    notes: {
      top: ['Calabrian Bergamot', 'Sichuan Pepper'],
      heart: ['Lavender', 'Pink Pepper', 'Geranium', 'Vetiver'],
      base: ['Ambroxan', 'Cedarwood', 'Labdanum']
    }
  },
  {
    id: 'bureau',
    name: 'Bureau',
    tagline: 'The Executive Choice',
    inspiration: 'Fragrance One Office for Men (Tweaked)',
    description: 'Fresh energy. Bold character. Always remembered. Start your day loud. Carry it through the night.',
    price: 2000,
    image: '/assets/aistudio/bureau_d2c05b35.jpg',
    imageAlt: 'Bureau perfume bottle - Crisp citrus and marine notes',
    themeColor: 'emerald',
    bestSeller: true,
    notes: {
      top: ['Bergamot', 'Lemon', 'Pineapple', 'Pink Pepper', 'Blackcurrant', 'Plum', 'Mandarin', 'Marine Spark'],
      heart: ['Rose', 'Geranium', 'Jasmine', 'Lily of the Valley'],
      base: ['Cedarwood', 'Patchouli', 'Ambergris', 'Tonka', 'Vanilla', 'Musk']
    }
  },
  {
    id: 'enigma',
    name: 'Enigma',
    tagline: 'Unspoken Allure',
    inspiration: 'Invictus aqua',
    description: 'Icy fresh, yet wrapped in mystery. A fragrance that’s as bold as it is unforgettable.',
    price: 1800,
    image: '/assets/aistudio/enigma_a28a9463.jpg',
    imageAlt: 'Enigma perfume bottle - Cool aquatic scent',
    themeColor: 'purple',
    notes: {
      top: ['Frozen Apple', 'Italian Lemon', 'Sicilian Bergamot'],
      heart: ['Plum', 'Orange Blossom', 'Cardamom'],
      base: ['Driftwood', 'Moss', 'Amber', 'Musk']
    }
  },
  {
    id: 'twilight',
    name: 'Twilight',
    tagline: 'Evening Magic',
    inspiration: 'MFK Baccarat Rouge 540',
    description: 'Radiant, addictive, unforgettable. A fragrance that glows like dusk and lingers like nightfall.',
    price: 2100,
    image: 'https://drive.google.com/thumbnail?id=1g4g4wn6LyQJTHXRKaM_l8aLKkxvHszvm&sz=w800',
    imageAlt: 'Twilight perfume bottle - Sweet saffron and amberwood',
    themeColor: 'indigo',
    discontinued: true,
    notes: {
      top: ['Saffron', 'Jasmine'],
      heart: ['Amberwood', 'Hedione'],
      base: ['Fir Resin', 'Sugar', 'Cedarwood', 'Oakmoss']
    }
  },
  {
    id: 'oud-majeste',
    name: 'Oud Majesté',
    tagline: 'Royal Essence',
    inspiration: 'Gissah Imperial valley',
    description: 'Powerful, refined, and unforgettable. A bold signature that commands respect.',
    price: 2200,
    image: '/assets/aistudio/oud_majeste_d54fa346.jpg',
    imageAlt: 'Oud Majeste perfume bottle - Rich oud and leather notes',
    themeColor: 'amber',
    notes: {
      top: ['Sicilian Bergamot', 'Saffron', 'Pink Pepper'],
      heart: ['Oud', 'White Amber', 'Rosemary'],
      base: ['Leather', 'Musk', 'Haitian Vetiver']
    },
    bestSeller: true
  },
  {
    id: 'aqua-noir',
    name: 'Aqua Noir',
    tagline: 'Deep Ocean Mystery',
    inspiration: 'Davidoff Cool Water',
    description: 'Freshness that strikes. Depth that stays. Fresh, bold, and undeniably masculine.',
    price: 1700,
    image: '/assets/aistudio/aqua_noir_74ac5d1e.jpg', 
    imageAlt: 'Aqua Noir perfume bottle - Deep ocean freshness',
    themeColor: 'cyan',
    notes: {
      top: ['Bergamot', 'Pineapple Leaf', 'Lavender'],
      heart: ['Red Apple', 'Dried Fruits', 'Geranium', 'Oakmoss'],
      base: ['Tonka Bean', 'Sandalwood', 'Woods']
    }
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Collection', href: 'collection' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
];
