'use client';

import dynamic from "next/dynamic";
import React from "react";

// Încărcăm harta Leaflet doar în browser, ca să evităm erorile de SSR.
const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#e5f7ff]" />,
});

export default function ClinicMap() {
  return (
    <div className="w-full h-full">
      <LeafletMapInner />
    </div>
  );
}

