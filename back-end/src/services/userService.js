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

const findAll = async () => {
  const allUsers = await user.findAll({
    where: { role: { [Op.ne]: 'administrator' } },
    attributes: { exclude: ['password'] },
  });
  return allUsers;
};

const findAllByRole = async (role) => {
  const allUsers = await user.findAll({
    where: { role },
    attributes: { exclude: ['password', 'email'] },
  });
  return allUsers;
};

const destroy = async (id) => {
  const deletion = await user.destroy({ where: { id } });
  if (!deletion) throw errorObject(404, 'Não encontrado');
};

module.exports = {
  create,
  findByEmailOrName,
  login,
  findAll,
  destroy,
  findAllByRole,
};
