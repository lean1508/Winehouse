const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        let recomendados = productos.filter(p => p.recomendados == "on");
        let ofertas = productos.filter(p => p.ofertas == "on");
        res.render(path.resolve(__dirname, '..', 'views','web','index'), {productos, recomendados, ofertas});
    },
    quienes: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views','web','quienesSomos'));
    }
};