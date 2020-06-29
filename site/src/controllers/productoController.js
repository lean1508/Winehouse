const path = require('path');

module.exports = {
    show: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'productDetail.html'))
    }
}