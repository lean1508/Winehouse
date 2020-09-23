module.exports = (sequelize, DataTypes) => {
    let alias = 'Rating';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        review: {
            type: DataTypes.STRING
        }
    }

    const Rating = sequelize.define(alias, cols);

    Rating.associate = function(models){
        Rating.belongsTo(
            models.Product,
            {
                as: 'product',
                foreignKey: 'productId'
            }
        )
        Rating.belongsTo(
            models.User,
            {
                as: 'user',
                foreignKey: 'userId'
            }
        )
    }

    return Rating;
}