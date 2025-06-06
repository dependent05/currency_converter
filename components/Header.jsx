import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/about"
            className="text-xl flex justify-between gap-2 items-center font-bold text-gray-900 hover:text-blue-600 transition"
          >
           <Image
          src="/logo.png"
          alt="Логотип"
          width={48}
          height={48}
          className="transition-transform group-hover:scale-110"
        />
            Конвертер валют
          </Link>
          
          <nav className="flex space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              Главная
            </Link>
            <Link href="/converter" className="text-gray-600 hover:text-blue-600">
              Конвертер
            </Link>
            <Link href="/Instructions" className="text-gray-600 hover:text-blue-600">
              Установка
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}