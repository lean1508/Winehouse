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

        
        let total = 0;
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
            total += item.subtotal;
        });

        res.render(path.resolve(__dirname, '..', 'views', 'carrito', 'productCart'), {cartProducts, total})
    },
    add: (req,res)=>{
        let cantidad = req.body.cantidad? Number(req.body.cantidad): 1;
        let existe = false;
        if(req.session.cart){
            for (var item of req.session.cart) {
                if (item.productId == req.body.productId) {
                    item.quantity += cantidad
                    existe = true;
                }
            }
            if (existe == false){ 
            req.session.cart.push({quantity: cantidad, productId: req.body.productId});
            cart = req.cookies.cart;
            res.cookie('cart',null,{maxAge: -1});
            cart.push({quantity: cantidad, productId: req.body.productId});
            res.cookie('cart', cart , {maxAge: 1000*60*60*1200} );
            }  
        } else {
            req.session.cart = [];
            req.session.cart.push({quantity: cantidad, productId: req.body.productId});
            res.cookie('cart', [{quantity: cantidad, productId: req.body.productId}] , {maxAge: 1000*60*60*1200} );
        }
        
        res.redirect('back');

        //res.send(req.session.cart);
    },
    delete: (req,res)=>{
        req.session.cart = req.session.cart.filter(item => item.productId != req.body.productId);
        carroEliminar = req.cookies.cart;
        res.cookie('cart',null,{maxAge: -1});
        let cart = carroEliminar.filter(item => item.productId != req.body.productId);
        res.cookie('cart', cart , {maxAge: 1000*60*60*1200} );

        //return res.send(req.session.cart);
        res.redirect('/cart')
    }
}