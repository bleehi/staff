const { Sequelize } = require('sequelize');





const sequelize = new Sequelize('employyee', 'root', 'root', {
  host: 'localhost',
  dialect:  'mysql' 
});


module.exports = sequelize

