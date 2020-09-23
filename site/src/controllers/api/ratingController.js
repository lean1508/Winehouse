const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const Rating = db.Rating;
const Sequelize = db.Sequelize;


module.exports = {
    getByUser: async (req,res) => {

        let ratings = await Rating.findAll({
            where: {
                userId: req.params.id
            },
            include: [
                {association: 'product'}
            ]
        });

        let ratingOutput = {
            meta: {
                status: 200,
                entries: ratings.length,
                url: req.originalUrl
            },
            data: ratings
        };

        res.json(ratingOutput);
    },

    getByProduct: async (req,res) => {

        let ratings = await Rating.findAll({
            where: {
                productId: req.params.id
            },
            include: [
                {
                association: 'user',
                attributes: {exclude: ['password']}
                }
            ]
        });

        let ratingAverage = await Rating.findAll({
            where: {
                productId: req.params.id
            },
            attributes: [[Sequelize.fn('avg', Sequelize.col('rating')),'rating']]
        });

        Promise.all([ratings, ratingAverage]).then(([ratings, ratingAverage]) => {

            let ratingOutput = {
                meta: {
                    status: 200,
                    entries: ratings.length,
                    average: Number(parseFloat(ratingAverage[0].rating).toFixed(1)),
                    url: req.originalUrl
                },
                data: ratings
            };

            res.json(ratingOutput);
        }).catch(e => res.send(e));
    }
};