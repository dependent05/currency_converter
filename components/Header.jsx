'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/about"
            className="text-xl flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="Логотип"
              width={48}
              height={48}
              className="transition-transform hover:scale-110"
            />
            <span className="hidden sm:inline">Конвертер валют</span>
            <span className="sm:hidden">Конвертер</span>
          </Link>
          
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
              Главная
            </Link>
            <Link href="/converter" className="text-gray-600 hover:text-blue-600 transition">
              Конвертер
            </Link>
            <Link href="/Instructions" className="text-gray-600 hover:text-blue-600 transition">
              Установка
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Открыть меню"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-48 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
              onClick={closeMenu}
            >
              Главная
            </Link>
            <Link 
              href="/converter" 
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
              onClick={closeMenu}
            >
              Конвертер
            </Link>
            <Link 
              href="/Instructions" 
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
              onClick={closeMenu}
            >
              Установка
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}