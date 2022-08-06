const productService = require('../services/productService');

const findAll = async (req, res, _next) => {
  const allProducts = await productService.findAll();
  res.status(200).json(allProducts);
};

module.exports = {
  findAll,
};
