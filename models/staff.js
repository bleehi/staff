const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class staff extends Model {}

staff.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'staff', // We need to choose the model name
    tableName:"staff",
    timestamps:true


  },
);

module.exports = staff