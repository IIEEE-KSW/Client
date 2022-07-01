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
      <Container>
        <Header>
          <Logo src={logo} alt='logo'></Logo>
          <Search></Search>
        </Header>
        <GraphsSection>
          <GraphTitle>Graphs</GraphTitle>
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
          <Map />
        </LocationSection>
        <Footer></Footer>
      </Container>
    </Body>
  );
}

export default Home;

const Body = styled.body`
  padding: 0;
  margin: 0;
  background: #f1f1f1;
`;

const Container = styled.div`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 88%;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 18%;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Logo = styled.img`
  height: 7vh;
  margin-left: 2%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 4vh;
    margin: 1vh 0;
  }
`;

const GraphsSection = styled.section`
  float: left;
  width: 50%;
  height: 77%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    height: 40%;
  }
`;

const GraphTitle = styled.div`
  font-family: 'poppinsB';
  font-size: 25px;
  color: #515151;
  margin: 2vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 16px;
    margin: 1.5vh;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationSection = styled.section`
  float: left;
  width: 50%;
  height: 77%;
  background: #4caf50;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    height: 40%;
  }
`;

const Footer = styled.footer`
  clear: both;
  width: 100%;
  height: 8%;
  background: #388e3c;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 2%;
  }
`;
