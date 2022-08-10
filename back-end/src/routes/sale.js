const express = require('express');
const rescue = require('express-rescue');
const sale = require('../controllers/saleController');
const salesProduct = require('../controllers/salesProductController');
const formatSales = require('../middlewares/formatSales');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', 
  [
    rescue(authToken),
    rescue(sale.create),
  ],
  rescue(salesProduct.create));

router.get('/customer',
  [
    rescue(authToken),
    rescue(sale.findByUserId),
  ],
  rescue(formatSales.formatSales));

  router.get('/seller',
  [
    rescue(authToken),
    rescue(sale.findBySellerId),
  ],
  rescue(formatSales.formatSales));

  router.get('/:id',
    [
      rescue(authToken),
      rescue(sale.findById),
    ],
    rescue(formatSales.formatSale));
  
  router.put('/:id',
    [
      rescue(authToken),
      rescue(sale.update),
    ],
    rescue(formatSales.formatSale));

module.exports = router;
