const { sale, user, product } = require('../database/models');
const errorObject = require('../utils/errorObject');

const create = async (newSale) => {
  const { totalPrice, deliveryAddress, deliveryNumber, sellerId, userId } = newSale; 
  const status = 'Pendente';
  const saleDate = new Date();
  const newSaleData = await sale.create(
    {
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      sellerId,
      userId,
      status,
      saleDate,
    },
  );
  const { id } = newSaleData.dataValues;
  return id;
};

const findByUserId = async (userId) => {
  const sales = await sale.findAll({
    where: { userId },
    include: [
      { model: user, as: 'user', attributes: { exclude: ['password'] } },
      { model: user, as: 'seller', attributes: { exclude: ['password'] } },
      { model: product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  const plainSales = sales.map((aSale) => aSale.get({ plain: true }));
  return plainSales;
};

const findBySellerId = async (sellerId) => {
  const sales = await sale.findAll({
    where: { sellerId },
    include: [
      { model: user, as: 'user', attributes: { exclude: ['password'] } },
      { model: user, as: 'seller', attributes: { exclude: ['password'] } },
      { model: product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  const plainSales = sales.map((aSale) => aSale.get({ plain: true }));
  return plainSales;
};

const findById = async (id) => {
  const saleDetails = await sale.findByPk(
    id,
    {
      include: [
        { model: user, as: 'user', attributes: { exclude: ['password'] } },
        { model: user, as: 'seller', attributes: { exclude: ['password'] } },
        { model: product, as: 'products', through: { attributes: ['quantity'] } },
      ],
    },
  );
  if (!saleDetails) throw errorObject(404, 'Não encontrado');
  const plainSale = saleDetails.get({ plain: true });
  return plainSale;
};

module.exports = {
  create,
  findByUserId,
  findBySellerId,
  findById,
};
