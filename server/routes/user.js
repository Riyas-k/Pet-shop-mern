import express from "express";
const router = express.Router();
import {
  userSignUp,
  userLogin,
  updatePassword,
} from "../controllers/user-controllers.js";

router.post("/sign-up", userSignUp);

router.post("/login", userLogin);

router.post("/update-password", updatePassword);

export default router;
