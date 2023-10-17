import dotenv from 'dotenv'
dotenv.config()
import express from "express";
const app = express();
import cors from "cors";
import connectDB from "./models/connection.js";
import userRouter from "./routes/user.js";
import adminRouter from './routes/admin.js'

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3001;

app.use("/api/user", userRouter);
app.use('/api/admin',adminRouter)

app.listen(PORT, () => {
  console.log("server started");
});
