const saleService = require('../services/saleService');

const create = async (req, _res, next) => {
  const { totalPrice, deliveryAddress, deliveryNumber, sellerId, userId } = req.body;
  const saleId = await saleService.create(
    { totalPrice, deliveryAddress, deliveryNumber, sellerId, userId },
  );
  req.body.saleId = saleId;
  next();
};

const findByUserId = async (req, _res, next) => {
  const { id } = req.user;
  const sales = await saleService.findByUserId(id);
  req.sales = sales;
  next();
};

module.exports = {
  create,
  findByUserId,
};
