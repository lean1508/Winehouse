const path = require('path');
const {Product, cartProduct, User} = require('../database/models');

module.exports = {
    index: async(req,res)=>{
        //res.send(req.session.cart)
         await Product.findAll()
        .then((productos)=>{
            let compras = [];
            req.session.cart.forEach(compra => {
                compras.push(productos.find((producto)=> producto.id == compra.productId))});
                res.send(compras)
                //res.render(path.resolve(__dirname, '..', 'views', 'carrito', 'productCart'))
        })        
        .catch(error => res.send(error));          
    },
    add: (req,res)=>{
        Product.findByPk(req.body.productId)
        .then((producto)=> {
            //console.log(producto.price);
            //return res.send(producto)
            let cantidad = req.body.cantidad? Number(req.body.cantidad): 1;
            //console.log('afvevervrvefv33333333333'+ cantidad);
            if(req.session.cart){ 
                req.session.cart.push({quantity: cantidad, productId: producto.id});
                //return res.send(req.session.cart)
                res.redirect('/');   
            } else {
                req.session.cart = [];
                req.session.cart.push({quantity: cantidad, productId: producto.id});
                res.redirect('/');
            }
        })
        .catch(error => res.send(error));
    }
}