const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');

const secret = readFileSync('jwt.evaluation.key', 'utf8');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

module.exports = generateJWT;
