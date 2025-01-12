import "reflect-metadata";
import express, { Express, NextFunction, Request, Response } from "express";
import errorHandler from "./middleware/errorHandler";
import { AppError } from "./shared/AppError";
import logger from "./shared/logger";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

export class Server {
  private app: Express;
  private port = process.env.PORT;

  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  private setupMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private setupRoutes() {
    this.app.get("/api");

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      next(new AppError("Route not found", 404));
    });

    this.app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
    });
  }

  private setupErrorHandling() {
    this.app.use(errorHandler);
  }

  public start() {
    this.app.listen(4000, () => {
      console.log("PORT :", this.port);
      
      console.log("started at port", 4000);
      logger.info(`Server is running on http://localhost:${4000}`);
    });
  }
}
