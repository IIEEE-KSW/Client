import React from 'react';
import Map from 'react-map-gl';
import Markers from './Markers';

export default function MapComponent({ lng, lat, zoom, markers }) {
  console.log(lng, lat);
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
      {markers &&
        markers.map((m) => (
          <Markers
            key={m.id}
            id={m.id}
            lng={m.position.lng}
            lat={m.position.lat}
          />
        ))}
    </Map>
  );
}
