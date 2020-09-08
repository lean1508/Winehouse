const path = require('path');
//const fs = require('fs');
const db = require('../database/models');
const User = db.User;

const {
    check,
    validationResult,
    body
  } = require('express-validator');

  //let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
  

module.exports = [
            check('name').isLength({
                min: 1
            }).withMessage('El campo Nombre no puede estar vacio.'),

            check('lastName').isLength({
                min: 1
            }).withMessage('El campo Apellido no puede estar vacio.'),

            check('alias').isLength({
                min: 1
            }).withMessage('El campo Alias no puede estar vacio.'),

            body('alias').custom(async (value) => {
                /*for (let user of users) {
                    if (user.alias == value) {
                        return false;
                    }
                }

                return true;*/
                let user = await User.findOne({
                    where: {alias: value}
                })
                //console.log(user);
                if (user !== null){
                    return Promise.reject('Ese alias ya está siendo usado.')
                } 
                return true
                
            }),
            check('email').isEmail().withMessage('Ingrese una direccion de correo válida.'),
            body('email').custom( async (value) => {
                let user = await User.findOne({
                    where: {email: value}
                })
                //console.log(user);
                if (user !== null){
                    return Promise.reject('Ya existe una cuenta para este correo electrónico')
                } 
                return true
            }),
            check('password').isLength({
                min: 8
            }).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
            body('confirm_password').custom((value, {
                req
            }) => {
                if (req.body.password == value) {
                    return true
                } else {
                    return false
                }
            }).withMessage('La contraseña debe ser la misma en ambos campos.'),
            body('avatar').custom((value, {req}) => {
                if (req.file != undefined) {
                    return true
                }
                return false;
            }).withMessage('Debe elegir un Avatar.'),
            body('avatar').custom((value, {req}) =>{
                //console.log(req.file.filename);
                let ext = path.extname(req.file.filename).toLowerCase()
                switch (ext) {
                    case '.jpg':
                        return true;
                    case '.jpeg':
                        return true;
                    case  '.png':
                        return true;
                    default:
                        return false;
                }
            }).withMessage('El archivo debe ser formato: .JPG o .JPEG o . PNG')
            
        ]