const path = require('path');

module.exports = {
    index: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'carrito', 'productCart.html'))
    }
}