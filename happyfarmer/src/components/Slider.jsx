import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider, { Range } from 'rc-slider';
import './slider.css';

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, index, ...restProps } = props;
  console.log('value: ', value);
  console.log('index: ', index);
  return (
    <Tooltip
      prefixCls='rc-slider-tooltip'
      overlay={value}
      visible
      placement='top'
      key={index}
      overlayStyle={{ zIndex: 9999 }}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const rangeMinMax = {
  Temperature: {
    min: 0,
    max: 105,
  },
  Humidity: {
    min: 0,
    max: 100,
  },
  Pressure: {
    min: 10,
    max: 50,
  },
  Windspeed: {
    min: 0,
    max: 40,
  },
};

const Sliders = ({ range, setRange, rangeVal, title }) => {
  const onSliderChange = (val) => {
    const value = { lower: val[0], upper: val[1] };
    setRange(value);
  };

  const min = rangeMinMax[title].min;
  const max = rangeMinMax[title].max;
  const marks = {
    [min]: {
      label: min,
      style: {
        fontFamily: 'poppinsR',
      },
    },
    [max]: {
      label: max,
      style: {
        fontFamily: 'poppinsR',
      },
    },
  };

  return (
    <Range
      allowCross={false}
      min={min}
      max={max}
      defaultValue={[rangeVal[0], rangeVal[1]]}
      value={[range.lower, range.upper]}
      marks={marks}
      handle={handle}
      onChange={onSliderChange}
    />
  );
};

export default Sliders;
