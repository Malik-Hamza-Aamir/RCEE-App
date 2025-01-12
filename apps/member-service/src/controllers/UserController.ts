
import { NextFunction, Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { IUserService } from "../services/IUserService";

@injectable()
export class UserController {
  constructor(@inject("IUserService") private userService: IUserService) {}

  public getUserData = async (req: Request, res: Response, next: NextFunction) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public logoutUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData = this.userService.getUser();
    res.json({ message: userData });
  };
}
