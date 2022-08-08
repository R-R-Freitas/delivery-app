const { sale } = require('../database/models');

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

module.exports = {
  create,
};
