import { response } from './../utils/response';
import { BadRequestError } from './../utils/customError';
import { Request, Response } from 'express';
import userModel from '../models/user.model';

export const handleDeleteUser = async (req: Request<{id: string}>, res: Response) => {	
  if(!req.params.id) throw new BadRequestError("Id is required")

  const user = await userModel.findOne({_id: req.params.id}, { password: 0, __v: 0 })
  if(!user) throw new BadRequestError("No user found")

  await user.delete()
  res.status(200).send(response("User deleted!", user))
}

export const handleListUsers = async (req: Request, res: Response) => {	 
  const users = await userModel.find({}, { password: 0, __v: 0 })
  res.status(200).send(response("All users", users))
}