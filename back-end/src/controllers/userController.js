const userService = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const create = async (req, res, _next) => {
  const { name, email, hash: password, role } = req.body;
  const user = await userService.create(name, email, password, role);
  const token = generateJWT(user);
  return res.status(201).json({ ...user, token });
};

const getByEmailOrName = async (req, _res, next) => {
  const { name, email } = req.body;
  await userService.getByEmailOrName(name, email);
  next();
};

const login = async (req, _res, next) => {
  const { email, hash: password } = req.body;
  const loggedUser = userService.login(email, password);
  const token = generateJWT(loggedUser);
  return res.status(200).json({ ...loggedUser, token });
};

module.exports = {
  create,
  getByEmailOrName,
  login,
};
