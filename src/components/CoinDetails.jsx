import CoinPrice from './Coinprice'
import PriceChart from './PriceChart'
import TradingViewWidget from './TradingViewWidget'

export default function CoinDetails() {
  return (
    <div className="space-y-5">
      <CoinPrice />
      <PriceChart />
      <CoinTabs />
      <TradingViewWidget />
    </div>
  )
}

