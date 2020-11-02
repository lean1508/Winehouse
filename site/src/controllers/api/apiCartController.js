const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const Product = db.Product;
const Sequelize = db.Sequelize;

module.exports = {

    itemStock: (req,res)=>{

    },

    contentStock: async (req,res)=>{

        let checkContent = async function() {
            
            let result = [];
        
            for(var item of req.session.cart) {
            
                let producto = await Product.findByPk(item.productId);

                if (producto.stock < 1) {
                    let message = `Por el momento no contamos con stock de ${producto.name}`;
                    let data = {
                        productId: item.productId,
                        msg: message
                    };
                    console.log(data)
                    result.push(data); 
                } else if (producto.stock > 0 && producto.stock < item.quantity) {
                    let message = `La cantidad máxima disponible para compra de ${producto.name} es de ${producto.stock} unidades`;
                    let data = {
                        productId: item.productId,
                        msg: message
                    };
                    result.push(data);
                };
            };
            return result;
        }
       
        let resultado = await checkContent();
        
        let checkResult = false;

        if (resultado.length == 0) {
            checkResult = true;
        }

        let checkOutput = {
            meta: {
                status: 200,
                entries: resultado.length,
                result: checkResult,
                url: req.originalUrl
            },
            data: resultado
        };

        res.json(checkOutput);
        
    }

};