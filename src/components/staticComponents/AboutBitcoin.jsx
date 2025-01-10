export default function AboutBitcoin() {
    return (
      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-2xl font-semibold">About Bitcoin</h2>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">What is Bitcoin?</h3>
          <p className="text-gray-600">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ab quam. Deleniti, omnis ipsum. Nulla cumque labore dolore ipsa voluptates voluptatem distinctio sint, illum placeat nihil repellat unde quidem quis.
            </p>
            <p className="text-gray-600">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae vero ipsa odit sit ea veritatis voluptates? Consequatur aliquam, natus illum repudiandae eligendi libero commodi. Mollitia eligendi a earum aspernatur veritatis.
            </p>
            <p className="text-gray-600">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab delectus autem dignissimos magni eum placeat cupiditate dolores esse nam, natus quam amet iusto exercitationem, aliquid nisi voluptatibus nemo, minima fugiat!
            </p>
          </div>
        </div>
  
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Already Holding Bitcoin?</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg text-white">
              <div className="flex gap-4">
                <img src="/about1.png" alt="Calculate Profits" className="w-32 h-32 rounded-lg object-cover" />
                <div className="space-y-2 items-center justify-center">
                  <h4 className="text-4xl font-semibold">Calculate your Profits</h4>
                  <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2">
                    Check Now
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
  
            <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-lg text-white">
              <div className="flex gap-4">
                <img src="/about2.png" alt="Calculate Tax Liability" className="w-32 h-32 rounded-lg object-cover" />
                <div className="space-y-2">
                  <h4 className="text-3xl  font-semibold">Calculate your tax liability</h4>
                  <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2">
                    Check Now
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <p className="text-gray-600">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rerum possimus vitae ab magni sit iste porro, fuga aperiam ut odit commodi dignissimos tempora ipsam explicabo illo repellat, ex itaque!
          </p>
        </div>
      </div>
    )
  }
  
  