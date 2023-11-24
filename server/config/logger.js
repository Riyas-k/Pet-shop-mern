import winston from "winston";
import chalk from "chalk";

//Define log formats
const logFormat = winston.format.printf(
  ({ level, message, timestamp, data }) => {
    const colorLevel =
      level === "error" ? chalk.red(level) : chalk.yellow(level);
    return `${chalk.gray(timestamp)} ${colorLevel} ${level.toUpperCase()} ${message} ${
      data ? chalk.yellow(JSON.stringify(data, null, 2)) : ""
    }`;
  }
);

//create a Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(),winston.format.splat(), logFormat),
  transports: [new winston.transports.Console()],
});

export default logger;
