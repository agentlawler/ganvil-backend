'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    
    static associate(models) {
      Cart.belongsTo(models.User, { foreignKey: 'userId'})
      
    }
  }
  Cart.init({
    total: DataTypes.FLOAT,
    userId: { 
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        models: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts'
  });
  return Cart;
};