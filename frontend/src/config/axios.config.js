import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'no-rute';

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Evitar bucle infinito en la página de error
    if (!error.response && window.location.pathname !== '/error-conexion') {
      window.location.href = '/error-conexion';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
