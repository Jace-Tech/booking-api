import mongoose from "mongoose";
import { IGuest } from "../@types/models";

const GuestModel = new mongoose.Schema<IGuest>({
  email: {
    type: String,
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
  firstname: String,
  lastname: String,
}, { timestamps: true })


export default mongoose.model("guest", GuestModel)