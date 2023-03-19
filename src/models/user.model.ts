import mongoose from "mongoose";
import { IUser } from "../@types/models";

const UserModel = new mongoose.Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  name: String,
  role: {
    enum: ["admin", "user"],
    default: "user"
  }
}, { timestamps: true })


export default mongoose.model("user", UserModel)