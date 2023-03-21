import { response } from './../utils/response';
import { generateId } from './../utils/functions';
import { BadRequestError, NotFoundError } from './../utils/customError';
import { Request, Response } from 'express';
import { IBooking } from '../@types/models';
import bookingModel from '../models/booking.model';
import busModel from '../models/bus.model';
import seatModel from '../models/seat.model';

export const handleBooking = async (req: Request<{}, {}, IBooking>, res: Response) => {	 
  if(!req.body.bus) throw new BadRequestError("Bus id is required");
  if(!req.body.seat) throw new BadRequestError("Seat id is required");
  if(!req.body.route) throw new BadRequestError("Route id is required");
  if(!req.body.tickets) throw new BadRequestError("tickets is required");

  // Check if there's available seat in the bus
  const bus = await busModel.findOne({ _id: req.body.bus })
  if(!bus) throw new NotFoundError("No bus found!")
  if(bus.availableSeats < 1 || req.body.tickets > bus.availableSeats) throw new BadRequestError("There is no available seat in the bus")

  // Update bus Details
  bus.availableSeats -= req.body.tickets

  // Update bus seat
  let busSeats = [...bus.seats]
  busSeats = busSeats.map(id => id?.toString()) as any[]

  // Check if seats are already booked
  for (let i = 0; i < busSeats.length; i++) {
    if(req.body.seat.includes(busSeats[i])) {
      const seat = await seatModel.findById(busSeats[i])
      if(!seat) throw new NotFoundError("No seat found");
      if(seat?.isBooked) throw new BadRequestError("Seat already booked!")

      seat.isBooked = true
      await seat.save()
    }
  }

  // Save changes
  await bus.save()

  const ticketId = generateId()

  // Create booking
  const booking = await bookingModel.create({
    ...req.body,
    ticketId
  })

  res.status(201).send(response("Route Booked!", { ticketId, booking }))
}

export const handleGetBooking = async (req: Request<{id: string}>, res: Response) => {	 
  if(!req.params.id) throw new BadRequestError("Ticket ID is required")

  const booking = await bookingModel.findOne({ ticketId: req.params.id }).populate(["route", "bus", "seat"]).sort({ createdAt: 'desc' }).exec()
  if(!booking) throw new NotFoundError("Booking not found")

  res.status(200).send(response("Booking Details", booking))
}

export const handleGetAllBooking = async (req: Request, res: Response) => {	 
  const booking = await bookingModel.findOne({}).populate(["route", "bus", "seat"]).sort({ createdAt: 'desc' }).exec()
  if(!booking) throw new NotFoundError("Booking not found")

  res.status(200).send(response("All Booking ", booking))
}