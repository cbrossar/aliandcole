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
        className="text-4xl font-['Alice',serif] font-bold mb-8 mt-12"
        style={{ color: "#659eb2" }}
      >
        Explore Istanbul
      </h1>
      <div className="w-full max-w-6xl px-4">
        <ExploreMap />
      </div>
    </div>
  );
}
