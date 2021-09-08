import express from "express";
import linksController from "../controllers/links.controller.js";

const router = express.Router();

router.get("/", linksController.readAll);
router.post("/", linksController.createLink);
router.get("/:linkHash", linksController.readOne);

export default router;