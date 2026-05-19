import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const data = useLoaderData() || [];
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 font-sans">
      <div className="mb-10 text-center lg:text-left flex flex-col gap-6 lg:gap-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#033133] mb-2 tracking-tight">
            We are available in 64 districts
          </h2>
          <p className="text-[#033133] font-semibold text-sm sm:text-lg opacity-90">
            We deliver almost all over Bangladesh
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="w-full max-w-md mx-auto lg:mx-0 flex items-center relative"
        >
          <div className="w-full relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F2F4F7] text-gray-700 pl-11 pr-28 py-3 rounded-full text-sm outline-none border border-transparent focus:border-[#033133]/20 transition-all"
            />
          </div>
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 bg-[#C2EA36] hover:bg-[#b3d92b] text-[#033133] font-bold text-xs sm:text-sm px-6 rounded-full transition-all duration-200"
          >
            Search
          </button>
        </form>
      </div>

      <div className="w-full h-[400px] sm:h-[550px] lg:h-[700px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-gray-100 shadow-md relative z-10">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((service, index) => (
            <Marker
              key={index}
              position={[service.latitude, service.longitude]}
            >
              <Popup>
                <div className="p-1 min-w-[150px]">
                  <strong className="text-base text-[#033133] font-bold block mb-1 border-b border-gray-100 pb-1">
                    {service.district}
                  </strong>
                  <div className="text-xs text-gray-600 max-h-[100px] overflow-y-auto leading-relaxed">
                    <span className="font-bold text-[#033133]/80">
                      Covered Areas:
                    </span>{" "}
                    <br />
                    {service.covered_area
                      ? service.covered_area.join(", ")
                      : "N/A"}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
