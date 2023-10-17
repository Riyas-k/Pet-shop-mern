import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: Number,
  },
  Password: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  Place: {
    type: String,
  },
});
const User = mongoose.model("Users", userSchema);

export default User;
