const path = require('path');

module.exports = {
    index: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '..', 'views', 'usuario', 'register.html'))
    },
    carrito: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '..', 'views', 'usuario', 'productCart.html'))
    },
    add: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '..', 'views', 'usuario', 'productAdd.html'))
    }
}