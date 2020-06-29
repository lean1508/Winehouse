const express = require('express');
const router = express.Router();
const path = require('path');

const webController = require(path.resolve(__dirname, '..', 'controllers', 'webController'));

router.get('/', webController.index);

module.exports = router;