const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const {
    check,
    validationResult,
    body
  } = require('express-validator');
const { nextTick } = require('process');

  let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));

module.exports = [
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
  
  ]