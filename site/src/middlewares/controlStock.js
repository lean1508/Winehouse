const path = require('path');
const db = require('../database/models');
const Product = db.Product;

module.exports = async (req,res,next) => {
    let producto = await Product.findOne({where: {id: req.body.productId}});
    let quantity = 0;
    if (req.session.cart){
        let item = req.session.cart.filter(p => p.productId == req.body.productId);
        if (item != undefined && item.length > 0) {
            quantity = item[0].quantity;
        };
    };
    let cantidad = 1;
    if (req.body.cantidad != undefined) {
        cantidad = req.body.cantidad;
    };
    let mensaje = "";
    
    if (producto.stock == 0) {
        mensaje = 'No contamos con stock del producto ' + producto.name;
        res.render(path.resolve(__dirname, '..', 'views', 'carrito', 'sinStock'), {mensaje});
    } else if (producto.stock < quantity+cantidad) {
        mensaje = 'No contamos con stock suficiente de ' + producto.name + '. La compra máxima es de ' + producto.stock + ' unidades';
        res.render(path.resolve(__dirname, '..', 'views', 'carrito', 'sinStock'), {mensaje});
    } else {
        next();
    };
};