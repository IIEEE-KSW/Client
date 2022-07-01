import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import './slider.css';
import cancel from '../assets/cancel.png';

const { Range, Handle, SliderTooltip } = Slider;

const onHandle = (props) => {
  const { value, index, ...restProps } = props;
  console.log('handler: ' + value);
  return (
    <SliderTooltip
      prefixCls='rc-slider-tooltip'
      overlayInnerStyle={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: '#09ACF8',
      }}
      overlay={`${value}`}
      visible
      placement='top'
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

function Setting() {
  const [open, setOpen] = useState(true);
  const [range, setRange] = useState({
    lower: 20,
    upper: 40,
    value: [20, 40],
  });

  const marks = {
    0: {
      label: '0',
      style: {
        fontFamily: 'poppinsR',
      },
    },
    100: {
      label: '100',
      style: {
        fontFamily: 'poppinsR',
      },
    },
  };

  const onLowerChange = (e) => {
    setRange({ lower: e.target.value });
  };

  const onUpperChange = (e) => {
    setRange({ upper: e.target.value });
  };

  const onSliderChange = (value) => {
    setRange({ value });
    console.log('real value: ' + range.value);
    console.log('change value: ' + value);
  };

  const handleApply = () => {
    const { lower, upper } = range;
    setRange({ value: [lower, upper] });
  };

  return (
    <>
      {open && (
        <Container>
          <ModalContainer>
            <Header>
              <Title>Setting</Title>
              <XButton type='button' onClick={() => setOpen(false)}>
                <XButtonImage src={cancel} alt='cancel button'></XButtonImage>
              </XButton>
            </Header>
            <Content>Range</Content>
            <SliderContainer>
              <Slider
                range
                allowCross={false}
                defaultValue={[range.lower, range.upper]}
                value={range.value}
                marks={marks}
                onChange={onSliderChange}
                handle={onHandle}
              ></Slider>
            </SliderContainer>

            <ButtonContainer>
              <CancelButton onClick={() => setOpen(false)}>CANCEL</CancelButton>
              <OkButton onClick={() => setOpen(false)}>OK</OkButton>
            </ButtonContainer>
          </ModalContainer>
        </Container>
      )}
    </>
  );
}

export default Setting;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #242424b7;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 28%;
  height: fit-content;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 3px 6px rgba(142, 142, 142, 0.16);
  position: relative;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 60%;
    border-radius: 8px;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 5% 0;
  background-color: #65b065;
  color: white;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    border-radius: 8px 8px 0 0;
  }
`;

const Title = styled.div`
  font-family: 'poppinsSB';
  font-size: 17px;
  margin-left: 5%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 14px;
    margin-left: 7%;
  }
`;

const XButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  width: 7%;
  height: 1.8vh;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 1.4vh;
    margin-right: 7%;
  }
`;

const XButtonImage = styled.img`
  height: 1.8vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 1.4vh;
  }
`;

const Content = styled.div`
  font-family: 'poppinsM';
  font-size: 13px;
  color: #717171;
  padding: 3vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 11px;
    padding: 1.7vh 2vh;
  }
`;

const SliderContainer = styled.div`
  margin: 0 10%;
  padding: 4% 0;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    margin: 0.5vh 10%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 4% 6%;
  margin-top: 2vh;
`;

const CancelButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  font-family: 'poppinsM';
  font-size: 14px;
  margin: 0 2vh;
  color: #b4b4b4;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 12px;
    margin: 0 1.2vh;
  }
`;

const OkButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  font-family: 'poppinsSB';
  font-size: 14px;
  color: #65b065;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 12px;
  }
`;
