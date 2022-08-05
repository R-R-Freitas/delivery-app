const userService = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const create = async (req, res, _next) => {
  const { name, email, hash: password, role } = req.body;
  const user = await userService.create(name, email, password, role);
  const token = generateJWT(user);
  return res.status(201).json({ ...user, token });
};

module.exports = {
  create,
};
