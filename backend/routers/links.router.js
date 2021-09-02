import express from "express";
import linksController from "../controllers/links.controller.js";

const router = express.Router();

router.get("/", linksController.readAll);
router.post("/", linksController.createLink);
/* router.post("/", usersController.create);
router.get("/", usersController.readAll);
router.get("/:userId", usersController.readOne);
router.put("/:userId", usersController.update);
router.delete("/:userId", usersController.delete); */

// Neue Endpoints für die Reading List
/* router.post("/:userId/readinglist", usersController.addArticleToReadingList);
router.patch("/:userId/readinglist/:articleId", usersController.markArticleAsRead); */

export default router;