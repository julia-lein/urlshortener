import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./database/connection.mongoose.js";
import linksRouter from "./routers/links.router.js";
import usersRouter from "./routers/users.router.js";

const server = express();
dotenv.config();
server.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
});
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

database.init();

server.use("/links", linksRouter);
server.use("/users", usersRouter);