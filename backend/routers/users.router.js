import express from "express";
//import usersController from "../controllers/users.js";
import authenticationController from "../controllers/authentification.js";

const router = express.Router();

/* router.post("/", usersController.create); // parameter dieser Callbacks muss sind (req, res, next)
router.get("/", usersController.readAll);
router.get("/:userId", usersController.readOne);
router.put("/:userId", usersController.update);
router.delete("/:userId", usersController.delete);

// Neue Endpoints für die Reading List
router.post("/:userId/readinglist", usersController.addArticleToReadingList);
router.patch("/:userId/readinglist/:articleId", usersController.markArticleAsRead); */

router.post("/login", authenticationController.loginByEmail);

export default router;