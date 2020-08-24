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
    verCategoriaFiltro: (req,res) => {
        req.body.varietal=req.body.varietal.split(',');
        req.body.producer=req.body.producer.split(',');

        if (req.body.selection == undefined){
            req.body.selection=["on",null]; 
        } else{
            req.body.selection=req.body.selection.split(' ');
        };
        
        if (req.body.sale == undefined){
            req.body.sale=["on",null]; 
        } else{
            req.body.sale=req.body.sale.split(' ');
        };

        let productosFiltrados = filter.products(req.body);

        let titulo = Category.findOne({
            where: {id: req.body.category}
        });

        let varietales = filter.varietal(req.body.category);
        let productores = filter.producer(req.body.category);
        let filtro = req.body;
        console.log(filtro.varietal.length);

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
    search: (req,res)=>{
        console.log(req.body.search);
        Product.findAll({
            where:{
                [Op.or]: [{name: {[Op.like]: `%${req.body.search}%`}},{'$producer.name$': {[Op.like]: `%${req.body.search}%`}}]
            },
            include:[
                {association:"producer"}
            ]
        })
        .then(vinos => res.render(path.resolve(__dirname, '..', 'views', 'producto', 'resultados'), {vinos}))
        .catch((error)=> res.send(error))
    }
}
