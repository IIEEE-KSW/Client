import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';

// test data
const containerStyle = {
  width: '100%',
  height: '100%',
};

const markers = [
  {
    id: 1,
    name: 'Chicago, Illinois',
    position: { lat: 41.881832, lng: -87.623177 },
  },
  {
    id: 2,
    name: 'Denver, Colorado',
    position: { lat: 39.739235, lng: -104.99025 },
  },
  {
    id: 3,
    name: 'Los Angeles, California',
    position: { lat: 34.052235, lng: -118.243683 },
  },
  {
    id: 4,
    name: 'New York, New York',
    position: { lat: 40.712776, lng: -74.005974 },
  },
];

const Map = () => {
  // Get current location
  const centerRef = useRef({ lat: null, lng: null });
  const [isGeoLoaded, setIsGeoLoaded] = useState(false);

  const handleGeoSuccess = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const coordsObj = {
      lat,
      lng,
    };
    centerRef.current = coordsObj;
    setIsGeoLoaded(true);
  };

  const handleGeoError = (err) => {
    console.log(err);
  };

  useEffect(() => {
    const getGeoLoc = () => {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(
          handleGeoSuccess,
          handleGeoError
        );
      }
    };
    getGeoLoc();
  }, []);

  // Googl Map API
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(centerRef.current);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return isLoaded ? (
    isGeoLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerRef.current}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={() => setActiveMarker(null)}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    ) : (
      <>Looking for your location...</>
    )
  ) : (
    <>Map Loading...</>
  );
};

export default Map;
