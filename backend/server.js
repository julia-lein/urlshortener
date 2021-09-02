import express from "express";
import cors from "cors";
import database from "./database/connection.mongoose.js";
import linksRouter from "./routers/links.router.js";

const server = express();
server.listen(5555, () => {
    console.log(`server is listening on port 5555`);
});
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

database.init();

server.use("/links", linksRouter);