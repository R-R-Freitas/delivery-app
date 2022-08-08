const express = require('express');
const rescue = require('express-rescue');
const product = require('../controllers/productController');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.get('/', 
  [rescue(authToken)],
  rescue(product.findAll));

module.exports = router;
