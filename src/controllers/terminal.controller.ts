import { response } from './../utils/response';
import { BadRequestError } from './../utils/customError';
import { Request, Response } from 'express';
import { ITerminal } from '../@types/models';
import terminalModel from '../models/terminal.model';

export const handleCreateTerminal = async (req: Request<{}, {}, ITerminal>, res: Response) => {	 
  if(!req.body.name) throw new BadRequestError("name is required");
  if(!req.body.address) throw new BadRequestError("address is required");
  if(!req.body.state) throw new BadRequestError("state is required");

  const terminal = await terminalModel.create(req.body)
  res.status(201).send(response("Terminal created!", terminal));
}

export const handleDeleteTerminal = async (req: Request<{id: string}>, res: Response) => {	
  if(!req.params.id) throw new BadRequestError("The route id is required")
  const terminal = await terminalModel.findByIdAndDelete(req.params.id)

  res.status(200).send(response("Terminal deleted", terminal))
}

export const handleListTerminal = async (req: Request, res: Response) => {	 
  const terminals = await terminalModel.find({}, { __v: 0}).sort({ createdAt: 'desc' }).exec()
  res.status(200).send(response("All Terminals", terminals))
}