const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginValidations = (req, _res, next) => {
  const validLogin = loginSchema.validate(req.body);
  if (validLogin.error) throw errorObject(400, validLogin.error.details[0].message)
  next();
};

module.exports = {
  loginValidations,
};
