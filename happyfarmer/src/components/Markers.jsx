import * as React from 'react';
import { Marker } from 'react-map-gl';
import Pin from './Pin';

const Markers = ({ lng, lat }) => {
  console.log(lng, lat);
  return (
    <Marker key={1} longitude={lng} latitude={lat} anchor='center'>
      <Pin />
    </Marker>
  );
};

export default Markers;
