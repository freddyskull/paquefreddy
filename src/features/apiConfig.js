import axios from 'axios'
require('dotenv').config()

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     // Manejar errores aquí
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
