import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com' // Base URL
});

// İstek öncesi token ekleme
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});