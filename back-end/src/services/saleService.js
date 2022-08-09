const { sale, user, product } = require('../database/models');

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
  const salesByCustomer = plainSales.map((aSale) => {
    const { products, ...thisSale } = aSale;
    const formatedProducts = products.map((aProduct) => {
      const { salesProduct, ...bProduct } = aProduct;
      return { quantity: salesProduct.quantity, ...bProduct };
    });
    return { products: formatedProducts, ...thisSale };
  });
  return salesByCustomer;
};

module.exports = {
  create,
  findByUserId,
};
