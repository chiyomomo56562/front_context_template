import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Response interceptor for consistent data structure mapping if needed
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors like 401, 500 etc.
    return Promise.reject(error)
  },
)
