import { Request, Response, NextFunction } from "express";
import logger from "../shared/logger";
import { AppError } from "../shared/AppError";

const errorHandler = ( err: Error, req: Request, res: Response, next: NextFunction ) => {
  let statusCode = 500;
  let message = "Something went wrong!";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    logger.warn(`Operational Error: ${err.message}`);
  } else {
    logger.error(`Unhandled Error: ${err.message}`, { stack: err.stack });
  }

  res.status(statusCode).json({ status: "error", message });
};

export default errorHandler;
