import axios from "axios";

const axiosConfig = {
  baseURL: 'http://194.67.206.159:8000/api/v1',
  headers: {
      'Content-Type': 'application/json',
    },
}

export const authHttp = axios.create(axiosConfig);
export const http = axios.create(axiosConfig);


http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  }
);