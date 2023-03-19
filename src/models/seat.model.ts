import mongoose from 'mongoose';
import { ISeat } from '../@types/models';


const seatSchema = new mongoose.Schema<ISeat>({
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bus"
  },
  isBooked: {
    type: Boolean,
    default: false
  },
  seatNo: Number
}, { timestamps: true });

export default mongoose.model('seat', seatSchema)