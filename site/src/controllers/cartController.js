const path = require('path');

module.exports = {
    index: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'carrito', 'productCart'))
    }
}