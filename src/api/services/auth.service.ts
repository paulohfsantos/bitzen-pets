import { api } from "..";
import { TokenService } from "./token.service";
import { UserLoginDto } from "../models/dtos/login.dto";
import { UserRegisterDto } from "../models/dtos/register.dto";
import { AxiosResponse } from "axios";
import { LoginResponse } from "../models/dtos/loginresponse";
import { UserService } from "./user.service";
import { useNotify } from "src/composables/useNotify";
import { Notify } from "quasar";

export class AuthService {
  private readonly tokenService: TokenService
  private readonly userService: UserService
  private readonly message: any

  constructor() {
    this.tokenService = new TokenService();
    this.userService = new UserService();
  }

  async login(body: UserLoginDto): Promise<AxiosResponse<LoginResponse>> {
    try {
      const response = await api.post('/api/login', body);
      const token: string = response.data.data.token;
      const user = response.data.data.user;

      this.tokenService.storeToken(token);
      this.userService.storeUserInfo(JSON.stringify(user));

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async register(body: UserRegisterDto): Promise<AxiosResponse<LoginResponse>> {
    try {
      const response = await api.post('/api/register', body);
      const token: string = response.data.token;

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
