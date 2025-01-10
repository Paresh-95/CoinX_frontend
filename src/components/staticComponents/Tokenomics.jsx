export default function Tokenomics() {
  return (
    <div className="bg-white p-6 rounded-lg md:block hidden">
      <h2 className="text-2xl font-semibold mb-6">Tokenomics</h2>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Initial Distribution</h3>

        <div className="flex items-center gap-8">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 36 36" width="200" height="200">
              {/* <!-- Background Circle --> */}
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#f5f5f5"
                strokeWidth="3.8"
              ></circle>

              {/* <!-- Orange Segment --> */}
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#f6a821"
                strokeWidth="3.8"
                strokeDasharray="20 80"
                strokeDashoffset="25"
              ></circle>

              {/* <!-- Blue Segment --> */}
              <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#007bff"
                strokeWidth="3.8"
                strokeDasharray="80 20"
                strokeDashoffset="5"
              ></circle>
            </svg>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
}
