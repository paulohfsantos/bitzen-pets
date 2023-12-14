import { UserEditDto } from "../models/dtos/edituser.dto";
import { UserRegisterDto } from "../models/dtos/register.dto";
import { User } from "../models/entities/user.model";

export interface UserRepository {
  createUser(user: UserRegisterDto): Promise<User>;
  getUserById(id: number): Promise<User>;
  getUsers(): Promise<User[]>;
  updateUserById(id: number, user: UserEditDto): Promise<User>;
  deleteUserById(id: number): Promise<void>;
}
