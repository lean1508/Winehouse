const path = require('path');

module.exports = {
    index: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views','web','index'))
    },
    quienes: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views','web','quienesSomos'))
    }
};