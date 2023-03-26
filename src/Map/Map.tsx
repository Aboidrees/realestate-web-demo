import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";
import { Spinner } from "../Spinner/Spinner";

export const MapLoader: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY ?? "",
  });

  if (loadError) return <ErrorComponent />;
  if (!isLoaded) return <Spinner />;
  return <Map />;
};

const Map = () => {
  let zoom = 4;
  let center = useMemo(() => ({ lat: 0, lng: 0 }), []);

  return (
    <GoogleMap zoom={zoom} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
};

export const ErrorComponent: React.FC = () => (
  <div className="error-component">
    <h2>Something went wrong</h2>
  </div>
);
