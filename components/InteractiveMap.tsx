'use client';

import React from "react";
import type { Map as LeafletMap, LatLngTuple } from "leaflet";

const center: LatLngTuple = [44.4173, 26.1371];

type InteractiveMapProps = {
  variant?: "wide" | "square";
};

export default function InteractiveMap({ variant = "wide" }: InteractiveMapProps) {
  const mapRef = React.useRef<HTMLDivElement | null>(null);
  const mapInstance = React.useRef<LeafletMap | null>(null);

  React.useEffect(() => {
    let isMounted = true;
    async function initMap() {
      if (!mapRef.current || mapInstance.current) {
        return;
      }
      const L = await import("leaflet");
      if (!isMounted || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        center,
        zoom: 14,
        zoomControl: true
      });
      mapInstance.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(map);

      L.circleMarker(center, {
        radius: 10,
        color: "#00c2c7",
        fillColor: "#00c2c7",
        fillOpacity: 0.8
      })
        .addTo(map)
        .bindPopup("DentNow - Str. Ramnicu Valcea 29")
        .openPopup();
    }
    initMap();

    return () => {
      isMounted = false;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const sizeStyle =
    variant === "square"
      ? { width: "100%", aspectRatio: "1 / 1", minHeight: "280px" }
      : { width: "100%", height: "220px" };

  return (
    <div
      ref={mapRef}
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        ...sizeStyle
      }}
      aria-label="Harta interactiva cu pozitionarea clinicii"
    />
  );
}
