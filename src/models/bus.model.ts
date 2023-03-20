import mongoose from 'mongoose';
import { IBus } from '../@types/models';
import seatModel from './seat.model';


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
  busType: {
    type: String,
    enum: ['acBus', 'nonAcBus'],
    default: 'nonAcBus'
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

busSchema.post("findOneAndDelete", async(doc) => {
  const seats = doc?.seats
  if(!seats || !seats.length) return;

  for(let i = 0; i < seats.length; i++) {
    await seatModel.findByIdAndDelete(seats[i])
  }
})

export default mongoose.model('bus', busSchema)