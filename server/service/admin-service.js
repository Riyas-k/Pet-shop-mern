import jwt from "jsonwebtoken";

export function verifyAdmin(email, password, AdminEmail, AdminPassword) {
  try {
    if (email == AdminEmail && password == AdminPassword) {
      let secret = process.env.JWTSECRET;
      let token = jwt.sign(email, secret);
      return { status: true, token };
    } else {
      return { status: false };
    }
  } catch (error) {
    console.log(error);
  }
}
