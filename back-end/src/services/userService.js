const { user } = require('../database/models');
const errorObject = require('../utils/errorObject');

const create = async (name, email, password, role) => {
  const newUser = await user.create({ name, email, password, role });
  const { password: noPassword, ...userWithoutPassword } = newUser.dataValues;
  return userWithoutPassword;
};

const getByEmailOrName = async (name, email) => {
  const userByEmailOrName = await user.findOne({ where: {
    $or: [
      { name },
      { email },
    ],
  } });
  if (userByEmailOrName) throw errorObject(409, 'User already registered');
};

module.exports = {
  create,
  getByEmailOrName,
};
