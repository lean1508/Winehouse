const path = require('path');

module.exports = {
    detail: function(req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'productDetail.html'));
    }
}