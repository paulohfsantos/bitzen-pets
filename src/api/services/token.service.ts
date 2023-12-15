import { api } from '..';
import { Cookies } from 'quasar'

export class TokenService {
  private readonly TOKEN_KEY = 'token';

  getToken(): string | null {
    const token = Cookies.get(this.TOKEN_KEY);
    return typeof token === 'string' ? token : null;
  }

  async refreshToken(): Promise<string> {
    const url = '/api/refresh-token';
    const token = this.getToken();
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const response = await api.post(url, null, { headers });
      const { data } = response.data;

      if (!data.token) {
        throw new Error('Unable to refresh token');
      }

      await this.storeToken(data.token);

      return data.token;
    } catch (error) {
      throw new Error(`Token refresh failed: ${error}`);
    }
  }

  async storeToken(token: string): Promise<void> {
    Cookies.set(this.TOKEN_KEY, token, { expires: 3600, secure: true, sameSite: 'Strict' });
  }

  async clearToken(): Promise<void> {
    Cookies.remove(this.TOKEN_KEY);
  }

  isValidToken() {
    const token = this.getToken();
    return !!token;
  }
}
