import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const cartSchema = {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  cartItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      Quantity: { type: Number, default: 1 },
      Price: { type: Number },
    },
  ],
};
const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
