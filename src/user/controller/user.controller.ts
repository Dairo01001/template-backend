import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createUser } from '../services';

export const createUserHandler = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodes.CREATED).json(await createUser(req.body));
};
