import mongoose from 'mongoose';
import { IRoute } from '../@types/models';
import busModel from './bus.model';


const routeSchema = new mongoose.Schema<IRoute>({
  type: String,
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "terminal"
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "terminal"
  },
  acPrice: {
    type: Number,
    required: true
  },
  nonAcPrice: {
    type: Number,
    required: true
  },
  buses: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "bus" }],
    default: []
  }
}, { timestamps: true });

routeSchema.post("findOneAndDelete", async (doc) => {
  // Delete buses
  const buses = doc.buses
  if(!buses || !buses.length) return;
  for(let i = 0; i < buses.length; i++) {
    await busModel.findByIdAndDelete(buses[i])
  }
})

export default mongoose.model('route', routeSchema)