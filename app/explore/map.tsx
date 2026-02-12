"use client";

import { MapContainer, TileLayer, CircleMarker, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { places, venues, categories, type Category } from "./data";

const starIcon = L.divIcon({
  html: `<svg width="32" height="32" viewBox="0 0 24 24" fill="#D4AF37" stroke="#fff" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

const diamondIcon = L.divIcon({
  html: `<svg width="26" height="26" viewBox="0 0 24 24" fill="#659eb2" stroke="#fff" stroke-width="1.5"><path d="M12 2l10 10-10 10L2 12z"/></svg>`,
  className: "",
  iconSize: [26, 26],
  iconAnchor: [13, 13],
  popupAnchor: [0, -13],
});

export default function ExploreMap() {
  const [activeCategories, setActiveCategories] = useState<Set<Category>>(
    new Set(categories.map((c) => c.id)),
  );

  const allCategories = new Set(categories.map((c) => c.id));

  const toggleCategory = (id: Category) => {
    setActiveCategories((prev) => {
      // If this is already the only active one, show all
      if (prev.size === 1 && prev.has(id)) return new Set(allCategories);
      // Otherwise, show only this one
      return new Set([id]);
    });
  };

  const filteredPlaces = places.filter((p) =>
    activeCategories.has(p.category),
  );

  const getCategoryColor = (cat: Category) =>
    categories.find((c) => c.id === cat)?.color || "#999";

  return (
    <div>
      {/* Venue legend */}
      <div className="flex justify-center gap-6 mb-3">
        <div className="flex items-center gap-1.5 text-sm font-['Almarai'] text-gray-700">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="0.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Wedding Venue
        </div>
        <div className="flex items-center gap-1.5 text-sm font-['Almarai'] text-gray-700">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#659eb2" stroke="#659eb2" strokeWidth="0.5"><path d="M12 2l10 10-10 10L2 12z"/></svg>
          Welcome Party
        </div>
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {categories.map((cat) => {
          const isActive = activeCategories.has(cat.id);
          const count = places.filter((p) => p.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-['Almarai'] transition-all cursor-pointer ${
                isActive
                  ? "text-white shadow-sm"
                  : "text-gray-400 border border-gray-300"
              }`}
              style={
                isActive ? { backgroundColor: cat.color } : { backgroundColor: "white" }
              }
            >
              {cat.label}
              <span
                className={`text-xs ${isActive ? "text-white/70" : "text-gray-300"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Map */}
      <div
        className="rounded-lg overflow-hidden shadow-lg explore-map"
        style={{ height: "65vh", minHeight: "400px" }}
      >
        <style>{`
          .explore-map .leaflet-popup-content-wrapper {
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.12);
            font-family: 'Almarai', sans-serif;
          }
          .explore-map .leaflet-popup-content {
            margin: 14px 16px;
            font-size: 14px;
            line-height: 1.5;
          }
          .explore-map .leaflet-popup-tip {
            box-shadow: 0 4px 20px rgba(0,0,0,0.12);
          }
        `}</style>
        <MapContainer
          center={[41.055, 29.01]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {venues.map((venue) => (
            <Marker
              key={venue.type}
              position={[venue.lat, venue.lng]}
              icon={venue.type === "wedding" ? starIcon : diamondIcon}
              zIndexOffset={1000}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <div
                    className="font-bold text-base text-gray-900"
                    style={{ fontFamily: "'Alice', serif" }}
                  >
                    {venue.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {venue.neighborhood}
                  </div>
                  <div className="text-gray-600 mt-2 text-sm font-semibold">
                    {venue.description}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
          {filteredPlaces.map((place, i) => (
            <CircleMarker
              key={`${place.category}-${place.name}-${i}`}
              center={[place.lat, place.lng]}
              radius={7}
              fillColor={getCategoryColor(place.category)}
              fillOpacity={0.85}
              stroke={true}
              weight={2}
              color="#ffffff"
            >
              <Popup>
                <div className="min-w-[180px]">
                  <div
                    className="font-bold text-base text-gray-900"
                    style={{ fontFamily: "'Alice', serif" }}
                  >
                    {place.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-xs text-gray-500">
                      {place.neighborhood}
                    </span>
                    {place.subcategory && (
                      <span
                        className="px-1.5 py-0.5 rounded-full text-white text-[10px] leading-tight"
                        style={{
                          backgroundColor: getCategoryColor(place.category),
                        }}
                      >
                        {place.subcategory}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {place.description}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
