import http from './http.js';

const isError = (e) => {
  console.log(e);
};

export const getSensorList = async () => {
  try {
    const res = await http.get(`/api/v1/sensors`);
    return res.data;
  } catch (e) {
    isError(e);
  }
};

export const getSensor = async (id) => {
  try {
    const res = await http.get(`/api/v1/sensors/${id}`);
    return res.data;
  } catch (e) {
    isError(e);
  }
};

export const getStationSensor = async (id) => {
  try {
    const res = await http.get(`/api/v1/sensors/stations/${id}`);
    return res.data;
  } catch (e) {
    isError(e);
  }
};

export const getStationList = async () => {
  try {
    const res = await http.get(`/api/v1/stations`);
    return res.data;
  } catch (e) {
    isError(e);
  }
};

export const getStation = async (id) => {
  try {
    const res = await http.get(`/api/v1/stations/${id}`);
    return res.data;
  } catch (e) {
    isError(e);
  }
};
