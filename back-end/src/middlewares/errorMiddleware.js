const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'invalid token' });
  }
  if (!err.status || !err.message) {
    return res.status(500).json({ message: 'Internal server error' });
  }
  return res.status(err.status).json({ message: err.message });
};

module.exports = errorMiddleware;
