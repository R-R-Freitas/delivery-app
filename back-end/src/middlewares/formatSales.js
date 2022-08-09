const formatSales = async (req, res, _next) => {
  const { sales } = req;
  const formatedSales = sales.map((sale) => {
    const { products, ...saleWithoutProducts } = sale;
    const formatedProducts = products.map((product) => {
      const { salesProduct, ...productWithoutQuantity } = product;
      return { quantity: salesProduct.quantity, ...productWithoutQuantity };
    });
    return { products: formatedProducts, ...saleWithoutProducts };
  });
  return res.status(200).json(formatedSales);
};

module.exports = formatSales;