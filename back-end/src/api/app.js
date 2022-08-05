const express = require('express');
const register = require('../routes/register');

const app = express();

app.use(express.json());
app.use('/register', register);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
