const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')))
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminProduct'), {productos})
    },
    productAdd1: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd1'))
    },
    productAdd2: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd2'))
    },
    productAdd3: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd3'))
    }
};


