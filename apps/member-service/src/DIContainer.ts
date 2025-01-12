import "reflect-metadata";
import { container } from "tsyringe";
import { IUserService } from "./services/IUserService";
import { UserServiceImpl } from "./services/UserServiceImpl";
import { UserRepository } from "./repositories/UserRepository";
import { UserController } from "./controllers/UserController";

container.register<IUserService>("IUserService", { useClass: UserServiceImpl });
container.register(UserRepository, { useClass: UserRepository });
container.register<UserController>("UserController", { useClass: UserController });

const userController = container.resolve(UserController);

export { container, userController };