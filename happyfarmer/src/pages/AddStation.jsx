import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { postStation } from '../apis/api';

const AddStation = () => {
  const [eui, setEui] = useState('');
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [zipCode, setZipCode] = useState('');

  const [showMsg, setShowMsg] = useState(false);

  const onClickRegister = (e) => {
    console.log(eui, name, latitude, longitude, zipCode);
    if (
      eui === '' ||
      name === '' ||
      latitude === null ||
      longitude === null ||
      zipCode === ''
    ) {
      setShowMsg(true);
    } else {
      setShowMsg(false);
      const form = {
        eui: eui,
        name: name,
        latitude: latitude,
        longitude: longitude,
        zipCode: zipCode,
      };
      postStation(form).then((data) => {
        //data 유효성 판단
        setEui('');
        setName('');
        setLatitude(null);
        setLongitude(null);
        setZipCode('');
        alert('Have been registered');
      });
    }
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt='logo'></Logo>
      </Header>
      <Body>
        <Title>Register Station</Title>
        {showMsg && <Msg>Please fill in all blank</Msg>}
        <Input
          placeholder='EUI'
          name='eui'
          type='text'
          onChange={(e) => setEui(e.target.value)}
        />
        <Input
          placeholder='NAME'
          name='name'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='LATITUDE'
          name='latitude'
          type='text'
          onChange={(e) => setLatitude(e.target.value)}
        />
        <Input
          placeholder='LONGITUDE'
          name='longitude'
          type='text'
          onChange={(e) => setLongitude(e.target.value)}
        />
        <Input
          placeholder='ZIPCODE'
          name='zipcode'
          type='text'
          onChange={(e) => setZipCode(e.target.value)}
        />
        <Btn onClick={onClickRegister}>Register</Btn>
      </Body>
    </Container>
  );
};

export default AddStation;

const Container = styled.div`
  padding: 0;
  margin: 0;
  background: #f1f1f1;
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.header`
  width: 100%;
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
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

const Msg = styled.div`
  font-family: 'poppinsB';
  color: #e62222;
  margin: 2vh 0 3.5vh 2vh;
  /* @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 16px;
    margin: 1.5vh;
  } */
`;

const Input = styled.input`
  padding: 12px;
`;

const Btn = styled.button`
  font-family: 'poppinsSB';
  padding: 12px;
  /* color: #65b065; */
  /* background-color: #fff; */
  /* border: 2px solid #65b065; */
  color: #fff;
  background-color: #65b065;
  border: #fff;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
`;
