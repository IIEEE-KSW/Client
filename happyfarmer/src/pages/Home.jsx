import React, { useEffect } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Graph from '../components/Graph';
import logo from '../assets/logo.png';
import Map from '../components/map';

import { getSensorList } from '../apis/api';

function Home() {
  useEffect(() => {
    // API를 각 위치에서 호출하는 경우
    // const getStationList = async () => {
    //   try {
    //     const res = await http.get(`/todos/1`);
    //     setTest(res.data.title);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // API들을 모듈화해서 호출하는 경우
    getSensorList().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Body>
      <Header>
        <Logo src={logo} alt='logo'></Logo>
        <Search></Search>
      </Header>
      <GraphsSection>
        <Title>Graphs</Title>
        <GraphContainer>
          <Graph></Graph>
          <Graph></Graph>
        </GraphContainer>
        <GraphContainer>
          <Graph></Graph>
          <Graph></Graph>
        </GraphContainer>
      </GraphsSection>
      <LocationSection>
        <Title>Location</Title>
        <Map />
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

const GraphsSection = styled.section`
  float: left;
  width: 45%;
  margin-left: 5%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
    margin: 0;
  }
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

const GraphContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 2.3vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
  }
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
