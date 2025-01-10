import { Info } from 'lucide-react';

export default function Sentiment() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg max-w-[1200px] mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Sentiment</h2>
      
      {/* Key Events */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold">Key Events</h3>
          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:overflow-x-auto pb-2 sm:pb-4 -mx-4 sm:mx-0 px-4 sm:px-0">
          {/* Event Card 1 */}
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[456px] flex-shrink-0 bg-blue-50 p-3 sm:p-4 rounded-lg">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-3 sm:line-clamp-none">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[456px] flex-shrink-0 bg-green-50 p-3 sm:p-4 rounded-lg">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M21 6L13 14L9 10L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-3 sm:line-clamp-none">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Estimates */}
      <div>
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold">Analyst Estimates</h3>
          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl sm:text-3xl font-bold text-green-600">76<span className="text-xl">%</span></span>
          </div>

          <div className="flex-1 w-full space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-12 sm:w-14 text-xs sm:text-sm text-gray-500">Buy</span>
              <div className="flex-1 h-2 bg-green-500 rounded"></div>
              <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-500 text-right">76%</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-12 sm:w-14 text-xs sm:text-sm text-gray-500">Hold</span>
              <div className="flex-1 h-2 bg-gray-200 rounded" style={{ width: '8%' }}></div>
              <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-500 text-right">8%</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-12 sm:w-14 text-xs sm:text-sm text-gray-500">Sell</span>
              <div className="flex-1 h-2 bg-red-500 rounded" style={{ width: '16%' }}></div>
              <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-500 text-right">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}