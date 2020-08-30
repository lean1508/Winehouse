const path = require('path');
const db = require('../database/models');
const {check, validationResult, body} = require('express-validator');


module.exports = [
    check('name').isLength({min:5}).withMessage('El campo nombre debe tener un mínimo de 5 caracteres'),
    check('sku').isLength({min:8}).withMessage('Debe asignar un SKU de ocho dígitos como mínimo al producto')
        .isNumeric({no_symbols:false}).withMessage('El campo sku sólo acepta números'),
    check('price').isNumeric({no_symbols:false}).withMessage('El campo precio es obligatorio y sólo acepta números'),
    check('volume').isLength({min:3}).withMessage('El campo volumen acepta requiere un mínimo de 3 dígitos')
        .isNumeric({no_symbols:false}).withMessage('El campo volumen solo acepta números'),
    check('description').isLength({min:20}).withMessage('El campo descripción debe tener un mínimo de 20 caracteres'),
    body('imageSm').custom((value, {req}) => {
        if (req.files.length>0) {
            return true
        }
        return false;
    }).withMessage('Debe adjuntar un archivo de imagen'),
    body('imageSm').custom((value, {req}) =>{
        if (req.files[0]==undefined){return false};
        let ext = path.extname(req.files[0].filename).toLowerCase()
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
    }).withMessage('El archivo debe ser formato: .JPG o .JPEG o . PNG'),
    body('imageLg').custom((value, {req}) => {
        if (req.files.length>0) {
            return true
        }
        return false;
    }).withMessage('Debe adjuntar un archivo de imagen'),
    body('imageLg').custom((value, {req}) =>{
        if (req.files[0]==undefined){return false};
        let ext = path.extname(req.files[1].filename).toLowerCase()
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
    }).withMessage('El archivo debe ser formato: .JPG o .JPEG o . PNG'),
    body('name').custom(async value => {
        let producto = await db.Product.findOne({where: {name: value}});
        if (producto != null){
            return Promise.reject('El nombre del producto ya existe')
        }
    }),
    body('sku').custom(async value => {
        let producto = await db.Product.findOne({where: {sku: value}});
        if (producto != null){
            return Promise.reject('El SKU del producto ya fue cargado')
        }
    })
]