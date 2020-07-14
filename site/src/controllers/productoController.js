const path = require('path');

module.exports = {
    show: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'productDetail'))
    },
    verTintos: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosTintos'))
    },
    verBlancos: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosBlancos'))
    },
    verRosados: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosRosados'))
    },
    verEspumantes: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'vinosEspumantes'))
    },
    verEspirituosos: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'espirituosos'))
    },
    verParaBrindar: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'paraBrindar'))
    },
    verMasVendidos: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'masVendidos'))
    },
    verRecomendados: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'recomendados'))
    },
    verPromos: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'producto', 'promos'))
    }
}
