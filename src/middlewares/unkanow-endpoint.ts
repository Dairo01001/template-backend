import { Request, Response } from 'express';

export const unkanowEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ message: 'Not found' });
};
