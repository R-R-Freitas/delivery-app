const { user } = require('../database/models');

const create = async (name, email, password, role) => {
  const newUser = await user.create({ name, email, password, role });
  const { password: noPassword, userWithoutPassword } = newUser.dataValues;
  return userWithoutPassword;
};

module.exports = {
  create,
}