const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require(path.resolve(__dirname, '..', 'controllers', 'adminController'));

router.get('/admin/agregar', adminController.add);

module.exports = router;