"use client"
import { GoogleMap, HeatmapLayer, useJsApiLoader } from "@react-google-maps/api"
import { heatmapCoords } from "../../../../data/heatMapData";

const containerStyle = {
    width: "100%",
    height: "500px",
};

const center = {
    lat: 26.9124, // Jaipur lat
    lng: 75.7873, // Jaipur lng
};

export default function Map() {

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

    const heatmapData = heatmapCoords.map(coord => new google.maps.LatLng(coord.lat, coord.lng));

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
        >
            <HeatmapLayer data={heatmapData} />
        </GoogleMap>
    );
}