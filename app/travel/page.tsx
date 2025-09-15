export default function Travel() {
  return (
    <div className="w-full min-h-screen flex">
      {/* Left Tulip Background */}
      <div 
        className="w-80 min-h-screen bg-repeat-y bg-top"
        style={{
          backgroundImage: "url('/images/travel/light-tulip-background.png')",
          backgroundSize: "800px auto"
        }}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 px-8 py-16" style={{ backgroundColor: "rgb(248, 245, 239)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 font-['Alice',serif] text-center text-gray-800">Where to Stay</h2>
          <div className="mb-16">
            <p className="text-center max-w-3xl font-['Alice',serif] mx-auto text-gray-700 text-lg leading-relaxed">
              We&apos;ve rounded up a few hotel options in Istanbul to make your stay easy and enjoyable. All of these are on or near the Bosphorus and close to our wedding events, so you&apos;ll be right in the heart of the celebration.
            </p>
          </div>
          
          {/* Hotel Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* The Ciragan Palace */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-56 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/travel/kempinski-3.avif" 
                  alt="Çırağan Palace Kempinski" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Çırağan Palace Kempinski</h3>
              <p className="text-sm text-left mb-6 text-gray-600 leading-relaxed">
               If you want the full experience, stay where we&apos;re getting married! The Çırağan Palace is a former Ottoman palace right on the Bosphorus, with stunning views, gardens, and plenty of history. We&apos;ll have a special room block here soon!
              </p>
              <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700">
                View
              </button>
            </div>

            {/* The Stay */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-56 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/travel/stay.png" 
                  alt="The Stay hotel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Stay Boutique Hotel</h3>
              <p className="text-sm text-left mb-6 text-gray-600 leading-relaxed">
              A smaller, stylish spot with a modern vibe. Stay Boutique is cozy but chic, with thoughtful details and a great location for exploring the city. Perfect if you&apos;re looking for something more laid-back but still polished.
              Check out Stay Boutique.
              </p>
              <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700">
                View
              </button>
            </div>

            {/* The Swiss Hotel */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-56 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/travel/swiss.png" 
                  alt="The Swiss Hotel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-gray-800">Swissôtel The Bosphorus</h3>
              <p className="text-sm text-left mb-6 text-gray-600 leading-relaxed">
              A classic favorite in Istanbul — Swissôtel has beautiful Bosphorus views, a huge spa, and lots of restaurants. It&apos;s a great mix of luxury and convenience, and a wonderful home base for the weekend.
              View Swissôtel.
              </p>
              <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Tulip Background */}
      <div 
        className="w-80 min-h-screen bg-repeat-y bg-top"
        style={{
          backgroundImage: "url('/images/travel/light-tulip-background.png')",
          backgroundSize: "800px auto"
        }}
      />
    </div>
  );
}
