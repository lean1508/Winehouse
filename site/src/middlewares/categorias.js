const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Category = db.Category;


module.exports = (req,res,next) =>{
    Category.findAll({
        order:[['id', 'ASC']]
    })
    .then(categorias => {
        res.locals.categorias = categorias;
        next();
    //console.log(res.locals.categorias);
    //console.log(res.locals.categorias);
    })
    .catch(error => { res.send(error)});
    
};