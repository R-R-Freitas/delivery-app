const express = require('express');
const rescue = require('express-rescue');
const user = require('../controllers/userController');
const registerValidations = require('../middlewares/registerValidations');
const hashPassword = require('../middlewares/hashPassword');

const router = express.Router();

router.post('/',
  [
    rescue(registerValidations),
    rescue(hashPassword),
  ],
  rescue(user.create));

module.exports = router;
