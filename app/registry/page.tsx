export default function Registry() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center max-w-2xl mx-auto px-4 mt-16">
        <p className="text-lg mb-4 font-['Alice',serif]">
          Your presence on our special day is the greatest present we could ask for.
        </p>
        <p className="text-lg mb-6 font-['Alice',serif]">
          If you wish to celebrate with a gift, our registry is below.
        </p>
        <p className="text-lg font-medium font-['Alice',serif] mb-8">
          xoxo Ali & Cole
        </p>
        <a 
          href="https://www.zola.com/wedding/coleandali2026/registry" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#8E9B8E] text-white px-8 py-3 rounded-lg font-['Alice',serif] text-lg hover:bg-[#7a8a7a] transition-colors duration-200"
        >
          View Our Registry
        </a>
      </div>
    </div>
  );
}
