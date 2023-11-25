import express from "express";
const router = express.Router();
import {
  userSignUp,
  userLogin,
  updatePassword,
  getProfile,
} from "../controllers/user-controllers.js";
// import { verifyToken } from "../middleware/authMiddleware.js";

//user signup
router.post("/sign-up", userSignUp);

//user login
router.post("/login", userLogin);

//update user password
router.post("/update-password", updatePassword);

//get user profile
router.get("/profile/:id", getProfile);


export default router;
