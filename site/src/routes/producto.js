const express = require('express');
const router = express.Router();
const path = require('path');

const productoController = require(path.resolve(__dirname, '..', 'controllers', 'productoController'));

router.get('/producto/detalle/:id', productoController.show);
router.get('/categoria/:id', productoController.verCategoria);
router.get('/mejorCalificados', productoController.verParaBrindar);
router.get('/masVendidos', productoController.verMasVendidos);
router.get('/recomendados', productoController.verRecomendados);
router.get('/ofertas', productoController.verOfertas);

module.exports = router;