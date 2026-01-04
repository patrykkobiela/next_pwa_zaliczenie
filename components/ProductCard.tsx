'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{product.seller}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-allegro-orange">
            {product.price.toFixed(2)} zł
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-allegro-orange hover:bg-allegro-orange-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
