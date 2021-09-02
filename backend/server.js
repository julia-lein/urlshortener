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

const links = [
    {
        link: "link1",
        screenshot: "https://cdn.pixabay.com/photo/2020/04/30/15/34/code-5113374_960_720.jpg",
        title: "titel1",
        description: "description1"
    },
    {
        link: "link2",
        screenshot: "https://cdn.pixabay.com/photo/2018/03/21/07/16/learning-3245793_960_720.jpg",
        title: "titel2",
        description: "description2"
    },
    {
        link: "link3",
        screenshot: "https://cdn.pixabay.com/photo/2017/01/10/01/32/study-1968077_960_720.jpg",
        title: "titel3",
        description: "description3"
    },
];

server.use("/links", linksRouter);

/* server.get("/links", (req, res) => {
    res.send(links);
}); */