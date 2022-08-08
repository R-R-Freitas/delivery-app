const express = require('express');
const rescue = require('express-rescue');
const product = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', 
  [rescue(authMiddleware)],
  rescue(product.findAll)
);

module.exports = router;
