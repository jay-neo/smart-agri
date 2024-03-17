import axios from 'axios';

const baseURL = import.meta.env.VITE_SERVER_API;


const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const api = axios.create({
  baseURL,
  ...axiosConfig,
});


export default api;
