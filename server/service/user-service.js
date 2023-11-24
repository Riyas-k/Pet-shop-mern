import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
  try {
    let salt = 12;
    let hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.log(error.message);
  }
};
export const passwordCompare = async (password, userPassword) => {
  try {
    let compare = await bcrypt.compare(password, userPassword);
    return compare;
  } catch (error) {
    console.log(error.message);
  }
};
export const getUserToken = async (email) => {
  try {
    let secret = process.env.JWTSECRET;
    let token = jwt.sign(email, secret);
    return token;
  } catch (error) {
    console.log(error.message);
  }
};
