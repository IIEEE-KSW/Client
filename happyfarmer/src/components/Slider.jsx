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

const Sliders = ({ range, setRange, rangeVal, title }) => {
  const onSliderChange = (val) => {
    const value = { lower: val[0], upper: val[1] };
    setRange(value);
  };

  let marks, min, max;
  if (title == 'Temperature') {
    marks = {
      0: {
        label: '0',
        style: {
          fontFamily: 'poppinsR',
        },
      },
      104: {
        label: '104',
        style: {
          fontFamily: 'poppinsR',
        },
      },
    };
    min = 0;
    max = 104;
  } else if (title == 'Humidity') {
    marks = {
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
    min = 0;
    max = 100;
  } else if (title == 'Pressure') {
    marks = {
      10: {
        label: '10',
        style: {
          fontFamily: 'poppinsR',
        },
      },
      50: {
        label: '50',
        style: {
          fontFamily: 'poppinsR',
        },
      },
    };
    min = 10;
    max = 50;
  } else if (title == 'Windspeed') {
    marks = {
      0: {
        label: '0',
        style: {
          fontFamily: 'poppinsR',
        },
      },
      37: {
        label: '37',
        style: {
          fontFamily: 'poppinsR',
        },
      },
    };
    min = 0;
    max = 37;
  }

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
