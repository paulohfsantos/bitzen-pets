import { AxiosResponse } from "axios";
import { api } from "..";
import { User } from "../models/entities/user.model";
import { UserRepository } from "../repositories/user.repository";
import { UserEditDto } from "../models/dtos/edituser.dto";

export class UserService implements UserRepository {
  private readonly USER_KEY = 'user_info';

  async getLoggedUser(): Promise<AxiosResponse<User>> {
    try {
      const response = await api.get('/api/user');

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(body: UserEditDto): Promise<AxiosResponse<User>> {
    try {
      const response = await api.put('/api/user/', body);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  getUserInfo() {
    return localStorage.getItem(this.USER_KEY)
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
