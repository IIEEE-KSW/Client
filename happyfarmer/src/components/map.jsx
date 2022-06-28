import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';
import styled from 'styled-components';
import '../css/map.css';
import temperature from '../assets/temperature.png';
import moisture from '../assets/moisture.png';
import anemometer from '../assets/anemometer.png';
import sun from '../assets/sun.png';

// test data
const containerStyle = {
  width: '93%',
  height: '85%',
  borderRadius: '15px',
  margin: '3vh',
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
  {
    id: 5,
    name: 'K-SW',
    position: { lat: 40.4260992, lng: -86.9096536 },
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
        {markers &&
          markers.map(({ id, name, position }) => (
            <Marker
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
            >
              {activeMarker === id && (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <Container>
                    <Header>
                      <Title>Farm Data</Title>
                      <Time>2 min ago</Time>
                    </Header>
                    <Body>
                      <DataContainer>
                        <Icon src={temperature} alt='temperature icon'></Icon>
                        <Value>67 Fº</Value>
                      </DataContainer>
                      <DataContainer>
                        <Icon src={moisture} alt='moisture icon'></Icon>
                        <Value>67 Fº</Value>
                      </DataContainer>
                      <DataContainer>
                        <Icon src={anemometer} alt='anemometer icon'></Icon>
                        <Value>67 Fº</Value>
                      </DataContainer>
                      <DataContainer>
                        <Icon src={sun} alt='uv icon'></Icon>
                        <Value>67 Fº</Value>
                      </DataContainer>
                    </Body>
                  </Container>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    ) : (
      <>Looking for your location...</>
    )
  ) : (
    <></>
  );
};

export default Map;

const Container = styled.div`
  width: 170px;
  height: 100px;
  padding: 0;
  padding: 10px;

  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 88%;
  }
`;

const Header = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #65b065;
  border-bottom: 1px solid #65b065;
`;

const Title = styled.div`
  font-family: 'poppinsB';
  font-size: 14px;
`;

const Time = styled.div`
  font-family: 'poppinsL';
  font-size: 6px;
  color: #d1d1d1;
  margin-right: 2vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  height: 80%;
`;

const DataContainer = styled.div`
  padding-top: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 3.4vh;
  margin-right: 1vh;
`;

const Value = styled.span`
  font-family: 'poppinsSB';
  color: #727272;
  font-size: 16px;
`;
