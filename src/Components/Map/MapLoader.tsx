import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import { Spinner } from "../Spinner/Spinner";
import { Error } from "../Error/Error";
import { Map } from "./Map";

export const MapLoader: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY ?? "",
  });

  if (loadError) return <Error />;
  if (!isLoaded) return <Spinner />;
  return <Map />;
};
