const Sequelize = require('sequelize')

const { PG } = require('../config')

const path = require('path');

const City = require('./city')
const Region = require('./region')
const Product = require('./product')

/**
 * @description Initialize pg and pg models.
 */
const Op = Sequelize.Op

/**
 * @property SubusersModel
 */
const db = {
  Op
}


const sequelizeMain = new Sequelize(PG.CONNECTION_STRING_MAIN, {
  logging: false
});

/**
 * Import models working with Main DB.
 */
const MODELS_MAIN = [];

//const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)


// MODELS_MAIN.forEach((modelPath) => {
//   //const model = sequelizeMain.import(modelPath)
//   const model = require(modelPath.join(__dirname))(sequelize, Sequelize.DataTypes)
//   db[`${model.name}Model`] = model
// })

db.sequelizeMain = sequelizeMain;

///////
/*
Region.associate = function (models) {
  City.hasOne(models.Region, {
    foreignKey: 'regionId'
  })
  Region.hasMany(models.City);
}

City.associaqte = function (models) {
  City.hasMany(models.Product)
  Product.hasOne(models.City, {
    foreignKey: 'cityId'
  })
}
*/
///////

(async () => {
  console.log('start');
  await sequelize.sync({ force: true });
  const jane = Region.build({ name: "Jane" });
  console.log(jane instanceof Region); 
  console.log(jane.name);
  await jane.save();
  console.log('Jane was saved to the database!')
})();

module.exports = db