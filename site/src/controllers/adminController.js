const path = require('path');

module.exports = {
    index: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'))
    },
    
    productAdd1: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd1'))
    },
    productAdd2: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd2'))
    },
    productAdd3: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd3'))
    }
};


