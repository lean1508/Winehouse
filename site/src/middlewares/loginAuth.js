//const path = require('path');
//const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const User = db.User;

const {
    check,
    validationResult,
    body
  } = require('express-validator');
const { nextTick } = require('process');

  //let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));

module.exports = [
    check('email').isEmail().withMessage('Ingrese un mail válido.'),
    body('email').custom( async (value) =>{
      /*for (let user of users) {
        if(user.email == value){
          return true
        }
      }
      return false*/
      let user = await User.findOne({
        where: {email: value}
    })
    if (user === null){
        return Promise.reject('El usuario no se encuentra registrado.')
    } 
    return true
    }),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
    body('password').custom( async (value, {req}) =>{
      /*for (let user of users) {
        if (user.email == req.body.email && bcrypt.compareSync(value, user.password)){
          return true
        }
      }*/
      let consulta = await User.findOne({
        where:{email: req.body.email}
    });
     let user = JSON.parse(JSON.stringify(consulta,null,2));
     //console.log(user);
    if(bcrypt.compareSync(value, user.password)){
      return true
    } else{
      return Promise.reject('La contraseña ingresada es incorrecta')
    }
    })
  ]