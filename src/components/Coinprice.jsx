import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CoinPrice() {
  const [priceData, setPriceData] = useState(null)
  
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        )
        setPriceData(response.data.bitcoin)
      } catch (error) {
        console.error('Error fetching price:', error)
      }
    }
    
    fetchPrice()
    const interval = setInterval(fetchPrice, 30000)
    return () => clearInterval(interval)
  }, [])

  if (!priceData) return <div>Loading...</div>

  return (
  <div className="bg-white rounded-lg p-6">
    <div className="flex items-center gap-4 mb-4">
      <img src="./bitcoin.png" alt="Bitcoin" className="w-8 h-8" />
      <h1 className="text-2xl font-semibold">Bitcoin <span className="text-gray-500 text-lg">BTC</span></h1>
      <span className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm">Rank #1</span>
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold">${priceData.usd.toLocaleString()}</span>
        <div className={`flex items-center gap-1 px-2 py-1 rounded ${
          priceData.usd_24h_change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          <span className="text-sm">
            {priceData.usd_24h_change > 0 ? '▲' : '▼'} {Math.abs(priceData.usd_24h_change).toFixed(2)}%
          </span>
          <span className="text-gray-600 text-sm">(24H)</span>
        </div>
      </div>
      <div className="text-lg">
        ₹ {priceData.inr.toLocaleString()}
      </div>
    </div>
  </div>
)
}

