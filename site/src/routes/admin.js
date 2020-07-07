const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require(path.resolve(__dirname, '..', 'controllers', 'adminController'));

router.get('/admin/agregar1', adminController.productAdd1);
router.get('/admin/agregar2', adminController.productAdd2);
router.get('/admin/agregar3', adminController.productAdd3);

module.exports = router;