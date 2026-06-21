import axios from 'axios';

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token'); // ← was 'accessToken', FIXED
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;