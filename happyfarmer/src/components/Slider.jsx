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

const Sliders = ({ range, setRange }) => {
  const onSliderChange = (val) => {
    setRange(val);
  };

  return (
    <Range
      allowCross={false}
      defaultValue={[range[0], range[1]]}
      value={[range[0], range[1]]}
      marks={marks}
      handle={handle}
      onChange={onSliderChange}
    />
  );
};

export default Sliders;
