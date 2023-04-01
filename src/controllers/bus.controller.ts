import { BadRequestError, NotFoundError } from './../utils/customError';
import { response } from './../utils/response';
import { Response, Request } from 'express';
import busModel from '../models/bus.model';
import { isThisTypeNode } from 'typescript';
import mongoose from 'mongoose';
import { IBus } from '../@types/models';
import seatModel from '../models/seat.model';

export const handleListBuses = async (req: Request, res: Response) => {	 
  const buses = await busModel.find({}).populate(["seats", {
    path: "route",
    model: "route",
  }])

  res.status(200).send(response("All buses", buses))
}

export const handleDeleteBus = async (req: Request<{id: mongoose.Types.ObjectId}>, res: Response) => {	
  if(!req.params.id) throw new BadRequestError("Bus ID is required")

  const bus = await busModel.findOneAndDelete({ _id: req.params.id })
  if(!bus) throw new NotFoundError("Bus not found")

  res.status(200).send(response("Bus Deleted!", bus))
}

export const handleRouteListBuses = async (req: Request<{id: string}>, res: Response) => {
  if(!req.params.id) throw new BadRequestError("Route ID is required")	 

  const buses = await busModel.find({route: req.params.id }).populate(["seats", {
    path: "route",
    model: "route",
  }])

  res.status(200).send(response("Route buses", buses))
}

export const handleUpdateBus = async (req: Request<{id: string}>, res: Response) => {
  if(!req.params.id) throw new BadRequestError("Route ID is required")	 

  // Check if bus exists
  const busExists = await busModel.findOne({ _id: req.params.id })
  if(!busExists) throw new NotFoundError("Bus not found")

  await busExists.updateOne({...req.body})

  if(req.body.seatNumber && req.body.seatNumber !== busExists.seats.length) {
    // DELETE ALL THE OTHER SEATS
    for (let index = 0; index < busExists.seats.length; index++) {
      await seatModel.findByIdAndDelete(busExists.seats[index])
    }

    const seats = []
    // ADD NEW SEATS
    for (let index = 1; index <= req.body.seatNumber; index++) {
      let seat = await seatModel.create({bus: busExists._id, seatNo: index})
      seats.push(seat._id)
    }
  
    // Update the bus object
    busExists.seats = seats as any[]
    await busExists.save()
  }

  const bus = await busModel.findById(req.params.id)
  res.status(200).send(response("Bus updated", bus))
}