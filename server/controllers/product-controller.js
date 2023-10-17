import {
  productAdd,
  productEdit,
  viewProducts,
} from "../helpers/product-helpers.js";

export const addProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      image,
      price,
      category,
      quantity,
      offerPrice,
    } = req.body;
    const response = await productAdd(
      productName,
      description,
      image,
      price,
      category,
      quantity,
      offerPrice
    );
    if (response.status) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await viewProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (req, res) => {
  try {
    const {
      id,
      productName,
      description,
      image,
      price,
      category,
      quantity,
      offerPrice,
    } = req.body;
    const response = await productEdit(
      id,
      productName,
      description,
      image,
      price,
      category,
      quantity,
      offerPrice
    );
    if (response.status) {
      res.json({ response });
    }
  } catch (error) {
    console.log(error);
  }
};
