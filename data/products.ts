export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  seller: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 6999.99,
    description: "Wydajny laptop z procesorem Intel Core i7, 16GB RAM, 512GB SSD. Idealny do pracy i rozrywki.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    category: "Elektronika",
    seller: "TechStore",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Słuchawki Sony WH-1000XM5",
    price: 1499.99,
    description: "Bezprzewodowe słuchawki z aktywną redukcją szumów. Doskonała jakość dźwięku.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
    category: "Audio",
    seller: "AudioPro",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Smartwatch Samsung Galaxy Watch 6",
    price: 1299.00,
    description: "Inteligentny zegarek z monitoringiem zdrowia, GPS i wodoodpornością.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
    category: "Elektronika",
    seller: "SmartGadgets",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Aparat Canon EOS R6",
    price: 10999.00,
    description: "Profesjonalny aparat bezlusterkowy z pełną klatką. 20MP, nagrywanie 4K.",
    image: "https://images.unsplash.com/photo-1606980707716-d6c8a0b61a9f?w=500&h=500&fit=crop",
    category: "Foto",
    seller: "FotoMax",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Tablet iPad Air",
    price: 2899.00,
    description: "Tablet Apple z ekranem Liquid Retina 10.9 cala, chip M1, 64GB.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    category: "Elektronika",
    seller: "AppleCenter",
    rating: 4.8,
  },
];
