const express = require('express');
const rescue = require('express-rescue');
const product = require('../controllers/productController');

const router = express.Router();

router.get('/', rescue(product.findAll));

module.exports = router;
