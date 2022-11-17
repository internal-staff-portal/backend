import express from "express";
import { join } from "path";
import { cwd } from "process";
import { ApiRouter } from "../Routers/ApiRouter";
import { logger } from "./logger";

//create new express instance
export const app = express();

//use routers
app.use("/api", ApiRouter);

//serve frontend
app.get("/*", (req, res) => {
  res.sendFile(join(cwd(), "frontend", "index.html"));
});

//log that express app was created
logger.log("debug", "Express-App created!");
