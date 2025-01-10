import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import axios from "axios";

export default function PerformanceMetrics() {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Bitcoin data from CoinGecko API
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
        );
        setCoinData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="bg-white rounded-lg p-6">Loading...</div>;
  if (error)
    return <div className="bg-white rounded-lg p-6 text-red-500">{error}</div>;
  if (!coinData) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatPercentage = (percentage) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(percentage);
  };

  const calculatePercentageChange = (current, comparison) => {
    return ((current - comparison) / comparison) * 100;
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Performance</h2>

        {/* Today's Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Today's Low</span>
            <span>Today's High</span>
          </div>
          <div className="relative">
            <div className="h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
            <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <svg height="14" width="14" className="mb-1">
                  <polygon points="0,12 7,0 14,12" fill="black" />
                </svg>
                <span className="text-sm whitespace-nowrap">
                  {formatPrice(coinData.market_data.current_price.usd)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">
              {formatPrice(coinData.market_data.low_24h.usd)}
            </span>
            <span className="font-medium">
              {formatPrice(coinData.market_data.high_24h.usd)}
            </span>
          </div>
        </div>

        {/* 52W Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
          <div className="flex justify-between">
            <span className="font-medium">
              {formatPrice(coinData.market_data.low_24h.usd)}
            </span>
            <span className="font-medium">
              {formatPrice(coinData.market_data.high_24h.usd)}
            </span>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Fundamentals</h2>
          <Info className="text-gray-400 h-5 w-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {/* Left Column */}
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Bitcoin Price</span>
              <span className="font-medium">
                {formatPrice(coinData.market_data.current_price.usd)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">24h Low / 24h High</span>
              <span className="font-medium">
                {formatPrice(coinData.market_data.low_24h.usd)} /{" "}
                {formatPrice(coinData.market_data.high_24h.usd)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">7d Low / 7d High</span>
              <span className="font-medium">
                {formatPrice(coinData.market_data.low_24h.usd)} /{" "}
                {formatPrice(coinData.market_data.high_24h.usd)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Trading Volume</span>
              <span className="font-medium">
                {formatPrice(coinData.market_data.total_volume.usd)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Market Cap Rank</span>
              <span className="font-medium">#{coinData.market_cap_rank}</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Right Column */}
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Market Cap</span>
              <span className="font-medium">
                {formatPrice(coinData.market_data.market_cap.usd)}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Market Cap Dominance</span>
              <span className="font-medium">
                {formatPercentage(coinData.market_data.market_cap_percentage)}%
              </span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="text-g ray-500">Volume / Market Cap</span>
              <span className="font-medium">
                {(
                  coinData.market_data.total_volume.usd /
                  coinData.market_data.market_cap.usd
                ).toFixed(4)}
              </span>
            </div>
            <div className="flex py-3 border-b">
              <div className="flex justify-between gap-56">
                <span className="text-gray-500">All-Time High</span>

                <div className="flex flex-col items-center gap-2">
                  <span className="font-medium flex gap-2">
                    <span>{formatPrice(coinData.market_data.ath.usd)}</span>
                    <span
                      className={`${
                        coinData.market_data.ath_change_percentage.usd >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {formatPercentage(
                        coinData.market_data.ath_change_percentage.usd
                      )}
                      %
                    </span>
                  </span>

                  <div className="flex gap-2">
                    <span className="text-sm text-gray-500">
                      {new Date(
                        coinData.market_data.ath_date.usd
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex py-3 border-b">
              <div className="flex justify-between gap-56">
                <span className="text-gray-500">All-Time Low</span>

                <div className="flex flex-col items-center gap-2">
                  <span className="font-medium flex gap-2">
                    <span>{formatPrice(coinData.market_data.atl.usd)}</span>
                    <span
                      className={`${
                        coinData.market_data.atl_change_percentage.usd >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {formatPercentage(
                        coinData.market_data.atl_change_percentage.usd
                      )}
                      %
                    </span>
                  </span>

                  <div className="flex gap-2">
                    <span className="text-sm text-gray-500">
                      {new Date(
                        coinData.market_data.atl_date.usd
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
