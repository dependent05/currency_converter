export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>© 2025 Обменник валют. Все права защищены.</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
            Помощь
          </button>
        </div>
      </footer>
    );
  }