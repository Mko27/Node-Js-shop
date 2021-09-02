const Sequelize = require('sequelize')

const { PG } = require('../config')

// const Region = require('./region')

// const City = require('./city')

const fs = require('fs')

const path = require('path')

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
})

/**
 * Import models working with Main DB.
 */
// const MODELS_MAIN = [
//   './region',
//   './city'
// ];

// const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)

// MODELS_MAIN.forEach((modelPath) => {
//   const model = sequelizeMain.options.classMethods.associate(modelPath)
//   db[`${model.name}Model`] = model
// })

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'class-methods')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelizeMain, Sequelize.DataTypes)
    // console.log('model: ', model)
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
  // console.log(db[modelName])
})

db.Region.hasMany(db.City)
db.City.belongsTo(db.Region)

db.User.hasMany(db.Product)
db.Product.belongsTo(db.User)

db.City.hasMany(db.Product)
db.Product.belongsTo(db.City)

db.Product.hasMany(db.ProductCategory)
db.ProductCategory.belongsTo(db.Product)

db.Category.hasMany(db.ProductCategory)
db.ProductCategory.belongsTo(db.Category)

// db.City.hasOne(db.Region, {
//   foreignKey: {
//     regionId: 'regionId'
//   }
// })

db.sequelizeMain = sequelizeMain
// console.log('db: ', db)
module.exports = db
