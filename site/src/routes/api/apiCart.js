const express = require('express');
const router = express.Router();
const path = require('path');

const apiCartController = require(path.resolve(__dirname, '..', '..', 'controllers', 'api', 'apiCartController'));

router.post('/cart/itemStockControl', apiCartController.itemStock);
router.get('/cart/contentStockControl', apiCartController.contentStock);

module.exports = router;