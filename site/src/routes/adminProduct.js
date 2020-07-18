const express = require('express');
const router = express.Router();
const path = require('path');

const adminProductController = require(path.resolve(__dirname, '..', 'controllers', 'adminProductController'));

router.get('/admin/productos', adminProductController.index);
router.get('/admin/productos/agregar1', adminProductController.productAdd1);
router.get('/admin/productos/agregar2', adminProductController.productAdd2);
router.get('/admin/productos/agregar3', adminProductController.productAdd3);

module.exports = router;