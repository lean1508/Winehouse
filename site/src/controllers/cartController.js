const path = require('path');
const {Product, cartProduct, User} = require('../database/models');

module.exports = {
    index: async(req,res)=>{
        let ids = [];
        if (req.session.cart) {
            req.session.cart.forEach(item => ids.push(item.productId))
        };
        let productos = await Product.findAll({
            where: {id: ids},
            include: [{association: 'producer'}]
        });

        let cartProducts =[];

        

        productos.forEach(producto=>{
            let item = {};
            item.id = producto.id;
            item.nombre = producto.name;
            item.productor = producto.producer.name;
            item.imagen = producto.imageSm;
            item.precio = producto.price;
            item.cantidad = req.session.cart.find(e => e.productId == producto.id).quantity;
            item.subtotal = item.precio*item.cantidad;
            cartProducts.push(item);
        });

        res.render(path.resolve(__dirname, '..', 'views', 'carrito', 'productCart'), {cartProducts})
    },
    add: (req,res)=>{
        let cantidad = req.body.cantidad? Number(req.body.cantidad): 1;

        if(req.session.cart){ 
            req.session.cart.push({quantity: cantidad, productId: req.body.productId});  
        } else {
            req.session.cart = [];
            req.session.cart.push({quantity: cantidad, productId: req.body.productId});
        }

        //res.redirect('back');

        res.send(req.session.cart);
    }
}