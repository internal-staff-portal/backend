import express from "express";
import { logger } from "../Components/logger";

//create new express instance
export const app = express();

//log that express app was created
logger.log("debug", "Express-App created!")