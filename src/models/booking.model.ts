import mongoose from 'mongoose';
import { IBooking } from '../@types/models';


const bookingSchema = new mongoose.Schema<IBooking>({
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "route"
  },
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bus"
  },
  seat: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "seat" }],
    default: []
  },
  price: {
    type: Number,
    default: 0
  },
  tickets: {
    type: Number,
    default: 1
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "guest",
    default: null
  },
  ticketId: {
    type: String,
    required: true
  },

}, { timestamps: true });

export default mongoose.model('booking', bookingSchema)