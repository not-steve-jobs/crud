const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database')
import Product from '../models/product';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        unique: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.hasMany(Product,{
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Product.belongsTo(User,{
    foreignKey: {
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = User;
