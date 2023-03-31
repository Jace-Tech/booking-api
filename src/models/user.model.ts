import mongoose from "mongoose";
import { IUser } from "../@types/models";

const UserModel = new mongoose.Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true
  },
  NOKname: {
    type: String,
    default: null
  },
  NOKphone: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  password: String,
  name: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
}, { timestamps: true })


export default mongoose.model("user", UserModel)