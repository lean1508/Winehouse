const path = require('path');
const fs = require('fs');

module.exports = (req,res,next) =>{
    let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorias.json')));
    res.locals.categorias = categorias;
    //console.log(res.locals.categorias);
    next();
};