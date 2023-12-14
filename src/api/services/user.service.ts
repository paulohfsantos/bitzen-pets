import { api } from "..";

export class UserService {
  async getLoggedUser(): Promise<void> {
    try {
      const response = await api.get('/api/user');

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
