const customerLogin = {
  email: 'zebirita@email.com',
	password: '$#zebirita#$',
};

const sellerLogin = {
	email: 'fulana@deliveryapp.com',
	password: 'fulana@123',
};

const adminLogin = {
  email: 'adm@deliveryapp.com',
	password: '--adm2@21!!--',
};

customerId = {
  id: 3,
};

sellerId = {
  id: 2,
};

adminId = {
  id: 1,
};

const customerPassword = {
  password: '1c37466c159755ce1fa181bd247cb925',
};

const sellerPassword = {
  password: '3c28d2b0881bf46457a853e0b07531c6',
};

const adminPassword = {
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
};

const customerWithoutPasswordAndId = {
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  role: 'customer',
};

const sellerWithoutPasswordAndId = {
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  role: 'seller',
};

const adminWithoutPasswordAndId = {
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
};

module.exports = {
  customerLogin,
  sellerLogin,
  adminLogin,
  customerId,
  sellerId,
  adminId,
  customerPassword,
  sellerPassword,
  adminPassword,
  customerWithoutPasswordAndId,
  sellerWithoutPasswordAndId,
  adminWithoutPasswordAndId,
};
