const userService = require('../services/userService');

const create = async (req, res, next) => {
  const { name, email, hash: password, role } = req.body;
  const user = await userService.create(name, email, password, role);
  return res.status(201).json(user);
};

module.exports = {
  create,
};
