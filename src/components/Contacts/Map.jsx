import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ address }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const geocode = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=AIzaSyCbGWCbmESBUxgdzxqOF7NEogsU1ApEquQ`
        );
        const data = await response.json();
        console.log(data); // Добавлено для отладки
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setLocation({ lat, lng });
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            data.status
          );
        }
      } catch (error) {
        console.error("Error fetching geocode data:", error);
      }
    };

    geocode();
  }, [address]);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyCbGWCbmESBUxgdzxqOF7NEogsU1ApEquQ">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
