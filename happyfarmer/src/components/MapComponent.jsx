import React from 'react';
import Map from 'react-map-gl';
import Markers from './Markers';

export default function MapComponent({ lng, lat, zoom, markers }) {
  return (
    <Map
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: zoom,
      }}
      style={{ height: '400px' }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
    >
      {markers.features.map((m) => (
        <Markers
          lng={m.geometry.coordinates[0]}
          lat={m.geometry.coordinates[1]}
        />
      ))}
    </Map>
  );
}
