const express = require('express');
const router = express.Router();
const path = require('path');

const ratingController = require(path.resolve(__dirname, '..', '..', 'controllers', 'api', 'ratingController'));

router.get('/ratings/user/:id', ratingController.getByUser);
router.get('/ratings/product/:id', ratingController.getByProduct);

module.exports = router;