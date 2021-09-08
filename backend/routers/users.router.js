import express from "express";
//import usersController from "../controllers/users.js";
import authenticationController from "../controllers/authentification.js";

const router = express.Router();

router.post("/login", authenticationController.loginByEmail);

export default router;