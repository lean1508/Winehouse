const path = require('path');

module.exports = {
    add: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd.html'))
    }
}