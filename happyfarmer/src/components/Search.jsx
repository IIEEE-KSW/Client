import React, { useCallback } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import { useDispatch } from 'react-redux';
import { setId } from '../modules/station';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#5f5f5f',
    padding: 17,
    background: state.isFocused
      ? '#f0f0f0'
      : state.isSelected
      ? '#ffffff'
      : '#ffffff',
    ':active': {
      backgroundColor: '#ffffff',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '100%',
    fontFamily: 'poppinsM',
    fontSize: '13px',
  }),
  control: (base, state) => ({
    ...base,
    border: 0,
    fontFamily: state.isFocused ? 'poppinsSB' : 'poppinsM',
    fontSize: '13px',
    // This line disable the blue border
    boxShadow: 'none',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};

function Search({ options }) {
  const dispatch = useDispatch();
  const setStationId = useCallback((id) => dispatch(setId(id)), [dispatch]);

  const handleSelectItem = (e) => {
    const id = e.value;
    setStationId(id);
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
  width: 50vh;
  position: relative;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
    margin: 5% 0 0 0;
  }
`;

const SelectContainer = styled.div`
  padding: 1vh 0.7vh;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 1px 3px 6px rgba(142, 142, 142, 0.16);
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 0.2vh 1vh;
  }
`;
