import mongoose from "mongoose";

interface IUser {
  password: string;
  name: string;
  email: string;
  role: string;
  NOKname: string;
  phone: string;
  address: string;
  NOKphone: string;
}

interface IGuest {
  firstname: string;
  lastname: string;
  email: string;
  NOKname: string;
  phone: string;
  address: string;
  NOKphone: string;
}

interface INotification {
  user: mongoose.Schema.Types.ObjectId;
  message: string;
  title?: string;
  link?: string;
  isRead?: boolean;
}

interface ITerminal {
  name: string;
  address: string;
  state: string;
  phone?: string;
}

interface IRoute {
  from: mongoose.Schema.Types.ObjectId;
  to: mongoose.Schema.Types.ObjectId;
  type: string;
  acPrice: number;
  nonAcPrice: number;
  buses: mongoose.Schema.Types.ObjectId[]
}

interface IBus {
  name: string;
  busType?: string;
  route: mongoose.Schema.Types.ObjectId;
  boardingDate:  mongoose.Schema.Types.Date;
  availableSeats: number;
  price: number;
  seats: mongoose.Schema.Types.ObjectId[]
}

interface ISeat {
  seatNo: number;
  isBooked: boolean;
  bus: mongoose.Schema.Types.ObjectId
}

interface IBooking {
  route: mongoose.Schema.Types.ObjectId;
  bus: mongoose.Schema.Types.ObjectId;
  seat: mongoose.Schema.Types.ObjectId[];
  tickets: number;
  price: number;
  ticketId: string;
  user: mongoose.Schema.Types.ObjectId | null;
}

interface IBookingParams extends IBooking  {
  info: IGuest
}