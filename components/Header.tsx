'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-allegro-orange text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-gray-100">
            Allegro
          </Link>

          <div className="flex-1 mx-8 max-w-2xl hidden md:block">
            <input
              type="text"
              placeholder="Czego szukasz?"
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-allegro-orange-dark"
            />
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="hover:text-gray-100 transition-colors"
            >
              Produkty
            </Link>
            <Link
              href="/cart"
              className="relative hover:text-gray-100 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="ml-2 hidden lg:inline">Koszyk</span>
            </Link>
          </nav>
        </div>

        <div className="mt-4 md:hidden">
          <input
            type="text"
            placeholder="Czego szukasz?"
            className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-allegro-orange-dark"
          />
        </div>
      </div>
    </header>
  );
}
