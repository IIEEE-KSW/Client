import http from './http.js';

const isError = (e) => {
  console.log(e);
};

//test
export const getSensorList = async (callback) => {
  try {
    const res = await http.get(`/api/v1/sensors`);
    console.log(res);
  } catch (e) {
    isError(e);
  }
};
