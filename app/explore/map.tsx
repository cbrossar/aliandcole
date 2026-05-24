"use client";

import { MapContainer, TileLayer, CircleMarker, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useCallback, useRef, useEffect } from "react";
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

function LocateButton({
  onLocate,
}: {
  onLocate: (lat: number, lng: number) => void;
}) {
  const map = useMap();
  const [locating, setLocating] = useState(false);

  const handleClick = useCallback(() => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        onLocate(latitude, longitude);
        map.flyTo([latitude, longitude], 14);
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }, [map, onLocate]);

  return (
    <button
      onClick={handleClick}
      disabled={locating}
      className="absolute top-3 right-3 z-[1000] bg-white rounded-lg shadow-md px-3 py-2 text-sm font-['Almarai'] text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={locating ? "animate-pulse" : ""}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
      {locating ? "Locating..." : "My Location"}
    </button>
  );
}

function FlyToSelected({
  selected,
  markerRefs,
}: {
  selected: { lat: number; lng: number; key: string } | null;
  markerRefs: React.MutableRefObject<Map<string, L.CircleMarker>>;
}) {
  const map = useMap();
  useEffect(() => {
    if (!selected) return;
    map.flyTo([selected.lat, selected.lng], 15, { duration: 0.6 });
    const marker = markerRefs.current.get(selected.key);
    if (marker) {
      const open = () => marker.openPopup();
      const t = setTimeout(open, 650);
      return () => clearTimeout(t);
    }
  }, [selected, map, markerRefs]);
  return null;
}

const userLocationIcon = L.divIcon({
  html: `<div style="width:14px;height:14px;background:#4285F4;border:3px solid white;border-radius:50%;box-shadow:0 0 0 2px rgba(66,133,244,0.3),0 0 8px rgba(66,133,244,0.4);"></div>`,
  className: "",
  iconSize: [14, 14],
  iconAnchor: [7, 7],
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

  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  const filteredPlaces = places.filter((p) =>
    activeCategories.has(p.category),
  );

  const markerRefs = useRef<Map<string, L.CircleMarker>>(new Map());
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<{
    lat: number;
    lng: number;
    key: string;
  } | null>(null);

  const placeKey = (p: (typeof places)[number]) =>
    `${p.category}-${p.name}-${p.lat}-${p.lng}`;

  const handleSelectPlace = (p: (typeof places)[number]) => {
    const key = placeKey(p);
    setSelected({ lat: p.lat, lng: p.lng, key });
    mapWrapperRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const getCategoryColor = (cat: Category) =>
    categories.find((c) => c.id === cat)?.color || "#999";

  const mapsUrl = (name: string, neighborhood: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " " + neighborhood + " Istanbul")}`;

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
        ref={mapWrapperRef}
        className="rounded-lg overflow-hidden shadow-lg explore-map relative"
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
          <LocateButton onLocate={(lat, lng) => setUserLocation([lat, lng])} />
          <FlyToSelected selected={selected} markerRefs={markerRefs} />
          {userLocation && (
            <Marker position={userLocation} icon={userLocationIcon} zIndexOffset={2000}>
              <Popup>
                <span className="font-['Almarai'] text-sm">You are here</span>
              </Popup>
            </Marker>
          )}
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
                  <a
                    href={mapsUrl(venue.name, venue.neighborhood)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#659eb2] hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
          {filteredPlaces.map((place, i) => {
            const key = placeKey(place);
            return (
            <CircleMarker
              key={`${key}-${i}`}
              center={[place.lat, place.lng]}
              radius={7}
              fillColor={getCategoryColor(place.category)}
              fillOpacity={0.85}
              stroke={true}
              weight={2}
              color="#ffffff"
              ref={(ref) => {
                if (ref) markerRefs.current.set(key, ref);
                else markerRefs.current.delete(key);
              }}
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
                  <a
                    href={mapsUrl(place.name, place.neighborhood)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#659eb2] hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </Popup>
            </CircleMarker>
            );
          })}
        </MapContainer>
      </div>

      {/* List of places below map, grouped by category */}
      <div className="mt-8 space-y-8">
        {categories
          .filter((cat) => activeCategories.has(cat.id))
          .map((cat) => {
            const placesInCat = filteredPlaces.filter(
              (p) => p.category === cat.id,
            );
            if (placesInCat.length === 0) return null;
            return (
              <div key={cat.id}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <h2
                    className="text-xl font-['Alice',serif] font-bold"
                    style={{ color: cat.color }}
                  >
                    {cat.label}
                  </h2>
                  <span className="text-sm text-gray-400 font-['Almarai']">
                    ({placesInCat.length})
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {placesInCat.map((place, i) => {
                    const key = placeKey(place);
                    const isSelected = selected?.key === key;
                    return (
                    <li key={`${key}-${i}`}>
                      <button
                        type="button"
                        onClick={() => handleSelectPlace(place)}
                        className={`w-full text-left rounded-lg border bg-white p-4 hover:shadow-md transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#659eb2] shadow-md ring-2 ring-[#659eb2]/20"
                            : "border-gray-200"
                        }`}
                      >
                        <div
                          className="font-bold text-base text-gray-900"
                          style={{ fontFamily: "'Alice', serif" }}
                        >
                          {place.name}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                          {place.neighborhood && (
                            <span className="text-xs text-gray-500 font-['Almarai']">
                              {place.neighborhood}
                            </span>
                          )}
                          {place.subcategory && (
                            <span
                              className="px-1.5 py-0.5 rounded-full text-white text-[10px] leading-tight"
                              style={{ backgroundColor: cat.color }}
                            >
                              {place.subcategory}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed font-['Almarai']">
                          {place.description}
                        </p>
                        <a
                          href={mapsUrl(place.name, place.neighborhood)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block mt-2 text-xs text-[#659eb2] hover:underline font-['Almarai']"
                        >
                          Open in Google Maps &rarr;
                        </a>
                      </button>
                    </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}
