const saleService = require('../services/saleService');

const create = async (req, _res, next) => {
  const { totalPrice, deliveryAddress, deliveryNumber, sellerId, userId } = req.body;
  const saleId = await saleService.create(
    { totalPrice, deliveryAddress, deliveryNumber, sellerId, userId },
  );
  req.body.saleId = saleId;
  next();
};

module.exports = {
  create,
};
