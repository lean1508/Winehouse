const path = require('path');

module.exports = {
    index: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views','web','index.ejs'))
    },
    quienes: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views','web','quienesSomos.html'))
    }
};