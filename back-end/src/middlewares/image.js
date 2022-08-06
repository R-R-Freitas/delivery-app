const getImage = async(req, res, _next) => {
  const { filename } = req.params;
  res.sendFile(`/images/${filename}`);
};

module.exports = {
  getImage,
 };
 