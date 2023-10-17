//DB connection
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL; 
    await mongoose.connect(mongoURL,).then(() => {
      console.log(`Database connected Successfully`);
    });
  } catch (error) {
    console.log(`Database error ${error}`);
    process.exit(1);
  }
};
export default connectDB;