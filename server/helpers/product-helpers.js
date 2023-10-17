import Product from "../models/productSchema.js";

export const productAdd = (
  productName,
  description,
  image,
  price,
  category,
  quantity,
  offerPrice
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newProduct = new Product({
        ProductName: productName,
        Description: description,
        Image: image,
        Price: price,
        Category: category,
        Quantity: quantity,
        OfferPrice: offerPrice,
      });
      await newProduct.save().then(() => {
        resolve({ status: true });
      });
    } catch (error) {
      console.log(error);
    }
  });
};
export const viewProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.find();
      resolve(product);
    } catch (error) {
      console.log(error);
    }
  });
};
export const productEdit = (
  id,
  productName,
  description,
  image,
  price,
  category,
  quantity,
  offerPrice
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Product.updateOne(
        { _id: id },
        {
          $set: {
            ProductName: productName,
            Description: description,
            Image: image,
            Price: price,
            Category: category,
            Quantity: quantity,
            OfferPrice: offerPrice,
          },
        }
      )
        .then(() => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  });
};
