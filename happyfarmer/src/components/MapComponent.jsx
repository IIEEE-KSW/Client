import React, { useRef, useEffect } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export default function MapComponent({ lng, lat, zoom }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const setMap = (lng, lat) => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  };

  const handleGeoSuccess = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;
    setMap(lng, lat);
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

  return (
    <div
      ref={mapContainer}
      className='map-container'
      style={{ height: '500px' }}
    />
  );
}
