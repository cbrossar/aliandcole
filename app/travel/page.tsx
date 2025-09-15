export default function Travel() {
  return (
    <div className="w-full min-h-screen flex">
      {/* Left Tulip Background */}
      <div 
        className="w-80 h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/travel/light-tulip-background.png')",
          backgroundSize: "cover"
        }}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 px-8 py-10" style={{ backgroundColor: "rgb(248, 245, 239)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 font-['Alice',serif] text-center">Where to Stay</h2>
          <p className="text-center max-w-2xl mb-8 font-['Alice',serif] mx-auto text-gray-700">
          For those coming from out of town, we recommend staying on the west side of Los Angeles in either Santa Monica or Venice Beach. This area will be close to both the welcome party on Friday and the shuttle pick up / drop off for the wedding on Saturday. LA traffic can be iconically bad, so being close to the shuttle pick up location at the Sandbourne in Santa Monica on Saturday will help ensure that you're on time for the ceremony.
          If you need some recommendations for bars or restaurants in the area - check out our rec list below!
          </p>
          
          {/* Hotel Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Ciragan Palace */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/travel/kempinski-3.avif" 
                  alt="Çırağan Palace Kempinski" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-gray-800">Çırağan Palace Kempinski</h3>
              <p className="text-sm text-left mb-4 text-gray-600">
               If you want the full experience, stay where we're getting married! The Çırağan Palace is a former Ottoman palace right on the Bosphorus, with stunning views, gardens, and plenty of history. We'll have a special room block here soon!              </p>
              <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors bg-white">
                View
              </button>
            </div>

            {/* The Stay */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/travel/stay.png" 
                  alt="The Stay hotel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-gray-800">Stay Boutique Hotel</h3>
              <p className="text-sm text-left mb-4 text-gray-600">
              A smaller, stylish spot with a modern vibe. Stay Boutique is cozy but chic, with thoughtful details and a great location for exploring the city. Perfect if you’re looking for something more laid-back but still polished.
              Check out Stay Boutique.
              </p>
              <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors bg-white">
                View
              </button>
            </div>

            {/* The Swiss Hotel */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/travel/swiss.png" 
                  alt="The Swiss Hotel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-gray-800">Swissôtel The Bosphorus</h3>
              <p className="text-sm text-left mb-4 text-gray-600">
              A classic favorite in Istanbul — Swissôtel has beautiful Bosphorus views, a huge spa, and lots of restaurants. It’s a great mix of luxury and convenience, and a wonderful home base for the weekend.
              View Swissôtel.
              </p>
              <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors bg-white">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Tulip Background */}
      <div 
        className="w-80 h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/travel/light-tulip-background.png')",
          backgroundSize: "cover"
        }}
      />
    </div>
  );
}
