import mongoose from 'mongoose';
import { ITerminal } from '../@types/models';


const terminalSchema = new mongoose.Schema<ITerminal>({
  name: String,
  address: String,
  phone: {
    type: String,
    default: null
  },
  state: String
}, { timestamps: true });

export default mongoose.model('terminal', terminalSchema)