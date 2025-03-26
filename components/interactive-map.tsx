"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"

// Fix for Leaflet marker icon issue in Next.js
const customIcon = (iconUrl: string) =>
  new Icon({
    iconUrl,
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

export default function InteractiveMap() {
  const [isMounted, setIsMounted] = useState(false)

  // Amsterdam coordinates
  const amsterdamPosition: [number, number] = [52.3676, 4.9041]

  // Netherlands bounds for initial view
  const netherlandsBounds: [[number, number], [number, number]] = [
    [50.7503, 3.37], // Southwest corner
    [53.55, 7.2275], // Northeast corner
  ]

  // Use client-side only rendering to avoid SSR issues with Leaflet
  useEffect(() => {
    // Import CSS only on client-side
    import("leaflet/dist/leaflet.css")

    // Create a script to fix the marker icon issue
    const fixLeafletIcon = () => {
      // This is needed because of how Next.js handles static assets
      delete (Icon.Default.prototype as any)._getIconUrl
      Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      })
    }

    fixLeafletIcon()
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="h-[300px] w-full bg-gray-100 flex items-center justify-center rounded-lg border border-gray-200">
        <p className="text-gray-500">Loading map...</p>
      </div>
    )
  }

  return (
    <MapContainer
      bounds={netherlandsBounds}
      zoom={7}
      style={{ height: "300px", width: "100%", borderRadius: "0.5rem" }}
      className="z-0 shadow-md border border-gray-200"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={amsterdamPosition}
        icon={customIcon("https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png")}
      >
        <Popup>
          <div className="p-1">
            <h3 className="font-semibold">Amsterdam</h3>
            <p className="text-sm">Our Netherlands office will open here in Q3 2025.</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

