import mongoose from 'mongoose';
import { IBus } from '../@types/models';


const busSchema = new mongoose.Schema<IBus>({
  name: String,
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "route"
  },
  price: Number,
  availableSeats: {
    type: Number,
    default: 16
  },
  boardingDate: {
    type: mongoose.Schema.Types.Date,
    required: true
  },
  seats: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "seat"}],
    default: []
  }

}, { timestamps: true });

export default mongoose.model('bus', busSchema)