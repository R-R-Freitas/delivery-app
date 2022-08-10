const saleService = require('../services/saleService');
const errorObject = require('../utils/errorObject');

const create = async (req, _res, next) => {
  const { totalPrice, deliveryAddress, deliveryNumber, sellerId } = req.body;
  const { id: userId } = req.user;
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

const findById = async (req, _res, next) => {
  const { id } = req.params;
  const sale = await saleService.findById(id);
  req.sale = sale;
  next();
};

const update = async (req, _res, next) => {
  const validStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];
  const { status } = req.body;
  if (!validStatus.includes(status)) throw errorObject(400, 'Dados inválidos');
  const { id } = req.params;
  const { role } = req.user;
  if (role === 'customer') throw errorObject(403, 'Não Autorizado');
  const sale = await saleService.update(id, status);
  req.sale = sale;
  next();
};

module.exports = {
  create,
  findByUserId,
  findBySellerId,
  findById,
  update,
};
