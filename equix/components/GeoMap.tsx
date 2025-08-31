"use client";

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { FC } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

interface Marker {
  onClick?: () => void;
  position: Coordinates;
  title?: string;
  iconSrc?: string;
}

interface Props {
  zoom?: number;
  center?: Coordinates;
  markers?: Marker[];
  apiKey: string;
  className?: string;
}

export const GeoMap: FC<Props> = (props) => {
  const { markers, apiKey } = props;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        {...props}
        options={{
          disableDefaultUI: true,
          clickableIcons: true,
          scrollwheel: false,
          zoomControl: true,
        }}
        mapContainerStyle={{ width: "100%", height: "100%", marginTop: -8 }}
      >
        {markers?.map((marker, index) => (
          <MarkerF
            key={index}
            onClick={marker.onClick}
            position={marker.position}
            title={marker.title}
            icon={marker.iconSrc}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
