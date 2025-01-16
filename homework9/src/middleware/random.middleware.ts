import { Express, Response, Request, NextFunction } from 'express';
export const flipCoinRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const random = Math.floor(Math.random() * 100);
  console.log(random);
  if (random < 50) {
    res
      .status(400)
      .json({ message: 'sorry, try again later to access this page' });
  }

  next();
};
