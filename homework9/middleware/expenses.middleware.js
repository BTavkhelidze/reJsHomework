const isKeyMiddleware = (req, res, next) => {
  const headerskey = req.headers.key;
  if (!headerskey) {
    return res
      .status(400)
      .json({ message: 'Invalid order please write the key' });
  }

  next();
};

export default isKeyMiddleware;
