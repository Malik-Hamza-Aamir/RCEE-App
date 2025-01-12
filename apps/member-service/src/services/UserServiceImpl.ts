import { injectable } from "tsyringe";
import { IUserService } from "./IUserService";
import { UserRepository } from "../repositories/UserRepository";

@injectable()
export class UserServiceImpl implements IUserService {
  constructor(private userRepository: UserRepository) {}

  getUser(): string {
    return this.userRepository.getUserData();
  }
}
