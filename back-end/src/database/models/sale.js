const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: false,
    underscored: true,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
    sale.belongsTo(models.user, { foreignKey: 'seller_id', as: 'seller' });
  };

  return sale;
};

module.exports = sale;
