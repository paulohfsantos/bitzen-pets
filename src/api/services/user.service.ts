import { Cookies } from "quasar";
import { api } from "..";

export class UserService {
  private readonly USER_KEY = 'user_info';

  async getLoggedUser(): Promise<void> {
    try {
      const response = await api.get('/api/user');

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  getUserInfo(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  storeUserInfo(userInfo: string): void {
    localStorage.setItem(this.USER_KEY, userInfo);
  }

  clearUserInfo(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  isUserLoggedIn(): boolean {
    const userInfo = this.getUserInfo();
    return !!userInfo;
  }
}
