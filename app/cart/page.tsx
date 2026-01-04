'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Twój koszyk jest pusty
          </h2>
          <p className="text-gray-600 mb-8">
            Dodaj produkty do koszyka, aby kontynuować zakupy
          </p>
          <Link
            href="/"
            className="inline-block bg-allegro-orange hover:bg-allegro-orange-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Przeglądaj produkty
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Koszyk</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-6 border-b last:border-b-0"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 ml-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.seller}</p>
                  <div className="text-xl font-bold text-allegro-orange">
                    {item.price.toFixed(2)} zł
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <div className="p-6">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 font-semibold transition-colors"
              >
                Wyczyść koszyk
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Podsumowanie
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Produkty ({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
                <span>{getTotalPrice().toFixed(2)} zł</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Dostawa</span>
                <span className="text-green-600 font-semibold">GRATIS</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Razem</span>
                  <span className="text-allegro-orange">
                    {getTotalPrice().toFixed(2)} zł
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-allegro-orange hover:bg-allegro-orange-dark text-white font-bold py-3 px-6 rounded-lg transition-colors mb-3">
              Przejdź do płatności
            </button>

            <Link
              href="/"
              className="block text-center text-allegro-orange hover:text-allegro-orange-dark font-semibold transition-colors"
            >
              Kontynuuj zakupy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
