import axios from 'axios';

// все написано гроком, тестовый варик
const http = axios.create({
    baseURL: 'http://localhost:8000', // Используем HTTP, а не HTTPS
    headers: {
        'Content-Type': 'application/json',
    },
});

// Интерсептор для добавления токена в заголовки
http.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Интерсептор для обработки 401 ошибок и обновления токенов
http.interceptors.response.use(
    response => response,
    async error => {
        if (error.response?.status === 401) {
            try {
                const response = await http.post('/auth/tokens/access', {
                    accessToken: localStorage.getItem('accessToken'),
                    refreshToken: localStorage.getItem('refreshToken'),
                });
                const { accessToken, refreshToken } = response.data;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                error.config.headers.Authorization = `Bearer ${accessToken}`;
                return http.request(error.config); // Повторяем запрос
            } catch (refreshError) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login'; // Перенаправляем на логин
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default http;