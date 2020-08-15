module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imageSm: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        imageLg: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        volume: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        producerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        varietalId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        blend: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        vintage: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        region: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        alcohol: {
            type: DataTypes.DECIMAL,
            defaultValue: null
        },
        elaboration: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        aging: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        selection: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        sale: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    }
    

    const Product = sequelize.define(alias, cols);

    Product.associate = function(models){
        Product.belongsTo(
            models.Category,
            {
                as: 'category',
                foreingKey: 'categoryId'
            }
        )
        Product.belongsTo(
            models.Producer,
            {
                as: 'producer',
                foreingKey: 'producerId'
            }
        )
        Product.belongsTo(
            models.Varietal,
            {
                as: 'varietal',
                foreingKey: 'varietalId'
            }
        )
    };

    return Product;
}
