'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function Home() {
  const [sortBy, setSortBy] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');

  // Pobierz unikalne kategorie z produktów
  const categories = ['Wszystkie', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(p => 
    selectedCategory === 'Wszystkie' || p.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'popular': return b.reviewCount - a.reviewCount;
      default: return 0;
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-allegro-orange to-orange-400 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Witaj na Allegro!</h1>
          <p className="text-xl">Znajdź najlepsze produkty w najlepszych cenach</p>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Kategorie popularne</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'Elektronika', icon: '💻', color: 'bg-blue-100' },
              { name: 'Telefony', icon: '📱', color: 'bg-indigo-100' },
              { name: 'Gaming', icon: '🎮', color: 'bg-purple-100' },
              { name: 'RTV', icon: '📺', color: 'bg-red-100' },
              { name: 'Foto', icon: '📷', color: 'bg-yellow-100' },
              { name: 'Audio', icon: '🎧', color: 'bg-green-100' },
            ].map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`${cat.color} rounded-lg p-4 text-center cursor-pointer hover:shadow-md transition-all hover:scale-105 ${
                  selectedCategory === cat.name ? 'ring-2 ring-allegro-orange' : ''
                }`}
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-sm font-semibold text-gray-700">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Sorting */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4 flex-wrap">
              <span className="text-gray-700 font-semibold">Kategoria:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-allegro-orange text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-gray-700 font-semibold whitespace-nowrap">Sortuj:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-allegro-orange"
              >
                <option value="default">Trafność</option>
                <option value="price-asc">Cena: od najniższej</option>
                <option value="price-desc">Cena: od najwyższej</option>
                <option value="rating">Najlepiej oceniane</option>
                <option value="popular">Najpopularniejsze</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-gray-600">
            <span className="font-semibold">{sortedProducts.length}</span> produktów
            {selectedCategory !== 'Wszystkie' && (
              <span> w kategorii <span className="font-semibold">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">Nie znaleziono produktów w tej kategorii</p>
            <button
              onClick={() => setSelectedCategory('Wszystkie')}
              className="bg-allegro-orange text-white px-6 py-2 rounded-lg hover:bg-allegro-orange-dark transition-colors"
            >
              Pokaż wszystkie produkty
            </button>
          </div>
        )}

        {/* Promotional Banner Bottom */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Dołącz do Allegro Smart!</h2>
          <p className="mb-4">Darmowa dostawa i wiele innych korzyści</p>
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Sprawdź Smart!
          </button>
        </div>
      </div>
    </div>
  );
}
