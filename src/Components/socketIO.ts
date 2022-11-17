import { Server } from "socket.io";
import { httpServer } from "../Modules/httpServer";
import { logger } from "./logger";

//create socket.io server
export const io = new Server(httpServer);

//log that io instance was created
logger.log("debug", "SocketIO-Server created!")