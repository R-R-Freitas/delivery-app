const path = require('path');

const getImage = async (req, res, _next) => {
  const { filename } = req.params;
  const options = { root: path.join(__dirname, '../../images') };
  res.sendFile(filename, options);
};

module.exports = {
  getImage,
 };
