'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { categories } from '@/data/categories';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-allegro-orange">Pobierz aplikację</Link>
              <Link href="#" className="hover:text-allegro-orange">Pomoc i kontakt</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-allegro-orange">Moje Allegro</Link>
              <Link href="#" className="hover:text-allegro-orange flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                Zaloguj się
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-3xl font-bold text-allegro-orange hover:text-allegro-orange-dark transition-colors flex-shrink-0">
            allegro
          </Link>

          <div className="flex-1 max-w-3xl">
            <div className="relative">
              <input
                type="text"
                placeholder="czego szukasz?"
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-allegro-orange"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-allegro-orange hover:bg-allegro-orange-dark text-white p-2 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <nav className="flex items-center space-x-6 flex-shrink-0">
            <Link href="/cart" className="relative hover:text-allegro-orange transition-colors flex flex-col items-center">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-allegro-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="text-xs mt-1 text-gray-700">Koszyk</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Categories bar */}
      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 overflow-x-auto py-2">
            <button 
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded whitespace-nowrap font-semibold text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>Kategorie</span>
            </button>
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="px-3 py-2 hover:bg-gray-100 rounded whitespace-nowrap text-sm text-gray-700 hover:text-allegro-orange transition-colors"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mega menu dropdown */}
      {showCategories && (
        <div className="absolute left-0 right-0 bg-white shadow-lg border-t z-40">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-5 gap-6">
              {categories.map((cat) => (
                <div key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="font-semibold text-gray-800 hover:text-allegro-orange mb-2 block">
                    {cat.icon} {cat.name}
                  </Link>
                  <ul className="space-y-1">
                    {cat.subcategories?.map((sub) => (
                      <li key={sub}>
                        <Link href="#" className="text-sm text-gray-600 hover:text-allegro-orange">
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
