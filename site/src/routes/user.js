const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','images','usuarios'));
    },
    filename: function (req, file, cb) {
      cb(null, 'usuario-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })

const userController = require(path.resolve(__dirname, '..', 'controllers', 'userController'));

router.get('/register', userController.index);
router.post('/register', upload.single('avatar'), userController.register);

module.exports = router;