import { useState } from 'react'

const timeframes = [
  { label: '1H', value: '1h' },
  { label: '24H', value: '24h' },
  { label: '7D', value: '7d', default: true },
  { label: '1M', value: '1m' },
  { label: '3M', value: '3m' },
  { label: '6M', value: '6m' },
  { label: '1Y', value: '1y' },
  { label: 'ALL', value: 'all' }
]

export default function PriceChart() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d')

  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Bitcoin Price Chart (USD)</h2>
        <div className="flex gap-2">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.value}
              onClick={() => setSelectedTimeframe(timeframe.value)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedTimeframe === timeframe.value
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {timeframe.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="tradingview-widget-container h-[400px]">
        <div id="tradingview_chart" className="h-full" />
      </div>
    </div>
  )
}

