const logger = require("./logger");

const loggingMiddleware = (
  req,
  res,
  next
) => {

  logger(
    `${req.method} ${req.originalUrl}`
  );

  next();
};

module.exports = loggingMiddleware;