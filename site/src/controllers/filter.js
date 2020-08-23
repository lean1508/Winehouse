const db = require('../database/models');
const { Op } = require('sequelize');

let param = {
    name: '',
    category: "1",
    producer: ["1","2","3","4","5"],
    varietal: ["2","3"],
    min: 0,
    max: 999999,
    selection: ['on',null],
    sale: ['on',null],
    order: ['price','ASC']
};

let filter = {
    products: async param =>{

        let products = await db.Product.findAll({
            where:{
                name: {[Op.like]: `%${param.name}%`},
                categoryId: param.category,
                producerId: param.producer,
                varietalId: param.varietal,
                price: {[Op.between]: [param.min,param.max]},
                selection: {[Op.or]: param.selection},
                sale: {[Op.or]: param.sale}
            },

            order:[param.order],

            include:[
                {association:"producer"}
            ]
        });

        return products;
    },

    varietal: async cat =>{
        let varietales = await db.Varietal.findAll({
            include:{
                model: db.Product,
                as: 'product',
                where:{
                    categoryId: cat
                }
            }
        });

        return varietales;
    },
    producer: async cat =>{
        let producers = await db.Producer.findAll({
            include:{
                model: db.Product,
                as: 'product',
                where:{
                    categoryId: cat
                }
            }
        });
       
        return producers;
    }
};

//filter.products(param).then(res=>console.log(res.length));

module.exports = filter;