import {
  getSingleProductData,
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
    console.log(error.message);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await viewProducts();
    res.json(products);
  } catch (error) {
    console.log(error.message);
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
    console.log(error.message);
  }
};

export const viewSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSingleProductData(id);
    if (data.status) {
      res.status(200).json(data);
    } else {
      res.status(404).json(false);
    }
  } catch (error) {
    console.log(error.message);
  }
};
