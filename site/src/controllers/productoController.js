const path = require('path');

module.exports = {
    show: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'productDetail.html'))
    },
    verTintos: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'vinosTintos.html'))
    },
    verBlancos: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'vinosBlancos.html'))
    },
    verRosados: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'vinosRosados.html'))
    },
    verEspumantes: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'vinosEspumantes.html'))
    },
    verEspirituosos: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'espirituosos.html'))
    },
    verParaBrindar: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'paraBrindar.html'))
    },
    verMasVendidos: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'masVendidos.html'))
    },
    verRecomendados: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'recomendados.html'))
    },
    verPromos: (req,res)=>{res.sendFile(path.resolve(__dirname, '..', 'views', 'producto', 'promos.html'))
    }
}
