import { NextFunction, Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { IUserService } from "../services/IUserService";

@injectable()
export class UserController {
  constructor(@inject("IUserService") private userService: IUserService) {}

  //   router.post("/user/login", userController.authenticateUser);
  // router.post("/user/register", userController.createUser);
  // router.post("/user/logout", userController.logoutUser);
  // router.put("/user/:id", userController.updateUser);
  // router.delete("/user/:id", userController.deleteUser);

  public getUserData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public authenticateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public createUser = async ( req: Request, res: Response, next: NextFunction ) => {
    // zod validation
    // inject to service
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public logoutUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };
}
