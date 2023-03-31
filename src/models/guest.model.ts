import mongoose from "mongoose";
import { IGuest } from "../@types/models";

const GuestModel = new mongoose.Schema<IGuest>({
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
  name: String
}, { timestamps: true })


export default mongoose.model("guest", GuestModel)