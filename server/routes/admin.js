import dotenv from "dotenv";
dotenv.config();
import express from "express";
const router = express.Router();
import { adminLogin } from "../controllers/admin-controllers.js";
import {
  addProduct,
  editProduct,
  getAllProducts,
} from "../controllers/product-controller.js";

router.post("/login", adminLogin);

router.post("/add-product", addProduct);

router.get("/view-products", getAllProducts);

router.post("/edit-product", editProduct);

export default router;
