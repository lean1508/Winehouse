const express = require('express');
const router = express.Router();
const path = require('path');
const controlStock = require('../middlewares/controlStock');

const cartController = require(path.resolve(__dirname, '..', 'controllers', 'cartController'));

router.get('/cart', cartController.index);
router.post('/cart/addProduct', controlStock, cartController.add);
router.post('/cart/deleteProduct', cartController.delete);
router.post('/cart/minusItem', cartController.minusItem);
router.post('/cart/plusItem', controlStock, cartController.plusItem);
router.post('/cart/empty', cartController.emptyCart);
router.get('/cart/delivery', cartController.delivery);

module.exports = router;