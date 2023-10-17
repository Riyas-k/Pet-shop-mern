import { verifyAdmin } from "../service/admin-service.js";

export const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    const AdminEmail = process.env.ADMINEMAIL;
    const AdminPassword = process.env.ADMINPASSWORD;
    const response = verifyAdmin(email, password, AdminEmail, AdminPassword);
    if (response) {
      res.json(response);
    }
  } catch (error) {
    console.log(error);
  }
};

