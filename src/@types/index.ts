import { Request } from 'express';
import { IUser } from './models';

export interface RequestAlt extends Request {
  user: IUser
}