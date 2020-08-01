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

const registerAuth = require(path.resolve(__dirname,'..','middlewares', 'registerAuth'));

const loginAuth = require(path.resolve(__dirname,'..','middlewares', 'loginAuth'));

router.get('/register', userController.index);

router.post('/register', upload.single('avatar'), registerAuth, userController.register);

router.post('/login', loginAuth, userController.login)


module.exports = router;