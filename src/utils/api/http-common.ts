import axios from 'axios';
import UserService from '../services/UserService';
import { error } from 'console';

// Создаем экземпляр Axios
const http = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-type': 'application/json',
  },
});

// Интерсептор для добавления токена в заголовки запросов
http.interceptors.request.use(
  (config) => {
    const token = UserService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use( (response) => {
    if (response.status != 200)
    {
      UserService.refreshAuthToken();
    }
    
    return response
  }, (error) => {
    return Promise.reject(error);
  }
)

export default http;
