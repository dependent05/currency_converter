'use client'
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex-grow flex items-center justify-center px-4 py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <h1 className="text-2xl font-bold text-center leading-tight">
            Привет! Это приложение сетевого конвертера валют
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <Link 
            href="/converter"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg text-center"
          >
            Открыть конвертер
          </Link>
          
          <Link 
            href="/Instructions"
            className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg text-center"
          >
            Инструкция по установке
          </Link>
        </div>
      </div>
    </main>
  );
}