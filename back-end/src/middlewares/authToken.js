const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const errorObject = require('../utils/errorObject');

const notFound = 'Token not found';
const secret = readFileSync('jwt.evaluation.key', 'utf8');

const authToken = async (req, _res, next) => {
    const token = req.headers.authorization;

    if (!token) throw errorObject(401, notFound);
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
};

module.exports = authToken;
