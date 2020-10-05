const express = require('express');
const router = express.Router();
const path = require('path');

const cartController = require(path.resolve(__dirname, '..', 'controllers', 'cartController'));

router.get('/cart', cartController.index);
router.post('/cart/addProduct', cartController.add);
router.post('/cart/deleteProduct', cartController.delete);

module.exports = router;