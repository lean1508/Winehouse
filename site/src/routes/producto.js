const express = require('express');
const router = express.Router();
const path = require('path');

const productoController = require(path.resolve(__dirname, '..', 'controllers', 'productoController'));

router.get('/producto/detalle', productoController.show);
router.get('/vinosTintos', productoController.verTintos);
router.get('/vinosBlancos', productoController.verBlancos);
router.get('/vinosRosados', productoController.verRosados);
router.get('/vinosEspumantes', productoController.verEspumantes);
router.get('/espirituosos', productoController.verEspirituosos);
router.get('/paraBrindar', productoController.verParaBrindar);
router.get('/masVendidos', productoController.verMasVendidos);
router.get('/recomendados', productoController.verRecomendados);
router.get('/promos', productoController.verPromos);

module.exports = router;