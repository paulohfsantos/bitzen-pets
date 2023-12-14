import { api } from "..";
import { TokenService } from "../utils/token.service";
import { UserLoginDto } from "../models/dtos/login.dto";

export class AuthService {
  private readonly tokenService: TokenService

  constructor() {
    this.tokenService = new TokenService();
  }

  async login(body: UserLoginDto): Promise<void> {
    try {
      const response = await api.post('/api/login', body);
      const token = response.data.token;

      console.log('login', response);

      this.tokenService.storeToken(token);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async register(body: UserLoginDto): Promise<void> {
    try {
      const response = await api.post('/api/register', body);
      const token = response.data.token;

      console.log('register', response);

      this.tokenService.storeToken(token);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    await this.tokenService.clearToken();
  }
}
