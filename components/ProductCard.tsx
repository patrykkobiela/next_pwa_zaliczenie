'use client';

import Image from 'next/image';
import Link from 'next/link';
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

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
        <div className="relative h-64 bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.smart && (
            <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
              SMART!
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-base font-normal text-gray-800 mb-2 line-clamp-2 h-12 group-hover:text-allegro-orange transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center mb-2 text-sm">
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">{product.rating}</span>
              <span className="ml-1 text-gray-400">({product.reviewCount})</span>
            </div>
          </div>

          {product.freeDelivery && (
            <div className="flex items-center text-xs text-green-600 mb-2">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              Darmowa dostawa {product.deliveryTime}
            </div>
          )}

          <div className="mb-2">
            {product.oldPrice && (
              <div className="text-sm text-gray-400 line-through">
                {product.oldPrice.toFixed(2)} zł
              </div>
            )}
            <div className="text-2xl font-bold text-gray-900">
              {product.price.toFixed(2)} <span className="text-base">zł</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className="w-full mt-3 bg-allegro-orange hover:bg-allegro-orange-dark text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </Link>
  );
}
