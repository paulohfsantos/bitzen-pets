import axios from "axios";
import type { AxiosError } from "axios";
import { TokenService } from "../api/utils/token.service";

const tokenService = new TokenService();

export async function unauthorizedError(error: AxiosError) {
  if (error.response && error.response.status === 401) {
    try {
      const newToken = await tokenService.refreshToken();
      const config = error.config;
      config
        && config.headers.Authorization
        && (config.headers.Authorization = `Bearer ${newToken}`);

      return axios.request(config!);
    } catch (err) {
      throw new Error('Unable to refresh token and retry request');
    }
  }
  throw error;
}
