const express = require('express');
const rescue = require('express-rescue');
const image = require('../middlewares/image');

const router = express.Router();

router.get('/:filename', rescue(image.getImage));

module.exports = router;
