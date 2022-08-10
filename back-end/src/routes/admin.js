const express = require('express');
const rescue = require('express-rescue');
const user = require('../controllers/userController');
const registerValidations = require('../middlewares/registerValidations');
const hashPassword = require('../middlewares/hashPassword');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/',
  [
    rescue(authToken),
    rescue(registerValidations.registerByAdminValidations),
    rescue(user.findByEmailOrName),
    rescue(hashPassword),
  ],
  rescue(user.createByAdmin));

module.exports = router;
