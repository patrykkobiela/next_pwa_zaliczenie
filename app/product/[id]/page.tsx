'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Produkt nie znaleziony</h1>
        <Link href="/" className="text-allegro-orange hover:underline">
          Powrót do strony głównej
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    router.push('/cart');
  };

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-allegro-orange">Strona główna</Link>
            <span>›</span>
            <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-allegro-orange">{product.category}</Link>
            <span>›</span>
            <span className="text-gray-900 line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6">
              <div className="relative h-96 lg:h-[600px] bg-gray-50 rounded-lg mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                {product.smart && (
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-sm font-bold px-3 py-2 rounded">
                    SMART!
                  </div>
                )}
                {discount > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-2 rounded">
                    -{discount}%
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <button className="text-allegro-orange hover:underline flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Dodaj do obserwowanych
                </button>
                <button className="text-gray-600 hover:underline flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Udostępnij
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Szczegóły produktu</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex border-b pb-2">
                  <span className="font-semibold w-40">Stan:</span>
                  <span>{product.condition === 'new' ? 'Nowy' : 'Używany'}</span>
                </div>
                <div className="flex border-b pb-2">
                  <span className="font-semibold w-40">Kategoria:</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex border-b pb-2">
                  <span className="font-semibold w-40">Lokalizacja:</span>
                  <span>{product.location}</span>
                </div>
                <div className="flex border-b pb-2">
                  <span className="font-semibold w-40">Czas dostawy:</span>
                  <span className="text-green-600 font-semibold">
                    {product.freeDelivery ? 'Darmowa dostawa ' : 'Dostawa '}
                    {product.deliveryTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Opis</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Oceny i opinie</h2>
              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mr-4">{product.rating}</div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600">{product.reviewCount} opinii</p>
                </div>
              </div>
              <button className="text-allegro-orange hover:underline font-semibold">
                Zobacz wszystkie opinie
              </button>
            </div>
          </div>

          {/* Right - Purchase Box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="ml-1 font-semibold">{product.rating}</span>
                  <span className="ml-1 text-gray-500">({product.reviewCount})</span>
                </div>
              </div>

              {product.oldPrice && (
                <div className="text-gray-400 line-through text-lg mb-1">
                  {product.oldPrice.toFixed(2)} zł
                </div>
              )}
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {product.price.toFixed(2)} <span className="text-2xl">zł</span>
              </div>
              {discount > 0 && (
                <div className="text-red-500 font-semibold mb-4">
                  Oszczędzasz {(product.oldPrice! - product.price).toFixed(2)} zł ({discount}%)
                </div>
              )}

              {product.freeDelivery && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center text-green-700">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    <span className="font-semibold">Darmowa dostawa {product.deliveryTime}</span>
                  </div>
                </div>
              )}

              {product.smart && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center text-purple-700">
                    <span className="font-bold mr-2">SMART!</span>
                    <span className="text-sm">Darmowa dostawa i zwroty</span>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ilość:</label>
                <div className="flex items-center border border-gray-300 rounded-lg w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center border-x py-2 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-allegro-orange hover:bg-allegro-orange-dark text-white font-bold py-4 rounded-lg mb-3 transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Kup teraz
              </button>

              <button className="w-full border-2 border-allegro-orange text-allegro-orange font-bold py-4 rounded-lg hover:bg-orange-50 transition-colors">
                Dodaj do koszyka
              </button>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-gray-800 mb-3">Sprzedający:</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{product.seller}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span>Bardzo dobra opinia</span>
                    </div>
                  </div>
                  <button className="text-allegro-orange hover:underline text-sm">
                    Zobacz profil
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Program Ochrony Kupujących
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Zwrot w ciągu 30 dni
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
