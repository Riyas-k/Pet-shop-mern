import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWTSECRETKEY = process.env.JWTSECRET;

export const verifyToken = (req, res, next)=> {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "Token is Missing" });
  jwt.verify(token, JWTSECRETKEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token is Invalid" });
    req.user = decoded;
    next();
  });
}