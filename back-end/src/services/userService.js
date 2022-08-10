const { Op } = require('sequelize');
const { user } = require('../database/models');
const errorObject = require('../utils/errorObject');

const create = async (name, email, password, role) => {
  const newUser = await user.create({ name, email, password, role });
  const { password: noPassword, ...userWithoutPassword } = newUser.dataValues;
  return userWithoutPassword;
};

const findByEmailOrName = async (name, email) => {
  const userByEmailOrName = await user.findOne({ where: {
    [Op.or]: [
      { name },
      { email },
    ],
  } });
  if (userByEmailOrName) throw errorObject(409, 'User already registered');
};

const login = async (email, pwd) => {
  const loggedUser = await user.findOne({ where: { email } });
  if (!loggedUser || pwd !== loggedUser.password) {
    throw errorObject(404, 'Invalid email or password');
  }
  const { password, ...userWithoutPassword } = loggedUser.dataValues;
  return userWithoutPassword;
};

module.exports = {
  create,
  findByEmailOrName,
  login,
  findAll,
};
