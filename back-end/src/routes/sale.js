const express = require('express');
const rescue = require('express-rescue');
const sale = require('../controllers/saleController');
const salesProduct = require('../controllers/salesProductController');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', 
  [
    rescue(authToken),
    rescue(sale.create),
  ],
  rescue(salesProduct.create));

module.exports = router;
