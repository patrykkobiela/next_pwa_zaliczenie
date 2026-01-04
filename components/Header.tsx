'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Heart, Menu, X, Search, User, Bell, ChevronDown, Camera, Package, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/data/categories';

export default function Header() {
  const { getTotalItems } = useCart();
  const [showCategories, setShowCategories] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-xs">
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-allegro-orange transition">Pomoc</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-gray-600 hover:text-allegro-orange transition">Zwroty</Link>
            </div>
            <div className="hidden md:flex gap-4 items-center">
              <Link href="#" className="text-gray-600 hover:text-allegro-orange transition flex items-center gap-1">
                <User className="w-3 h-3" />
                Witaj! Zaloguj się
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-gray-600 hover:text-allegro-orange transition">Zarejestruj się</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-allegro-orange via-allegro-dark to-allegro-orange bg-clip-text text-transparent">
                  allegro
                </span>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-3xl">
              <div className="relative w-full flex">
                <input
                  type="text"
                  placeholder="czego szukasz?"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-allegro-orange transition text-sm"
                />
                <div className="flex items-center gap-2 px-3 border-y-2 border-gray-300 bg-gray-50">
                  <button className="p-1.5 hover:bg-gray-100 rounded transition" title="Szukaj obrazem">
                    <Camera className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <button className="px-8 bg-allegro-orange text-white rounded-r-md hover:bg-allegro-dark transition font-medium text-sm">
                  szukaj
                </button>
              </div>
            </div>

            {/* Navigation Icons */}
            <nav className="flex items-center gap-3">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden text-gray-700 hover:text-allegro-orange transition p-2"
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Package Icon */}
              <Link href="#" className="hidden md:flex flex-col items-center text-gray-700 hover:text-allegro-orange transition p-2">
                <Package className="w-6 h-6" />
              </Link>

              {/* Heart Icon */}
              <Link href="#" className="hidden md:flex flex-col items-center text-gray-700 hover:text-allegro-orange transition p-2">
                <Heart className="w-6 h-6" />
              </Link>

              {/* Messages Icon */}
              <div className="hidden md:block relative">
                <Link href="#" className="flex flex-col items-center text-gray-700 hover:text-allegro-orange transition p-2">
                  <MessageSquare className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-allegro-orange text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    4
                  </span>
                </Link>
              </div>

              {/* Bell Icon */}
              <Link href="#" className="hidden md:flex flex-col items-center text-gray-700 hover:text-allegro-orange transition p-2">
                <Bell className="w-6 h-6" />
              </Link>

              {/* Cart */}
              <Link href="/cart" className="flex flex-col items-center text-gray-700 hover:text-allegro-orange transition p-2 relative">
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-allegro-orange text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="hidden md:block relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-1 text-gray-700 hover:text-allegro-orange transition px-3 py-2 rounded-md"
                >
                  <span className="text-sm font-medium">Patryk</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                    <div className="px-4 pb-3 border-b border-gray-200">
                      <p className="font-semibold text-gray-900">Cześć Patryk!</p>
                      <p className="text-xs text-gray-500">Klient:43597852</p>
                    </div>
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                        Moje zakupy
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                        Moja sprzedaż
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                        Allegro Smart
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                        Ustawienia
                      </Link>
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-200">
                      <Link href="#" className="block text-sm text-allegro-orange hover:text-allegro-dark transition font-medium">
                        Wyloguj się
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="relative w-full flex">
              <input
                type="text"
                placeholder="czego szukasz?"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-allegro-orange transition text-sm"
              />
              <button className="px-6 bg-allegro-orange text-white rounded-r-md hover:bg-allegro-dark transition">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center gap-1 overflow-x-auto py-2">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-allegro-orange transition rounded-md hover:bg-white whitespace-nowrap"
            >
              <Menu className="w-4 h-4" />
              Kategorie
              <ChevronDown className={`w-4 h-4 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
            </button>
            <Link 
              href="/strefaokazji" 
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-allegro-orange hover:bg-white transition rounded-md whitespace-nowrap"
            >
              🔥 Strefa Okazji
            </Link>
            <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-allegro-orange hover:bg-white transition rounded-md whitespace-nowrap">
              Allegro Ochrona Kupujących
            </Link>
            <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-allegro-orange hover:bg-white transition rounded-md whitespace-nowrap">
              💎 Gwarancja najniższej ceny
            </Link>
          </div>
        </div>
      </div>

      {/* Category Mega Menu */}
      {showCategories && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setShowCategories(false)}
          ></div>
          <div className="absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {categories.map((category) => (
                  <div key={category.id}>
                    <Link
                      href={`/?category=${category.id}`}
                      className="font-bold text-base text-gray-900 hover:text-allegro-orange transition block mb-4"
                      onClick={() => setShowCategories(false)}
                    >
                      {category.name}
                    </Link>
                    <ul className="space-y-2">
                      {category.subcategories?.slice(0, 6).map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-allegro-orange transition block"
                            onClick={() => setShowCategories(false)}
                          >
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
        </>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 py-3 text-gray-700 hover:text-allegro-orange transition border-b border-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Moje konto</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 py-3 text-gray-700 hover:text-allegro-orange transition border-b border-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              <Heart className="w-5 h-5" />
              <span>Ulubione</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 py-3 text-gray-700 hover:text-allegro-orange transition border-b border-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Koszyk ({getTotalItems()})</span>
            </Link>
            <div className="pt-4">
              <p className="text-sm font-bold text-gray-900 mb-3 px-2">Kategorie</p>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/?category=${category.id}`}
                    className="block py-2 px-2 text-sm text-gray-700 hover:text-allegro-orange hover:bg-gray-50 transition rounded"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Smart/Pay Status Bar */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-2 text-xs">
            <Link href="#" className="text-gray-600 hover:text-allegro-orange transition flex items-center gap-1">
              <span className="font-medium">Aktywuj</span>
              <span className="font-bold text-allegro-orange">Allegro Pay</span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="text-gray-600 hover:text-allegro-orange transition">
              <span className="font-medium">bądź </span>
              <span className="font-bold text-allegro-orange">Smart!</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
