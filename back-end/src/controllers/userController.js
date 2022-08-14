const userService = require('../services/userService');
const generateJWT = require('../utils/generateJWT');
const errorObject = require('../utils/errorObject');

const forbidden = 'Não autorizado';
const admin = 'administrator';
const seller = 'seller';
const customer = 'customer';

const create = async (req, res, _next) => {
  const { name, email, hash: password, role } = req.body;
  const user = await userService.create(name, email, password, role);
  const token = generateJWT(user);
  const { id, ...userWithoutId } = user;
  return res.status(201).json({ ...userWithoutId, token });
};

const createByAdmin = async (req, res, _next) => {
  const { name, email, hash: password, role } = req.body;
  const { role: adminRole } = req.user;
  if (adminRole !== admin) throw errorObject(403, forbidden);
  const user = await userService.create(name, email, password, role);
  const token = generateJWT(user);
  const { id, ...userWithoutId } = user;
  return res.status(201).json({ ...userWithoutId, token });
};

const findByEmailOrName = async (req, _res, next) => {
  const { name, email } = req.body;
  await userService.findByEmailOrName(name, email);
  next();
};

const login = async (req, res, _next) => {
  const { email, hash: password } = req.body;
  const loggedUser = await userService.login(email, password);
  const token = generateJWT(loggedUser);
  const { id, ...userWithoutId } = loggedUser;
  return res.status(200).json({ ...userWithoutId, token });
};

const findAll = async (req, res, _next) => {
  const { role } = req.user;
  if (role !== admin) throw errorObject(403, forbidden);
  const allUsers = await userService.findAll();
  return res.status(200).json(allUsers);
};

const destroy = async (req, res, _next) => {
  const { role } = req.user;
  const { id } = req.params;
  if (role !== admin) throw errorObject(403, forbidden);
  await userService.destroy(id);
  return res.status(200).json({ removed: id });
};

const findAllByRole = async (req, res, _next) => {
  const { role: userRole } = req.user;
  const { role } = req.params;
  if (role !== seller || userRole !== customer) throw errorObject(403, forbidden);
  const allUsers = await userService.findAllByRole(role);
  return res.status(200).json(allUsers);
};

module.exports = {
  create,
  createByAdmin,
  findByEmailOrName,
  login,
  findAll,
  destroy,
  findAllByRole,
};
