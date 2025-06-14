
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const DEFAULT_TOKEN = ""; // Optional: Fill your Mapbox public token here.
const DEFAULT_CENTER = [77.209, 28.6139]; // Example: Delhi coordinates

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>(DEFAULT_TOKEN);

  // Allow users to enter their Mapbox public token for development/demo
  useEffect(() => {
    if (!token || !mapContainer.current) return;
    // @ts-ignore - workaround for repeated renders if token changes
    if (map.current) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: DEFAULT_CENTER,
      zoom: 11,
      pitch: 45,
      attributionControl: false
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add a marker for pickup location
    new mapboxgl.Marker({ color: "#a21caf" })
      .setLngLat(DEFAULT_CENTER)
      .setPopup(new mapboxgl.Popup().setText("Pickup Location"))
      .addTo(map.current);

    // Add basic fog effect (globe style)
    map.current.on("style.load", () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.23,
      });
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [token]);

  return (
    <div className="relative w-full h-64 md:h-80 my-4 rounded-lg overflow-hidden border border-primary/30 bg-black/40">
      {!token && (
        <div className="absolute inset-0 bg-background/90 z-20 flex flex-col gap-2 items-center justify-center">
          <div className="text-sm text-muted-foreground mb-2">Enter your Mapbox public token to view the map<br />
            <a href="https://mapbox.com/" target="_blank" className="underline text-secondary">Get free on Mapbox.com</a>
          </div>
          <input
            className="px-2 py-1 rounded border bg-background w-72 text-sm"
            type="text"
            placeholder="Mapbox Public Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            autoFocus
          />
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/10 via-transparent to-transparent" />
    </div>
  );
};

export default Map;
