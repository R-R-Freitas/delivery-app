const saleService = require('../services/saleService');
const errorObject = require('../utils/errorObject');

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

const findBySellerId = async (req, _res, next) => {
  const { id, role } = req.user;
  if (role === 'customer') throw errorObject(403, 'Não Autorizado');
  const sales = await saleService.findBySellerId(id);
  req.sales = sales;
  next();
};

module.exports = {
  create,
  findByUserId,
  findBySellerId,
};
