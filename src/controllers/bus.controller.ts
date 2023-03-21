import { BadRequestError } from './../utils/customError';
import { response } from './../utils/response';
import { Response, Request } from 'express';
import busModel from '../models/bus.model';
import { isThisTypeNode } from 'typescript';

export const handleListBuses = async (req: Request, res: Response) => {	 
  const buses = await busModel.find({}).populate(["seats", {
    path: "route",
    model: "route",
  }])

  res.status(200).send(response("All buses", buses))
}

export const handleRouteListBuses = async (req: Request<{id: string}>, res: Response) => {
  if(!req.params.id) throw new BadRequestError("Route ID is required")	 

  const buses = await busModel.find({route: req.params.id }).populate(["seats", {
    path: "route",
    model: "route",
  }])

  res.status(200).send(response("Route buses", buses))
}