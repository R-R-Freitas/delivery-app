const express = require('express');
const rescue = require('express-rescue');
const user = require('../controllers/userController');
const loginValidations = require('../middlewares/loginValidations');
const hashPassword = require('../middlewares/hashPassword');

const router = express.Router();

router.post('/',
  [
    rescue(loginValidations),
    rescue(hashPassword),
  ],
  rescue(user.login));

module.exports = router;
