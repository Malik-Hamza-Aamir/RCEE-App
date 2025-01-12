import { createLogger, format, transports, Logger } from "winston";

class AppLogger {
  private logger: Logger;

  constructor() {
    const { combine, timestamp, json, printf, errors } = format;

    const consoleFormat = printf(({ timestamp, level, message, stack }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
    });

    const isProduction = process.env.NODE_ENV === "production";

    this.logger = createLogger({
      level: isProduction ? "info" : "debug",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        isProduction ? json() : consoleFormat
      ),
      defaultMeta: { service: "my-express-app" },
      transports: [
        new transports.Console({
          format: isProduction
            ? combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), json())
            : combine(
                timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
                consoleFormat
              ),
        }),
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log" }),
      ],
    });

    this.logger.exceptions.handle(
      new transports.File({ filename: "logs/exceptions.log" })
    );

    this.logger.rejections.handle(
      new transports.File({ filename: "logs/rejections.log" })
    );
  }

  info(message: string, meta?: object) {
    this.logger.info(message, meta);
  }

  warn(message: string, meta?: object) {
    this.logger.warn(message, meta);
  }

  debug(message: string, meta?: object) {
    this.logger.debug(message, meta);
  }

  error(message: string, meta?: object) {
    this.logger.error(message, meta);
  }

  getLoggerInstance() {
    return this.logger;
  }
}

export default new AppLogger();
