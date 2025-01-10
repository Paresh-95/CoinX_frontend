

import { useState, useEffect } from 'react'


export default function CoinTabs() {
  const [activeTab, setActiveTab] = useState('overview')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const [scrollPosition, setScrollPosition] = useState(0)

  // Handle scroll for mobile
  const handleScroll = (direction) => {
    const container = document.getElementById('tabs-container')
    if (container) {
      const scrollAmount = 200
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  // Update indicator position when tab changes
  useEffect(() => {
    const activeElement = document.getElementById(`tab-${activeTab}`)
    if (activeElement) {
      setIndicatorStyle({
        width: `${activeElement.offsetWidth}px`,
        transform: `translateX(${activeElement.offsetLeft}px)`
      })
    }
  }, [activeTab])

  return (
    <div className="relative border-b border-gray-200">
      <div className="max-w-full overflow-hidden relative">
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
      </div>

      {/* Scroll buttons for mobile */}
      <div className="absolute top-0 right-0 h-full flex items-center md:hidden">
        <button
          onClick={() => handleScroll('right')}
          className="p-2 bg-white shadow-md rounded-full"
          aria-label="Scroll right"
        >
          <svg 
            className="w-4 h-4 text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

