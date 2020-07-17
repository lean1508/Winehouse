const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        res.render(path.resolve(__dirname, '..', 'views','web','index'), {productos})
    },
    quienes: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views','web','quienesSomos'))
    }
};