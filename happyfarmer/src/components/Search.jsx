import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const options = [
  { value: 47904, label: 47904 },
  { value: 47905, label: 47905 },
  { value: 47906, label: 47906 },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#5f5f5f',
    padding: 20,
    zIndex: 1,
    background: state.isFocused
      ? '#ececec'
      : state.isSelected
      ? '#ffffff'
      : undefined,
    ':active': {
      backgroundColor: undefined,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '100%',
    fontFamily: 'poppinsM',
    fontSize: '14px',
  }),
  control: (base, state) => ({
    ...base,
    border: 0,
    fontFamily: 'poppinsM',
    fontSize: '14px',
    // This line disable the blue border
    boxShadow: 'none',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};

function Search() {
  const handleSelectItem = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <SelectContainer>
        <Select
          placeholder='Find by Zipcode'
          styles={customStyles}
          options={options}
          onChange={handleSelectItem}
        />
      </SelectContainer>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  width: 20%;
  margin-right: 2%;
  position: relative;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 96%;
    margin: 0;
  }
`;

const SelectContainer = styled.div`
  padding: 1.2vh 1vh;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 1px 3px 6px rgba(142, 142, 142, 0.16);
  @media screen and (max-width: 767px) and (orientation: portrait) {
    border-radius: 12px;
    padding: 1.6vh 0;
  }
`;
