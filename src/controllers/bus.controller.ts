import { BadRequestError, NotFoundError } from './../utils/customError';
import { response } from './../utils/response';
import { Response, Request } from 'express';
import busModel from '../models/bus.model';
import { isThisTypeNode } from 'typescript';
import mongoose from 'mongoose';

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