// File: src/pages/Location.jsx
"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "/marker-shadow.png",
  shadowSize: [41, 41],
});

const storageUnits = [
  { id: 1, name: "Storage Unit A", lat: 28.6139, lng: 77.2090, capacity: "1000 sq.ft" },
  { id: 2, name: "Storage Unit B", lat: 28.7041, lng: 77.1025, capacity: "750 sq.ft" },
  { id: 3, name: "Storage Unit C", lat: 28.5355, lng: 77.3910, capacity: "1200 sq.ft" },
  { id: 4, name: "Storage Unit D", lat: 28.4089, lng: 77.3178, capacity: "900 sq.ft" },
];

export default function Location() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* SIDEBAR */}
      <div className="md:w-1/4 bg-white shadow-md p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Storage Units Dashboard</h2>
        <p className="text-gray-600 mb-4">Total Units: {storageUnits.length}</p>

        <ul className="space-y-3">
          {storageUnits.map((unit) => (
            <li
              key={unit.id}
              onClick={() => setSelectedUnit(unit)}
              className={`p-3 rounded-lg border cursor-pointer hover:bg-blue-50 ${
                selectedUnit?.id === unit.id ? "bg-blue-100 border-blue-400" : "border-gray-200"
              }`}
            >
              <h3 className="font-semibold">{unit.name}</h3>
              <p className="text-gray-500 text-sm">{unit.capacity}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* SINGLE MAP */}
      <div className="md:w-3/4 h-[80vh] md:h-full">
        <MapContainer
          center={[28.6139, 77.209]} // Center on first unit
          zoom={11}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* SINGLE MAP WITH MULTIPLE MARKERS */}
          {storageUnits.map((unit) => (
            <Marker
              key={unit.id}
              position={[unit.lat, unit.lng]}
              icon={markerIcon}
              eventHandlers={{
                click: () => setSelectedUnit(unit),
              }}
            >
              <Popup>
                <h3 className="font-bold">{unit.name}</h3>
                <p>Capacity: {unit.capacity}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
