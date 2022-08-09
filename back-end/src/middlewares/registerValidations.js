const Joi = require('joi');
const errorObject = require('../utils/errorObject');

const newUserByAdmin = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('customer', 'seller', 'administrator').required(),
});

const newUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registerValidations = (req, _res, next) => {
  const validRegister = newUserSchema.validate(req.body);
  if (validRegister.error) {
    throw errorObject(400, validRegister.error.details[0].message);
  }
  req.body.role = 'customer';
  next();
};

const registerByAdminValidations = async (req, res, next) => {
  if (req.user && req.user.role === 'administrator') {
    const validRegister = newUserByAdmin.validate(req.body);
    if (validRegister.error) {
      throw errorObject(400, validRegister.error.details[0].message);
    }
    next();
  }
}

module.exports = {
  registerValidations,
  registerByAdminValidations,
};
