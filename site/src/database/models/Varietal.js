module.exports = (sequelize, DataTypes) => {
    let alias = 'Varietal';

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

    const Varietal = sequelize.define(alias, cols, config);

    Varietal.associate = function(models){
        Varietal.hasMany(
            models.Product,
            {
                as: 'product',
                foreingKey: 'varietalId'
            }
        )
    };

    return Varietal;
}