import { AxiosResponse } from "axios";
import { UserEditDto } from "../models/dtos/edituser.dto";
import { User } from "../models/entities/user.model";

export interface UserRepository {
  getLoggedUser(): Promise<AxiosResponse<User>>;
  getUserInfo(): string | null;
  updateUser(user: UserEditDto): Promise<AxiosResponse<User>>;
  storeUserInfo(userInfo: string): void;
  clearUserInfo(): void;
  isUserLoggedIn(): boolean;
}
