import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  Image: {
    type: Array,
  },
  Price: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  OfferPrice: {
    type: Number,
  },
});

const Product = mongoose.model("products", productSchema);

export default Product;
