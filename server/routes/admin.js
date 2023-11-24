import dotenv from "dotenv";
dotenv.config();
import express from "express";
const router = express.Router();
import { adminLogin } from "../controllers/admin-controllers.js";
import {
  addProduct,
  editProduct,
  getAllProducts,
  viewSingleProduct,
} from "../controllers/product-controller.js";


//admin login with predefined data in env
router.post("/login", adminLogin);

//to add product 
router.post("/add-product", addProduct);

//to view all product
router.get("/view-products", getAllProducts);

//to edit the product
router.post("/edit-product", editProduct);

//view single product
router.get('/view-single-product',viewSingleProduct)

export default router;
