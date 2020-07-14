const path = require('path');

module.exports = {
    productAdd1: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd1'))
    },
    productAdd2: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd2'))
    },
    productAdd3: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd3'))
    }
};