const express = require('express');
const router = express.Router();
const path = require('path');

const productoController = require(path.resolve(__dirname, '..', 'controllers', 'productoController'));

router.get('/productos/detalle', productoController.detail);

module.exports = router;