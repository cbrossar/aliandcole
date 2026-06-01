"use client";

import dynamic from "next/dynamic";

const ExploreMap = dynamic(() => import("./map"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-lg bg-gray-100 animate-pulse" style={{ height: "65vh", minHeight: "400px" }} />
  ),
});

export default function Explore() {
  return (
    <div className="w-full flex flex-col items-center mb-16">
      <h1
        className="text-4xl font-['Alice',serif] font-bold mt-12 mb-2 text-center"
        style={{ color: "#659eb2" }}
      >
        Explore Istanbul
      </h1>
      <p className="font-['Almarai'] text-gray-500 text-center max-w-xl px-4 mb-8">
        A few of our favorite spots across the city — tap a category to filter the map.
      </p>
      <div className="w-full max-w-6xl px-4">
        <ExploreMap />
      </div>
    </div>
  );
}
