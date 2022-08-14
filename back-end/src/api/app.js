const express = require('express');
const errorMiddleware = require('../middlewares/errorMiddleware');
const register = require('../routes/register');
const login = require('../routes/login');
const user = require('../routes/user');
const product = require('../routes/product');
const sale = require('../routes/sale');
const admin = require('../routes/admin');
const images = require('../routes/images');

const app = express();

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.json());
app.use(accessControl);

app.use('/login', login);
app.use('/register', register);
app.use('/user', user);
app.use('/product', product);
app.use('/sale', sale);
app.use('/admin', admin);
app.use('/images', images);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);

module.exports = app;
