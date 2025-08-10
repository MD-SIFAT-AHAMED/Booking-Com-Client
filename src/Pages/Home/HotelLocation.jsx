import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";

const HotelLocation = () => {
  const position = [23.7906485, 90.412521];

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10 z-0">
      <HeaderSection
        title="Hotel Location"
        subtitle="Find the exact spot of your stay with our interactive map"
      />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "450px", width: "100%", zIndex: 0 }}
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
