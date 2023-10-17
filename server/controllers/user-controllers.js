import {
  checkEmail,
  getSignUp,
  getUser,
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
      res.json({ status: true });
    } else {
      const hashedPassword = await hashPassword(password);
      const response = await getSignUp(email, name, phone, hashedPassword);
      res.json(response);
    }
  } catch (error) {
    console.log(error);
  }
};
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const verify = await checkEmail(email);
    if (!verify) {
      res.json({ status: false });
    } else {
      let userData = await getUser(email);
      let comparePassword = await passwordCompare(password, userData.Password);
      if (!comparePassword) {
        res.json({ status: false });
      } else {
        let token = await getUserToken(email);
        res.json({ userData, token: token });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const verify = await checkEmail(email);
    if (!verify) {
      res.json({ status: false });
    } else {
      const hashedPassword = await hashPassword(password);
      const updateUserPassword = await updatePasswordUser(
        hashedPassword,
        email
      );
      if (updateUserPassword.status) {
        res.json({ updateUserPassword });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
