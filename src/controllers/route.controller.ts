import { response } from './../utils/response';
import { BadRequestError } from './../utils/customError';
import { Request, Response } from 'express';
import { IBus, IRoute } from '../@types/models';
import routesModel from '../models/routes.model';
import busModel from '../models/bus.model';
import seatModel from '../models/seat.model';

export const handleCreateRoute = async (req: Request<{}, {}, IRoute>, res: Response) => {	
  if(!req.body.from) throw new BadRequestError("From location is required");
  if(!req.body.to) throw new BadRequestError("To location is required");
  if(!req.body.acPrice) throw new BadRequestError("AC bus price is required");
  if(!req.body.type) throw new BadRequestError("Route type is required");
  if(!req.body.nonAcPrice) throw new BadRequestError("Non-AC bus price is required");
  
  const route = await routesModel.create(req.body)
  res.status(201).send(response("Route created!", route))
}

export const createRouteBus = async (req: Request<{id: string}, {}, IBus & { seatNumber: number}>, res: Response) => {
  if(!req.params.id) throw new BadRequestError("Route id is required")
  if(!req.body.name) throw new BadRequestError("Bus name is required")
  if(!req.body.price) throw new BadRequestError("Price is required")
  if(!req.body.boardingDate) throw new BadRequestError("Boarding date is required")
  if(!req.body.seatNumber) throw new BadRequestError("No of seat is required")
  
  // Create bus object
  const bus = new busModel({
    ...req.body, 
    route: req.params.id
  })

  // Generate Seats
  const seats = []

  for (let index = 1; index <= req.body.seatNumber; index++) {
    let seat = await seatModel.create({bus: bus._id, seatNo: index})
    seats.push(seat._id)
  }

  // Update the bus object
  bus.seats = seats as any[]

  // Update the route obj
  const route = await routesModel.findByIdAndUpdate(req.params.id, { $push: { buses: bus._id } }).populate(["from", "to", {
    path: "buses",
    model: "bus",
    populate: {
      path: "buses.seats",
      model: "seat"
    }
  }])

  res.status(201).send(response("Bus created", route))
}