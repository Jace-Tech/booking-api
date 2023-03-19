import mongoose from 'mongoose';
import { IRoute } from '../@types/models';


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

export default mongoose.model('route', routeSchema)