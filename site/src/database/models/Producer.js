module.exports = (sequelize, DataTypes) => {
    let alias = 'Producer';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
    let config ={timestamps: false};

    const Producer = sequelize.define(alias, cols, config);

    Producer.associate = function(models){
        Producer.hasMany(
            models.Product,
            {
                as: 'product',
                foreingKey: 'producerId'
            }
        )
    };

    return Producer;
}