import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

function Map({ data }) {
  console.info(data.location_coordinates.lat, data.location_coordinates.lon);
  return (
    <MapContainer
      center={[data.location_coordinates.lat, data.location_coordinates.lon]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          data.location_coordinates.lat,
          data.location_coordinates.lon,
        ]}
      >
        <h1>toto</h1>
      </Marker>
    </MapContainer>
  );
}

export default Map;
