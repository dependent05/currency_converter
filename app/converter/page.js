/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect } from 'react';

export default function Converter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [error, setError] = useState(null);
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'RUB', 'CNY', 'CAD', 'AUD'];

  const fetchRate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/b4b66f2de2d638b0cba1d030/latest/${fromCurrency}`
      );
      if (!res.ok) throw new Error('Ошибка получения данных');
      const data = await res.json();
      setRate(data.conversion_rates[toCurrency]);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <main className="flex-grow flex items-center justify-center px-4 py-8 bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-blue-600 p-4 text-white">
          <h2 className="text-xl font-bold text-center">Конвертер валют</h2>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <label className="block text-md text-center font-medium text-black mb-2">Сумма</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-4 border-2 border-blue-200 text-black rounded-lg text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              step="0.01"
            />
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 mr-4">
              <label className="block text-md text-center font-medium text-black mb-2">Из</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {currencies.map(currency => (
                  <option key={`from-${currency}`} value={currency}>{currency}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSwap}
              className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition self-end mb-2"
              aria-label="Поменять валюты местами"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>

            <div className="flex-1 ml-4">
              <label className="block text-md text-center font-medium text-black mb-2">В</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {currencies.map(currency => (
                  <option key={`to-${currency}`} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            {isLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center">{error}</div>
            ) : (
              <>
                <div className="text-3xl text-black font-bold text-center mb-2">
                  {amount} {fromCurrency} = {(amount * (rate || 0)).toFixed(4)} {toCurrency}
                </div>
                <div className="text-sm text-gray-500 text-center">
                  Курс: 1 {fromCurrency} = {rate?.toFixed(6) || '...'} {toCurrency}
                </div>
                {lastUpdated && (
                  <div className="text-xs text-gray-400 text-center mt-2">
                    Обновлено: {lastUpdated}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Курсы обновляются в реальном времени</p>
          </div>
        </div>
      </div>
    </main>
  );
}