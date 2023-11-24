import {
  checkEmail,
  getSignUp,
  getUser,
  getUserData,
  updatePasswordUser,
} from "../helpers/user-helpers.js";
import {
  getUserToken,
  hashPassword,
  passwordCompare,
} from "../service/user-service.js";

export const userSignUp = async (req, res) => {
  try {
    const { email, name, phone, password } = req.body;
    const verify = await checkEmail(email);
    if (verify.status) {
      res.status(200).json({ status: true });
    } else {
      const hashedPassword = await hashPassword(password);
      const response = await getSignUp(email, name, phone, hashedPassword);
      res.status(201).json(response);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const verify = await checkEmail(email);
    if (!verify) {
      res.status(404).json({ status: false });
    } else {
      let userData = await getUser(email);
      let comparePassword = await passwordCompare(password, userData.Password);
      if (!comparePassword) {
        res.status(404).json({ status: false });
      } else {
        let token = await getUserToken(email);
        res.status(200).json({ userData, token: token });
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const verify = await checkEmail(email);
    if (!verify) {
      res.status(404).json({ status: false });
    } else {
      const hashedPassword = await hashPassword(password);
      const updateUserPassword = await updatePasswordUser(
        hashedPassword,
        email
      );
      if (updateUserPassword.status) {
        res.status(200).json({ updateUserPassword });
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getUserData(id);
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
