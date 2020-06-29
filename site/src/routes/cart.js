const express = require('express');
const router = express.Router();
const path = require('path');

const cartController = require(path.resolve(__dirname, '..', 'controllers', 'cartController'));

router.get('/cart', cartController.index)

module.exports = router;