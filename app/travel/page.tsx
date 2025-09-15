export default function Travel() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-4 font-['Alice',serif] mt-10">Where to Stay</h2>
      <p className="text-center max-w-2xl mb-6 font-['Alice',serif]">
      For those coming from out of town, we recommend staying on the west side of Los Angeles in either Santa Monica or Venice Beach. This area will be close to both the welcome party on Friday and the shuttle pick up / drop off for the wedding on Saturday. LA traffic can be iconically bad, so being close to the shuttle pick up location at the Sandbourne in Santa Monica on Saturday will help ensure that you're on time for the ceremony.
If you need some recommendations for bars or restaurants in the area - check out our rec list below!
      </p>
      
      {/* Hotel Recommendations */}
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* The Ciragan Palace */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/travel/ciragan.avif" 
                alt="Ciragan Palace" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-3" style={{ color: "#9fadb1" }}>Ciragan Palace</h3>
            <p className="text-sm text-left mb-4">
              This newly renovated hotel in Istanbul. This will be the location our shuttles will leave from and return to for the wedding on Saturday.
            </p>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
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
            <h3 className="text-2xl font-serif mb-3" style={{ color: "#9fadb1" }}>The Stay</h3>
            <p className="text-sm text-left mb-4">
              Just across the street from our shuttle location, another great hotel option.
            </p>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
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
            <h3 className="text-2xl font-serif mb-3" style={{ color: "#9fadb1" }}>The Swiss Hotel</h3>
            <p className="text-sm text-left mb-4">
              Directly next to the Sandbourne, a more upscale hotel that is also newly renovated.
            </p>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
