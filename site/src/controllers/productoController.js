const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Product = db.Product;
const Category = db.Category;
const{ Op } = require('sequelize');
const filter = require('./filter');

module.exports = {
    show: (req,res)=>{
        /*let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorias.json')));
        let producto = productos.find(p=> req.params.id == p.id);
        let categoria = categorias.find(cat => producto.categoria_id == cat.id);*/
        let producto = Product.findOne({
            where: {id: req.params.id},
            include: [
                {association:"category"},
                {association:"producer"},
                {association:"varietal"}
            ]
        });
        let productos = Product.findAll({
            include: [
                {association:"producer"}
            ],
            limit:4
        });
        //console.log(producto);
        Promise.all([producto,productos])
        .then(([producto,productos]) => res.render(path.resolve(__dirname, '..', 'views', 'producto', 'productDetail'), {producto, productos}))
        .catch(error => res.send(error))
    },
    verCategoria: (req,res) =>{
        /*let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorias.json')));
        let productosCategoria = productos.filter(producto => producto.categoria_id == req.params.id);
        let categoria = categorias.filter(cat => cat.id == req.params.id);
        let titulo = categoria[0].nombre;*/
        let titulo = Category.findOne({
            where: {id: req.params.id}
        });
        let vinos = Product.findAll({
            where: {categoryId: req.params.id},
            include:[
                {association:"category"},
                {association:"producer"}
            ]
        });
        let varietales = filter.varietal(req.params.id);
        let productores = filter.producer(req.params.id);
        Promise.all([titulo, vinos, varietales, productores])
        .then(([titulo, vinos, varietales, productores]) => {res.render(path.resolve(__dirname, '..', 'views', 'producto', 'categorias'), {titulo, vinos, varietales, productores})})
        .catch(error => res.send(error))
    },
    getFiltro: (req,res)=>{
        res.redirect('/productos/filtrar?name='+req.body.name+'&category='+req.body.category+'&varietal='+req.body.varietal+'&producer='+req.body.producer+'&min='+req.body.min+'&max='+req.body.max+'&order='+req.body.order+'&selection='+req.body.selection+'&sale='+req.body.sale);
    },
    verCategoriaFiltro: (req,res) => {
        
        req.query.varietal=req.query.varietal.split(',');
        req.query.producer=req.query.producer.split(',');
        req.query.order=req.query.order.split(',');

        if (req.query.selection != "on"){
            req.query.selection=["on",null]; 
        } else{
            req.query.selection=req.query.selection.split(' ');
        };
        
        if (req.query.sale != "on"){
            req.query.sale=["on",null]; 
        } else{
            req.query.sale=req.query.sale.split(' ');
        };
        
        let productosFiltrados = filter.products(req.query);

        let titulo = Category.findOne({
            where: {id: req.query.category}
        });

        let varietales = filter.varietal(req.query.category);
        let productores = filter.producer(req.query.category);
        let filtro = req.query;
        console.log(filtro);

        Promise.all([productosFiltrados, titulo, varietales, productores, filtro])
        .then(([productosFiltrados, titulo, varietales, productores, filtro]) => {res.render(path.resolve(__dirname, '..', 'views', 'producto', 'categoriasFiltradas'), {vinos: productosFiltrados, titulo, varietales, productores, filtro})})
        .catch(error => res.send(error))
    },
    verMasVendidos: (req,res)=>{
        Product.findAll({
            where: {
                [Op.or]: [
                {sale: "on"},
                {selection:"on"}
                ]
            },
            include:[
                {association:"producer"}
            ]
        })
        .then((vinos)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'masVendidos'), {vinos})})
        .catch((error)=> res.send(error))
    },
    verRecomendados: (req,res)=>{
        /*let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.recomendados == 'on');*/
        Product.findAll({
            where: {selection: "on"},
            include:[
                {association:"producer"}
            ]
        })
        .then((vinos)=> res.render(path.resolve(__dirname, '..', 'views', 'producto', 'recomendados'), {vinos}))
        .catch((error)=> res.send(error))
    },
    verOfertas: (req,res)=>{
        /*let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.ofertas == 'on');*/
        Product.findAll({
            where: {sale: "on"},
            include:[
                {association:"producer"}
            ]
        })
        .then((vinos)=> res.render(path.resolve(__dirname, '..', 'views', 'producto', 'ofertas'), {vinos}))
        .catch((error)=> res.send(error))
    },
    getSearch: (req,res)=>{
        res.redirect('/busqueda?search='+req.body.search);
    },
    search: (req,res)=>{
        Product.findAll({
            where:{
                [Op.or]: [{name: {[Op.like]: `%${req.query.search}%`}},{'$producer.name$': {[Op.like]: `%${req.query.search}%`}}]
            },
            include:[
                {association:"producer"}
            ]
        })
        .then(vinos => res.render(path.resolve(__dirname, '..', 'views', 'producto', 'resultados'), {vinos}))
        .catch((error)=> res.send(error))
    }
}
