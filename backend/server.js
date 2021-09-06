import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./database/connection.mongoose.js";
import linksRouter from "./routers/links.router.js";
import usersRouter from "./routers/users.router.js";
import checkAuth from "./middleware/checkAuth.js"

const server = express();
server.listen(5555, () => {
    console.log(`server is listening on port 5555`);
});
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
dotenv.config();
database.init();

server.use("/links", linksRouter);
server.use("/users", usersRouter);