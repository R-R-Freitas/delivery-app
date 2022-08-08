const { salesProduct } = require('../database/models');

const create = async (saleId, saleProducts) => {
  await saleProducts.forEach(async (product) => salesProduct.create({
    saleId,
    productId: product.productId,
    quantity: product.quantity,
  }));
};

module.exports = {
  create,
};
