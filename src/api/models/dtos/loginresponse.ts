import { User } from "../entities/user.model";

export interface LoginResponse {
  user: User;
  token: string;
}
