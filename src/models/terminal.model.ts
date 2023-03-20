import mongoose from 'mongoose';
import { ITerminal } from '../@types/models';
import routesModel from './routes.model';


const terminalSchema = new mongoose.Schema<ITerminal>({
  name: String,
  address: String,
  phone: {
    type: String,
    default: null
  },
  state: String
}, { timestamps: true });

// MIDDLEWARES
terminalSchema.post("findOneAndDelete", async (doc) => {
  // Delete from routes
  await routesModel.findByIdAndDelete(doc._id)
})

export default mongoose.model('terminal', terminalSchema)