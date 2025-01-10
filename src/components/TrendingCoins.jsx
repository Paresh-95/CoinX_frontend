import { useState, useEffect } from 'react'
import axios from 'axios'

export default function TrendingCoinsBottom({trending}) {
  // const [trending, setTrending] = useState([])

  // useEffect(() => {
  //   const fetchTrending = async () => {
  //     try {
  //       const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
  //       setTrending(response.data.coins.slice(0, 3))
  //     } catch (error) {
  //       console.error('Error fetching trending coins:', error)
  //     }
  //   }

  //   fetchTrending()
  // }, [])

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trending.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={coin.item.small} alt={coin.item.name} className="w-6 h-6" />
              <span>{coin.item.name}</span>
            </div>
            <div className={`px-2 py-1 rounded ${
              coin.item.data.price_change_percentage_24h?.usd > 0 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {coin.item.data.price_change_percentage_24h?.usd.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

