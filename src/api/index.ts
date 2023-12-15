import axios from 'axios';
import { TokenService } from './utils/token.service';
import { unauthorizedError } from '../exceptions/unauthorized';

const tokenService = new TokenService();

export const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  const token = tokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Try to refresh the token here
      try {
        await tokenService.refreshToken();
        // Retry the original request with the new token
        return api(error.config);
      } catch (refreshError) {
        // Handle failed token refresh here, e.g., redirect to login
      }
    }

    return unauthorizedError(error);
  }
);
