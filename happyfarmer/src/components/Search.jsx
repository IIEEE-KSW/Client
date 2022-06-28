import React, { useState } from 'react';
import styled from 'styled-components';
import search from '../assets/search.png';
import pin from '../assets/pin.png';

const searchInfo = [
  {
    zipcode: 47904,
    states: 'Indiana Lafayette',
  },
  {
    zipcode: 47905,
    states: 'Indiana Lafayette',
  },
  {
    zipcode: 47906,
    states: 'Indiana Lafayette',
  },
  {
    zipcode: 47907,
    states: 'Indiana Lafayette',
  },
  {
    zipcode: 47908,
    states: 'Indiana Lafayette',
  },
  {
    zipcode: 47909,
    states: 'Indiana Lafayette',
  },
  {
    zipcode: 47910,
    states: 'Indiana Lafayette',
  },
];

function Search() {
  const [isShow, setIsShow] = useState(false);
  const [zipCode, setZipCode] = useState('');

  const handleKeyPress = () => {
    setIsShow(true);
  };

  const onChange = (e) => {
    setZipCode(e.target.value);
    if (!e.target.value) {
      setIsShow(false);
    }
  };

  const onReset = (e) => {
    setZipCode('');
    setIsShow(false);
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type='text'
          onKeyPress={handleKeyPress}
          placeholder='Search the ZIP Code'
          value={zipCode}
          onChange={onChange}
        ></Input>
        <SearchButton type='button' onClick={onReset}>
          <SearchButtonImage
            src={search}
            alt='search button'
          ></SearchButtonImage>
        </SearchButton>
      </InputContainer>
      {isShow ? (
        <SearchModal>
          {searchInfo.map((info) => {
            return (
              <ModalContainer>
                <Pin src={pin} alt='pin'></Pin>
                <ZipCodeText>{info.zipcode}</ZipCodeText>
                <LocationText>{info.states}</LocationText>
              </ModalContainer>
            );
          })}
        </SearchModal>
      ) : null}
    </Container>
  );
}

export default Search;

const Container = styled.div`
  width: 37%;
  margin-right: 2%;
  position: relative;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
    margin: 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.3vh 0.5vh;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 1px 3px 6px rgba(142, 142, 142, 0.16);
  @media screen and (max-width: 767px) and (orientation: portrait) {
    border-radius: 13px;
    padding: 1.1vh 0;
  }
`;

const Input = styled.input`
  width: 83%;
  height: 2.5vh;
  font-family: 'poppinsM';
  font-size: 14px;
  padding: 0;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 10px;
    height: 2.3vh;
    padding: 0;
  }
`;

const SearchButton = styled.button`
  width: 7%;
  height: 2.5vh;
  position: relative;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 2.3vh;
  }
`;

const SearchButtonImage = styled.img`
  height: 2.5vh;
  position: absolute;
  top: 0;
  right: 20%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 2.2vh;
  }
`;

const SearchModal = styled.div`
  width: 100%;
  height: 38vh;
  background: #ffffff;
  border-radius: 15px;
  position: absolute;
  top: 0;
  margin-top: 8vh;
  box-shadow: 1px 3px 6px rgba(142, 142, 142, 0.16);
  overflow-y: scroll;
  padding: 1vh 0;
  z-index: 9999;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 21.5vh;
    margin-top: 5.3vh;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.3vh 0.5vh;
  &:hover {
    background: #ececec;
  }
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 1.3vh 0.5vh;
  }
`;

const Pin = styled.img`
  height: 3vh;
  margin: 0 3vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 1.7vh;
    margin: 0 2vh;
  }
`;

const ZipCodeText = styled.div`
  font-family: 'poppinsSB';
  font-size: 15px;
  color: #5f5f5f;
  margin: 0 1vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    margin: 0 0.6vh;
    font-size: 13px;
  }
`;

const LocationText = styled.div`
  font-family: 'poppinsM';
  font-size: 13px;
  color: #8c8c8c;
  margin-left: 1vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 10px;
    margin-left: 0.6vh;
  }
`;
