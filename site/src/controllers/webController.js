const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Category = require('../database/models/Category');

module.exports = {
    index: (req,res)=>{
        /*
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorias.json')));
        let recomendados = productos.filter(p => p.recomendados == "on");
        let ofertas = productos.filter(p => p.ofertas == "on");
        res.render(path.resolve(__dirname, '..', 'views','web','index'), {productos, recomendados, ofertas});
        */
        let productos = db.Product.findAll({
            include: [
                {association:"producer"},
                {association:"varietal"}
            ],
            limit: 4
        });
        let recomendados = db.Product.findAll({
            include: [
                {association:"producer"},
                {association:"varietal"}
            ],
            where: {
                selection: "on"
            },
            limit: 4
        });
        let ofertas = db.Product.findAll({
            include: [
                {association:"producer"},
                {association:"varietal"}
            ],
            where: {
                sale: "on"
            },
            limit: 4
        });
        
        Promise.all([productos, recomendados, ofertas])
       .then( ([productos, recomendados, ofertas])=> res.render(path.resolve(__dirname, '..', 'views','web','index'), {productos, recomendados, ofertas}))
       .catch(error => res.send(error));
    },
    quienes: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views','web','quienesSomos'));
    }
};