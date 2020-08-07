const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const {
    check,
    validationResult,
    body
  } = require('express-validator');


let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));

const avatarCheck = [
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
];

const aliasCheck = [
    check('alias').isLength({
        min: 1
    }).withMessage('El campo Alias no puede estar vacio.'),
    body('alias').custom((value) => {
        for (let user of users) {
            if (user.alias == value) {
                return false;
            }
        }
        return true;
    }).withMessage('Ese alias ya está siendo usado.')
];

const passwordCheck = [
    body('password').custom((value, {req}) =>{
        for (let user of users) {
          if (user.id == req.session.usuario.id && bcrypt.compareSync(value, user.password)){
            return true
          }
        }
      }).withMessage('La contraseña no coincide.'),
      check('newPassword').isLength({
        min: 8
    }).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
    body('newPasswordConfirm').custom((value, {
        req
    }) => {
        if (req.body.newPassword == value) {
            return true
        } else {
            return false
        }
    }).withMessage('La contraseña debe ser la misma en ambos campos.')
];

module.exports = {avatarCheck, aliasCheck, passwordCheck};