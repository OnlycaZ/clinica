'use client';

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordonate DentNow din linkul de Google Maps
const center: [number, number] = [44.4136318, 26.1408659];

export default function LeafletMapInner() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      center,
      zoom: 17,
      zoomControl: false,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.circleMarker(center, {
      radius: 9,
      color: "#1fb67c",
      fillColor: "#1fb67c",
      fillOpacity: 0.95,
      weight: 3,
    })
      .addTo(map)
      .bindPopup("DentNow - Str. Louis Pasteur, nr. 1A, București");

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full" style={{ minHeight: "520px" }} />;
}

