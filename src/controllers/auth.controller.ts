import { except } from './../utils/functions';
import { generateToken } from './../utils/token';
import { response } from './../utils/response';
import { BadRequestError, NotFoundError } from './../utils/customError';
import { Request, Response } from 'express';
import { IUser } from '../@types/models';
import bcrypt from "bcrypt"
import userModel from '../models/user.model';

export const handleAdminSignup = async (req: Request<{}, {}, IUser>, res: Response) => {	 
  if(!req.body.email) throw new BadRequestError("Email is required");
  if(!req.body.name) throw new BadRequestError("name is required");
  if(!req.body.password) throw new BadRequestError("password is required");

  req.body.password = await bcrypt.hash(req.body.password, 10)

  // Check if password exists
  const exists = await userModel.findOne({ email: req.body.email })
  if(exists) throw new BadRequestError("User already exists");

  const admin = await userModel.create({
    ...req.body,
    role: "admin",
  })

  const data = except(admin.toObject(), "password", "__v")

  res.status(201).send(response("Account created!", data))
}

export const handleSignup = async (req: Request, res: Response) => {
  if(!req.body.email) throw new BadRequestError("Email is required");
  if(!req.body.name) throw new BadRequestError("name is required");
  if(!req.body.password) throw new BadRequestError("password is required");

  req.body.password = await bcrypt.hash(req.body.password, 10)

  // Check if password exists
  const exists = await userModel.findOne({ email: req.body.email })
  if(exists) throw new BadRequestError("User already exists");

  const admin = await userModel.create({
    ...req.body,
  })

  const data = except(admin.toObject(), "password", "__v")

  res.status(201).send(response("Account created!", data))
}

export const handleRegisterInfo = async (req: Request, res: Response) => {
  if(!req.body.email) throw new BadRequestError("Email is required");
  if(!req.body.name) throw new BadRequestError("name is required");

  // Check if password exists
  const exists = await userModel.findOne({ email: req.body.email })
  if(exists) throw new BadRequestError("User already exists");

  const admin = await userModel.create({
    ...req.body,
  })

  const data = except(admin.toObject(), "password", "__v")

  res.status(201).send(response("Account created!", data))
}

export const handleLogin = async (req: Request, res: Response) => {	 
  if(!req.body.email) throw new BadRequestError("Email is required");
  if(!req.body.password) throw new BadRequestError("password is required");

  const user = await userModel.findOne({ email: req.body.email })
  if(!user) throw new NotFoundError("Incorrect Credentials");

  if(!await bcrypt.compare(req.body.password, user.password)) throw new BadRequestError("Incorrect Credentials")

  const token = generateToken({ role: user.role, userId: user._id }, "7d")
  const data = except(user.toObject(), "password", "__v")
  res.status(200).send(response("Log in success", {token, user: data}))
}