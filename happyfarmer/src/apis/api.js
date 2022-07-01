import http from './http.js';

const isError = (e) => {
  console.log(e);
};

//test
export const getSensorList = async () => {
  try {
    const res = await http.get(`/api/v1/sensors`);
    return res;
  } catch (e) {
    isError(e);
  }
};
