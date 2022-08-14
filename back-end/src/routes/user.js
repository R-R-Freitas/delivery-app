const express = require('express');
const rescue = require('express-rescue');
const user = require('../controllers/userController');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.get('/:role',
[
  rescue(authToken),
],
  rescue(user.findAllByRole));

module.exports = router;
