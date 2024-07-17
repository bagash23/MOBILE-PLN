import axios from 'axios';

export const ApiInstance = (base: string) => {
  return axios.create({
    baseURL: base,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};
