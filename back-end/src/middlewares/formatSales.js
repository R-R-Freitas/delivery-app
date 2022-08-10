const formatProducts = (products) => products.map((product) => {
    const { salesProduct, ...productWithoutQuantity } = product;
    return { quantity: salesProduct.quantity, ...productWithoutQuantity };
  });

const formatSales = async (req, res, _next) => {
  const { sales } = req;
  const formatedSales = sales.map((sale) => {
    const { products, ...saleWithoutProducts } = sale;
    const formatedProducts = formatProducts(products);
    return { ...saleWithoutProducts, products: formatedProducts };
  });
  return res.status(200).json(formatedSales);
};

const formatSale = async (req, res, _next) => {
  const { sale } = req;
  const { products, ...saleWithoutProducts } = sale;
  const formatedProducts = formatProducts(products);
  const formatedSale = { ...saleWithoutProducts, products: formatedProducts };
  return res.status(200).json(formatedSale);
};

module.exports = {
  formatSales,
  formatSale,
};
