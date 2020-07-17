const path = require('path');
const fs = require('fs');

module.exports = {
    show: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        let producto = productos.find(p=> req.params.id == p.id);
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'productDetail'), {producto, productos})
    },
    verTintos: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.tipo == "vino tinto");
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosTintos'), {vinos})
    },
    verBlancos: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.tipo == "vino blanco");
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosBlancos'), {vinos})
    },
    verRosados: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.tipo == "vino rosado");
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosRosados'), {vinos})
    },
    verEspumantes: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.tipo == "vino espumante");
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosEspumantes'), {vinos})
    },
    verEspirituosos: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.tipo == "espirituoso");
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'espirituosos'), {vinos})
    },
    verParaBrindar: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.tipo == "para brindar");
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'paraBrindar'), {vinos})
    },
    verMasVendidos: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'masVendidos'))
    },
    verRecomendados: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.recomendados == 1);
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'recomendados'), {vinos})
    },
    verOfertas: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        const vinos = productos.filter(producto=> producto.ofertas == 1);
        res.render(path.resolve(__dirname, '..', 'views', 'producto', 'ofertas'), {vinos})
    }
}
