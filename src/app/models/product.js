const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database')

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Product;
