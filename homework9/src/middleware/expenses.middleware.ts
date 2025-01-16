import { Response, Request, NextFunction } from 'express';
const isKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const headerskey = req.headers.key;
  if (!headerskey) {
    res.status(400).json({ message: 'Invalid order please write the key' });

    return;
  }

  next();
};

const areAllRequiredFieldsfilled = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, amount, category } = req.body;

  if (!title || !amount || !category) {
    res
      .status(400)
      .json({ message: 'please fill all fields:  title, amount and category' });
    return;
  }

  next();
};
export { isKeyMiddleware, areAllRequiredFieldsfilled };
