import http from './http.js';

const isError = (e) => {
  console.log(e);
};

export const getSensorList = async () => {
  try {
    return await http.get(`/api/v1/sensors`);
  } catch (e) {
    isError(e);
  }
};

export const getStationList = async () => {
  try {
    return await http.get(`/api/v1/stations`);
  } catch (e) {
    isError(e);
  }
};

export const getStation = async (id) => {
  try {
    return await http.get(`/api/v1/stations/${id}`);
  } catch (e) {
    isError(e);
  }
};
