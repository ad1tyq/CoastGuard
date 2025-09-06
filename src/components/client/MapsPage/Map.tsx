// Maps.tsx
"use client"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useState } from "react";
import { allDisasters } from "../../../../data/DisasterDataUtils";
import DisasterDetails from "./DisasterDetails";
import DisasterLegend from "./DisasterLegend";
import { Disaster } from "../../../../data/DisasterTypes";
import { useLegend } from "@/contexts/LegendFilterContext";

const containerStyle = {
    width: "100%",
    height: "500px",
};

const center = {
    lat: 20.5937, // Center of India
    lng: 78.9629,
};

// Colors for different disaster types
const disasterColors = {
  cyclone: "#FF0000", // Red
  flood: "#0000FF",   // Blue
  tsunami: "#00FF00", // Green
};

export default function Map() {
    const [selectedDisaster, setSelectedDisaster] = useState<Disaster | null>(null);
    const { Legend } = useLegend();
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyD0YM7rdaGdfeFKT71OJnNZiRU7cW9j4z0',
        libraries: ['visualization'],
    })

    if (!isLoaded) {
        return (
            <div className="w-[60vw] h-[10rem] bg-gray-200 shadow-lg">
                <h1 className="font-semibold text-lg">Loading...Please Wait!</h1>
            </div>
        )
    }

    const handleMarkerClick = (disaster: Disaster) => {
        setSelectedDisaster(disaster);
    };

    const filteredDisasters =
        Legend.includes("all")
            ? allDisasters
            : allDisasters.filter((d) => Legend.includes(d.type));


    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={5}
                >
                    {filteredDisasters.map((disaster) => (
                        <Marker
                            key={`${disaster.type}-${disaster.id}`}
                            position={{ lat: disaster.latitude, lng: disaster.longitude }}
                            icon={{
                                path: google.maps.SymbolPath.CIRCLE,
                                fillColor: disasterColors[disaster.type],
                                fillOpacity: 0.8,
                                strokeWeight: 0,
                                scale: 8,
                            }}
                            onClick={() => handleMarkerClick(disaster)}
                        />
                    ))}
                    <DisasterLegend />
                </GoogleMap>
            </div>
            <div className="w-full md:w-1/3">
                <DisasterDetails disaster={selectedDisaster} />
            </div>
        </div>
    );
}