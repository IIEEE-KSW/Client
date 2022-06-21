import React from 'react';
import styled from 'styled-components';
import search from '../assets/search.png';

function Search() {
  return (
    <Container>
      <InputContainer>
        <Input type={'text'} placeholder={'Search the ZIP Code'}></Input>
        <SearchButton type={'button'}>
          <SearchButtonImage
            src={search}
            alt='search button'
          ></SearchButtonImage>
        </SearchButton>
      </InputContainer>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  width: 37%;
  margin-right: 2%;
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
