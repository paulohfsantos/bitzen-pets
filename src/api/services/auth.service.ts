import { api } from "..";
import { TokenService } from "../utils/token.service";
import { UserLoginDto } from "../models/dtos/login.dto";
// import { AxiosAdapter } from "../adapter";

export class AuthService {
  private readonly tokenService: TokenService
  // private readonly http: AxiosAdapter

  constructor() {
    this.tokenService = new TokenService();
    // this.http = new AxiosAdapter();
  }

  async login(body: UserLoginDto): Promise<void> {
    try {
      const response = await api.post('/api/login', body);
      const token: string = response.data.token;

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
      const token: string = response.data.token;

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
