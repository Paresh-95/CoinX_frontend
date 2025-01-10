import { useState,useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import CoinPrice from "../components/Coinprice";
import TradingViewChart from "../components/TradingViewChart";
import TrendingCoins from "../components/TrendingCoins";
import { ArrowRight } from "lucide-react";
import PerformanceMetrics from "../components/PerformanceMetrics";
import Sentiment from "../components/staticComponents/Sentiment"
import AboutBitcoin from "../components/staticComponents/AboutBitcoin"
import Tokenomics from "../components/staticComponents/Tokenomics"
import Team from "../components/staticComponents/Team"
import TrendingCoinsBottom from "../components/staticComponents/TrendingCoinsBottom"



const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'fundamentals', label: 'Fundamentals' },
  { id: 'news-insights', label: 'News Insights' },
  { id: 'sentiments', label: 'Sentiments' },
  { id: 'team', label: 'Team' },
  { id: 'technicals', label: 'Technicals' },
  { id: 'tokenomics', label: 'Tokenomics' }
]


export default function Home() {
  const [trending, setTrending] = useState([])
  const [activeTab, setActiveTab] = useState('overview')  
  const [indicatorStyle, setIndicatorStyle] = useState({})

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
        setTrending(response.data.coins.slice(0, 3))
      } catch (error) {
        console.error('Error fetching trending coins:', error)
      }
    }

    fetchTrending()
  }, [])


  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-grow">
          <div className="text-sm text-gray-600 mb-4">
            Cryptocurrencies {">>"}{" "}
            <span className="font-bold text-gray-700">Bitcoin</span>
          </div>
          <CoinPrice />
          <TradingViewChart />

          <div className="bg-white rounded-lg shadow-sm">
          <div 
          id="tabs-container"
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-5 text-sm font-semibold whitespace-nowrap transition-colors relative
                ${activeTab === tab.id 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {tab.label}
            </button>
          ))}
          <div 
            className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300"
            style={indicatorStyle}
          />
        </div>
            <PerformanceMetrics />
            <Sentiment/>
            <AboutBitcoin/>
            <Tokenomics />
            <Team/>
      
          </div>
        </div>

        <div className="lg:w-full">
          <div className="bg-primary text-white rounded-lg p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Get Started with KoinX</h2>
            <p className="mb-4">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <div className="flex items-center justify-center m-6">
              <img src="./Frame.png" alt="frame" className="" />
            </div>
            <button className="bg-white text-black font-bold px-6 py-2 rounded-lg w-full flex items-center justify-center gap-2">
              Get Started for FREE
              <ArrowRight width={20} />
            </button>
          </div>
          <TrendingCoins trending={trending} />
        </div>
      </div>
      <TrendingCoinsBottom trending={trending}/>
    </Layout>
  );
}
