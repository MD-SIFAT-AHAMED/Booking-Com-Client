import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HotelLocation = () => {
  const position = [23.7906485, 90.412521];

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <h2 className="text-2xl text-center my-4 md:text-4xl font-bold">
        Hotel Location
      </h2>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "450px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Renaissance Dhaka Gulshan Hotel</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HotelLocation;
