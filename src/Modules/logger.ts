import { Logger } from "@laurenz1606/logger";

//create new Logger instance
export const logger = new Logger({
  format: "[%L] %t %m",
  debug: true,
  error: true,
  info: true,
  warn: true,
});
