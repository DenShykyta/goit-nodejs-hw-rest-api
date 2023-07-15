const createError = require("http-errors");

const validation = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(createError(400, "missing fields"));
    }
    next();
  };
  return func;
};

module.exports = validation;
