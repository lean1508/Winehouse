const express = require('express');
const router = express.Router();
const path = require('path');

const adminUserController = require(path.resolve(__dirname, '..', 'controllers', 'adminUserController'));

const access = require('../middlewares/adminUserAccess');

router.get('/admin/usuarios', access, adminUserController.index);


module.exports = router;