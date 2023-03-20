import { response } from './../utils/response';
import { Response, Request } from 'express';
import busModel from '../models/bus.model';

export const handleListBuses = async (req: Request, res: Response) => {	 
  const buses = await busModel.find({}).populate(["seats", {
    path: "route",
    model: "route",
  }])

  res.status(200).send(response("All buses", buses))
}