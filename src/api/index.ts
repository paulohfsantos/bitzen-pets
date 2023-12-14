import axios from 'axios';
import { TokenService } from './utils/token.service';
import { unauthorizedError } from '../exceptions/unauthorized.service';

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
  (error) => unauthorizedError(error),
);
