const md5 = require('md5');

const hashPassword = (req, _res, next) => {
  const { password } = req.body;
  const hash = md5(password);
  req.body.hash = hash;
  next();
};

module.exports = hashPassword;
