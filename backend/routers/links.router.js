import express from "express";
import linksController from "../controllers/links.controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", linksController.readAll);
//router.post("/", checkAuth, linksController.createLink);
router.post("/", linksController.createLink);
router.get("/:linkHash", linksController.readOne);

export default router;