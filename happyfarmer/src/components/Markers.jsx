import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';
// import pin from '../assets/pin.png';

import './map.css';
import styled from 'styled-components';
import temperature from '../assets/temperature.png';
import humidity from '../assets/humidity.png';
import anemometer from '../assets/anemometer.png';
import uv from '../assets/uv.png';

const Markers = ({ id, lng, lat }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClickMark = (e) => {
    e.originalEvent.stopPropagation(); // If we let the click event propagates to the map, it will immediately close the popup
    setShowPopup(true);
  };

  //sensors value

  return (
    <>
      <Marker
        key={id}
        longitude={lng}
        latitude={lat}
        anchor='center'
        onClick={handleClickMark}
      >
        {/* <img src={pin} alt='pin' /> */}
        <Pin />
      </Marker>
      {showPopup && (
        <Popup
          longitude={lng}
          latitude={lat}
          anchor='bottom'
          onClose={() => setShowPopup(false)}
        >
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
                <Icon src={humidity} alt='humidity icon'></Icon>
                <Value>83 %</Value>
              </DataContainer>
              <DataContainer>
                <Icon src={anemometer} alt='anemometer icon'></Icon>
                <Value>20 ㎧</Value>
              </DataContainer>
              <DataContainer>
                <Icon src={uv} alt='uv icon'></Icon>
                <Value>67 Fº</Value>
              </DataContainer>
            </Body>
          </Container>
        </Popup>
      )}
    </>
  );
};

export default Markers;

const Container = styled.div`
  width: 170px;
  height: 100px;
  padding: 0;
  padding: 2vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 120px;
    height: 80px;
    padding: 1vh;
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
  @media screen and (max-width: 767px) and (orientation: portrait) {
  }
`;

const Title = styled.div`
  font-family: 'poppinsB';
  font-size: 14px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 12px;
  }
`;

const Time = styled.div`
  font-family: 'poppinsL';
  font-size: 6px;
  color: #d1d1d1;
  margin-right: 2vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 3px;
    margin-right: 0;
  }
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
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding-top: 0.3vh;
  }
`;

const Icon = styled.img`
  height: 3.4vh;
  margin-right: 1vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 2vh;
    margin-right: 0.6vh;
  }
`;

const Value = styled.span`
  font-family: 'poppinsSB';
  color: #727272;
  font-size: 16px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 13px;
  }
`;
