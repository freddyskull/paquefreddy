import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:4000/api/v1/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
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
