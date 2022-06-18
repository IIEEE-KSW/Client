import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Body>
      <Container>
        <Header></Header>
        <GraphsSection></GraphsSection>
        <LocationSection></LocationSection>
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
  background: #81c784;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 15%;
  }
`;

const GraphsSection = styled.section`
  float: left;
  width: 50%;
  height: 77%;
  background: #66bb6a;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    height: 40%;
  }
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
    height: 5%;
  }
`;
