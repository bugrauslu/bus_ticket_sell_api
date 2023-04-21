import express from "express";
import AuthController from "../controller/auth.controller";
import authValidation from "../schema/user.schema";
const router = express.Router();

//LOGIN
router.post("/login", authValidation.login, AuthController.login);
//REGISTER
router.post("/register", authValidation.register, AuthController.register);

export default router;
