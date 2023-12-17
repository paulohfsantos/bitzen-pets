import { api } from "..";

export class UserService {
  private readonly USER_KEY = 'user_info';

  async getLoggedUser() {
    try {
      const response = await api.get('/api/user');

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  getUserInfo() {
    return localStorage.getItem(this.USER_KEY);
  }

  storeUserInfo(userInfo: string) {
    localStorage.setItem(this.USER_KEY, userInfo);
  }

  clearUserInfo() {
    localStorage.removeItem(this.USER_KEY);
  }

  isUserLoggedIn() {
    const userInfo = this.getUserInfo();
    return !!userInfo;
  }
}
