const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const {
  check,
  validationResult,
  body
} = require('express-validator');



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

let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));

router.get('/register', userController.index);
router.post('/register', upload.single('avatar'), [
    check('name').isLength({min:1}).withMessage('El campo Nombre no puede estar vacio.'),

    check('lastName').isLength({min:1}).withMessage('El campo Apellido no puede estar vacio.'),

    check('alias').isLength({min:1}).withMessage('El campo Alias no puede estar vacio.'),

    body('alias').custom((value) =>{
      for (let user of users) {
        if(user.alias == value){
          return false;
        }
      }
      
      return true;
    }).withMessage('Ese alias ya está siendo usado.'),
    check('email').isEmail().withMessage('Ingrese una direccion de correo válida.'),
    body('email').custom((value)=>{
      for (let user of users) {
        if(user.email == value){
          return false;
        }
      }
      
      return true;
    }).withMessage('El email ya se encuentra registrado'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
    body('confirm_password').custom((value , {req}) =>{
      if(req.body.password == value){
        return true
      } else{
        return false
      }
    }).withMessage('La contraseña debe ser la misma en ambos campos.'),
    body('avatar').custom((value, {req}) =>{
      if(req.file != undefined){
        return true
      } 
      return false;
    }).withMessage('Debe elegir un Avatar.')

], userController.register);

router.post('/login',[
  check('email').isEmail().withMessage('Ingrese un mail válido.'),
  body('email').custom((value) =>{
    for (let user of users) {
      if(user.email == value){
        return true
      }
    }
    return false
  }).withMessage('El usuario no se encuentra registrado.'),
  check('password').isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
  body('password').custom((value, {req}) =>{
    for (let user of users) {
      if (user.email == req.body.email && bcrypt.compareSync(value, user.password)){
        return true
      }
    }
  }).withMessage('La contraseña no coincide.')

], userController.login)


module.exports = router;