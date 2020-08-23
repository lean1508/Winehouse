const express = require('express');
const router = express.Router();
const path = require('path');

const productoController = require(path.resolve(__dirname, '..', 'controllers', 'productoController'));

router.get('/producto/detalle/:id', productoController.show);
router.get('/categoria/:id', productoController.verCategoria);
router.get('/masVendidos', productoController.verMasVendidos);
router.get('/recomendados', productoController.verRecomendados);
router.get('/ofertas', productoController.verOfertas);
router.post('/busqueda', productoController.search);
router.post('/categoria/filtrar', productoController.verCategoriaFiltro);

module.exports = router;