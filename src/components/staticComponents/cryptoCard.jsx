import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function CryptoCard({ symbol, name, price, change, chartColor, sparkline, thumb }) {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {thumb && (
            <img src={thumb} alt={name} className="w-6 h-6 rounded-full" />
          )}
          <span className="font-semibold text-gray-800">{symbol}</span>
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change?.toFixed(2)}%
          </span>
        </div>
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
      </div>
      <div className="text-xl font-bold text-gray-900 mb-3">
        ${price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}
      </div>
      <div className="w-full h-16">
        {sparkline ? (
          <Sparklines data={sparkline} width={100} height={30}>
            <SparklinesLine color={chartColor} />
          </Sparklines>
        ) : (
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <path
              d="M 0 15 Q 25 5, 50 20 T 100 15"
              fill="none"
              stroke={chartColor}
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    </div>
  );
}