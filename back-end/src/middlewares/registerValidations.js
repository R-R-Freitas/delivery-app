const Joi = require('joi');
const errorObject = require('../')

const newUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registerValidations = (req, _res, next) => {
  const validRegister = newUserSchema.validate(req.body);
  if (validRegister.error) {
    throw errorObject(400, validRegister.error.details[0].message);
  };
  req.body.role = 'customer';
  next();
};
