const express = require('express');
const router = express.Router();
const path = require('path');

const userController = require(path.resolve(__dirname, '..', 'controllers', 'userController'));

router.get('/registro', userController.index);

module.exports = router;