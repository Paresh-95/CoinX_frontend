import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TrendingUp, AlertCircle, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';


function App() {
  const [popularCoins, setPopularCoins] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch popular coins
        const popularResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 8,
              page: 1,
              sparkline: true,
              price_change_percentage: '24h'
            }
          }
        );
        setPopularCoins(popularResponse.data);

        // Fetch trending coins
        const trendingResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'volume_desc',
              per_page: 8,
              page: 1,
              sparkline: true,
              price_change_percentage: '24h'
            }
          }
        );
        setTrendingCoins(trendingResponse.data);
      } catch (err) {
        setError('Failed to fetch coin data. Please try again later.');
        console.error('Error fetching coins:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderSparkline = (prices, isPositive) => {
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const range = max - min;
    const height = 50;
    const width = 160;
    
    const points = prices.map((price, i) => {
      const x = (i / (prices.length - 1)) * width;
      const y = height - ((price - min) / range) * height;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={width} height={height} className="overflow-visible">
        <polyline
          points={points}
          fill="none"
          stroke={isPositive ? '#10B981' : '#EF4444'}
          strokeWidth="1.5"
          className="transition-all duration-300"
        />
      </svg>
    );
  };

  const CoinSection = ({ title, coins }) => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 border border-gray-200"
            disabled
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 border border-gray-200"
            disabled
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {coins.map((coin) => {
          const isPositive = coin.price_change_percentage_24h >= 0;
          return (
            <div
              key={coin.id}
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-6 h-6"
                  />
                  <span className="font-medium text-gray-900">{coin.symbol.toUpperCase()}</span>
                  <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-xl font-semibold text-gray-900">
                  ${coin.current_price.toLocaleString()}
                </p>
              </div>
              <div className="mt-2">
                {renderSparkline(coin.sparkline_in_7d.price, isPositive)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading market data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 p-4 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Crypto Market</h1>
        </div>

        <CoinSection title="You May Also Like" coins={popularCoins} />
        <CoinSection title="Trending Coins" coins={trendingCoins} />
      </div>
    </div>
  );
}

export default App;