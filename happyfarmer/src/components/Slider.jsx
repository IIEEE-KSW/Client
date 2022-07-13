import React, { useState } from 'react';
import Tooltip from 'rc-tooltip';
import Slider, { Range } from 'rc-slider';
import './slider.css';

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, index, ...restProps } = props;
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

const Sliders = () => {
  const [range, setRange] = useState({
    lower: 20,
    upper: 40,
  });

  const onSliderChange = (val) => {
    const value = { ...val, lower: val[0], upper: val[1] };
    setRange(value);
  };

  return (
    <Range
      allowCross={false}
      defaultValue={[range.lower, range.upper]}
      value={[range.lower, range.upper]}
      marks={marks}
      handle={handle}
      onChange={onSliderChange}
    />
  );
};

export default Sliders;
