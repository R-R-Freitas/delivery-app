const express = require('express');
const rescue = require('express-rescue');
const user = require('../controllers/userController');

const router = express.Router();

router.post('/', rescue(user.create));

module.exports = router;
