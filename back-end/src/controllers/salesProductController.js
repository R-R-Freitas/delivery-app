const salesProductService = require('../services/salesProductService');

const create = async (req, res, _next) => {
  const { saleProducts, saleId } = req.body;
  await salesProductService.create(saleId, saleProducts);
  res.status(201).json({ saleId });
};

module.exports = {
  create,
};
