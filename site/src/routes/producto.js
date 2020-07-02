const express = require('express');
const router = express.Router();
const path = require('path');

const productoController = require(path.resolve(__dirname, '..', 'controllers', 'productoController'));

router.get('/producto/detalle', productoController.show);
router.get('/vinosTintos', productoController.verTintos);

module.exports = router;