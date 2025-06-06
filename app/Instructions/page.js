export default function Instructions () {
    return (
      <div className="flex-grow px-4 py-8 text-black bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold text-center">Инструкция по установке</h2>
          </div>
          
          <div className="p-8">
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Клонирование репозитория</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">git clone https://github.com/dependent05/currency-converter.git</code>
                </div>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Переход в директорию проекта</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">cd currency-converter</code>
                </div>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Установка зависимостей</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">npm install</code>
                </div>
                <p className="text-gray-600 mt-2 text-sm">или</p>
                <div className="bg-gray-100 p-4 rounded-lg mt-2">
                  <code className="text-sm">yarn install</code>
                </div>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Запуск приложения в режиме разработки</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">npm run dev</code>
                </div>
                <p className="text-gray-600 mt-2 text-sm">или</p>
                <div className="bg-gray-100 p-4 rounded-lg mt-2">
                  <code className="text-sm">yarn dev</code>
                </div>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Открытие в браузере</h3>
                <p className="text-gray-700 mb-4">
                  После запуска откройте браузер и перейдите по адресу:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">http://localhost:3000</code>
                </div>
              </section>
  
              <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Системные требования</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Node.js версии 18.0 или выше</li>
                  <li>• npm или yarn</li>
                  <li>• Git</li>
                  <li>• Современный веб-браузер</li>
                </ul>
              </section>
  
              <section className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Дополнительные команды</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Сборка для продакшена:</h4>
                    <div className="bg-gray-100 p-3 rounded">
                      <code className="text-sm">npm run build</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Запуск продакшен версии:</h4>
                    <div className="bg-gray-100 p-3 rounded">
                      <code className="text-sm">npm start</code>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  };