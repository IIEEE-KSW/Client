import React, { useRef, useEffect } from 'react';
import Map from 'react-map-gl';

export default function MapComponent({ lng, lat, zoom }) {
  return (
    <Map
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: zoom,
      }}
      style={{ height: '500px' }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
    />
  );
}
