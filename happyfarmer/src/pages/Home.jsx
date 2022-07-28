import React, { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Search from '../components/Search';
import Graph from '../components/Graph';
import MapComponent from '../components/MapComponent';

import logo from '../assets/logo.png';
import select from '../assets/select.png';
import selectOff from '../assets/selectoff.png';

import { useSelector } from 'react-redux';
import { getStationSensor, getStation, getStationList } from '../apis/api';
import { Link } from 'react-router-dom';

function Home() {
  const stationId = useSelector(({ station }) => station.id);

  const centerRef = useRef({ lng: null, lat: null });

  const [isGeoLoaded, setIsGeoLoaded] = useState(false);

  const [options, setOptions] = useState([]);
  const [markers, setMarkers] = useState([]);

  const [toggle, setToggle] = useState(true);

  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [windSpeed, setWindSpeed] = useState([]);
  const [sunlight, setSunlight] = useState([]);

  const handleGeoSuccess = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;
    const coordsObj = {
      lng,
      lat,
    };
    centerRef.current = coordsObj;
    setIsGeoLoaded(true);
    //현재 station id저장
  };

  const handleGeoError = (err) => {
    console.log(err);
  };

  //위치 업데이트
  useEffect(() => {
    if (stationId) {
      setIsGeoLoaded(false);
      getStation(stationId).then((data) => {
        const coordsObj = {
          lat: data.location.latitude,
          lng: data.location.longitude,
        };
        centerRef.current = coordsObj;
        setIsGeoLoaded(true);
      });
    }
  }, [stationId]);

  useEffect(() => {
    //현재 위치 업데이트
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

    //station 마커 표시
    getStationList().then((data) => {
      const options = data.map((d) => ({
        value: d.id,
        label: d.location.zipCode,
      }));
      setOptions(options);

      const markers = data.map((d) => ({
        id: d.id,
        name: d.name,
        position: { lat: d.location.latitude, lng: d.location.longitude },
      }));
      setMarkers(markers);
    });
  }, []);

  useEffect(() => {
    // if (stationId) {
    //test
    const start = '2022-06-23T20:30:00';
    const end = '2022-06-25T17:45:00';
    getStationSensor(1, start, end).then((data) => {
      console.log(data);
      const temp = data.map((d) => ({
        x: d.dateTime,
        y: d.air.temperature.toFixed(0),
      }));
      const humi = data.map((d) => ({
        x: d.dateTime,
        y: d.air.humidity.toFixed(0),
      }));
      const wind = data.map((d) => ({
        x: d.dateTime,
        y: d.windSpeed.toFixed(0),
      }));
      const sun = data.map((d) => ({ x: d.dateTime, y: d.uv.toFixed(0) }));

      setTemperature(temp);
      setHumidity(humi);
      setWindSpeed(wind);
      setSunlight(sun);
    });
    // }
  }, [stationId]);

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  };

  return (
    <Body>
      <Header>
        <Logo src={logo} alt='logo'></Logo>
        <StationLink to='/station'>🤨</StationLink>
        <Search options={options} />
      </Header>
      <GraphsSection>
        <TitleContainer>
          <Title>Graphs</Title>
          <SelectButton type='button' onClick={() => setToggle(!toggle)}>
            <SelectButtonImage
              src={toggle ? select : selectOff}
              alt='select button'
            />
          </SelectButton>
        </TitleContainer>
        {toggle ? (
          <>
            <GraphContainer>
              <Graph toggle={toggle} title='Temperature' data={temperature} />
              <Graph toggle={toggle} title='Humidity' data={humidity} />
            </GraphContainer>
            <GraphContainer>
              <Graph toggle={toggle} title='Sunlight' data={sunlight} />
              <Graph toggle={toggle} title='Windspeed' data={windSpeed} />
            </GraphContainer>
          </>
        ) : (
          <SliderContainer>
            <StyledSlider {...sliderSetting}>
              <Graph toggle={toggle} title='Temperature' data={temperature} />
              <Graph toggle={toggle} title='Humidity' data={humidity} />
              <Graph toggle={toggle} title='Sunlight' data={sunlight} />
              <Graph toggle={toggle} title='Windspeed' data={windSpeed} />
            </StyledSlider>
          </SliderContainer>
        )}
      </GraphsSection>
      <LocationSection>
        <Title>Location</Title>
        {isGeoLoaded && (
          <MapComponent
            lng={centerRef.current.lng}
            lat={centerRef.current.lat}
            zoom={12}
            markers={markers}
          />
        )}
      </LocationSection>
      <Footer>© 2022. IIEEE in Purdue Univ. All rights reserved.</Footer>
    </Body>
  );
}

export default Home;

const Body = styled.body`
  padding: 0;
  margin: 0;
  background: #f1f1f1;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 0;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 3vh 0;
  }
`;

const Logo = styled.img`
  height: 7vh;
  margin-left: 5%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 4vh;
    margin: 3vh 0;
  }
`;

const StationLink = styled(Link)`
  text-decoration: none;
`;

const GraphsSection = styled.section`
  float: left;
  width: 45%;
  margin-left: 5%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'poppinsB';
  font-size: 25px;
  color: #515151;
  margin: 2vh 0 3.5vh 2vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 16px;
    margin: 1.5vh;
  }
`;

const SelectButton = styled.button`
  width: 7%;
  height: 4vh;
  margin-right: 2vh;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectButtonImage = styled.img`
  height: 4vh;
  border-radius: 50%;
  box-shadow: 1px 3px 6px rgba(142, 142, 142, 0.3);
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 1.4vh;
  height: 45%;
  overflow: hidden;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationSection = styled.section`
  float: left;
  width: 45%;
  padding-bottom: 3%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
    margin-top: 5vh;
  }
`;

const Footer = styled.footer`
  clear: both;
  width: 100%;
  padding: 4vh 0 4vh 0;
  background: #f4f4f4;
  font-family: 'poppinsL';
  font-size: 10px;
  text-align: center;
  color: #5e5e5e;
  @media screen and (max-width: 767px) and (orientation: portrait) {
  }
`;
