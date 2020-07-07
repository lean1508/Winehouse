const path = require('path');

module.exports = {
    productAdd1: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd1.html'))
    },
    productAdd2: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd2.html'))
    },
    productAdd3: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd3.html'))
    }
};