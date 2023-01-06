'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    
    static associate(models) {
      Item.belongsTo(models.User, { foreignKey: 'userId'})
      Item.belongsTo(models.Cart, {foreignKey:  'cartId' })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    rarity: DataTypes.ENUM('Coomon', 'Uncommon', 'Rare', 'Very Rare', 'Legendary', 'Artifact', 'Unkown', 'Varies'),
    type: DataTypes.ENUM('Weapon', 'Armor', 'Woundrous Item'),
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    attunement: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        models: 'users',
        key: 'id'
      }
    },
    cartId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        models: 'carts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items'
  });
  return Item;
};