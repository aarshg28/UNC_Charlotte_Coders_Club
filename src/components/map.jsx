import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function Map(props) {
  const center = useMemo(() => props.position, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ margin: "10px", width: "100%", height: "100%" }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default Map;
