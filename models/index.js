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

db.Region.hasMany(db.City, { foreignKey: 'regionId' })
db.City.belongsTo(db.Region, { foreignKey: 'regionId', as: 'region' })

db.User.hasMany(db.Product, { foreignKey: 'userId' })
db.Product.belongsTo(db.User, { foreignKey: 'userId', as: 'user' })

db.City.hasMany(db.Product, { foreignKey: 'cityId' })
db.Product.belongsTo(db.City, { foreignKey: 'cityId', as: 'city' })

db.Product.hasMany(db.ProductCategory, { foreignKey: 'productId' })
db.ProductCategory.belongsTo(db.Product, { foreignKey: 'productId', as: 'product' })

db.Category.hasMany(db.ProductCategory, { foreignKey: 'categoryId' })
db.ProductCategory.belongsTo(db.Category, { foreignKey: 'categoryId', as: 'category' })

db.User.hasMany(db.Image, { foreignKey: 'userId' })
db.Image.belongsTo(db.User, { foreignKey: 'userId', as: 'user' })

db.Product.hasMany(db.Image, { foreignKey: 'productId' })
db.Image.belongsTo(db.Product, { foreignKey: 'productId', as: 'product' })

db.Product.hasMany(db.ProductTag, { foreignKey: 'productId' })
db.ProductTag.belongsTo(db.Product, { foreignKey: 'productId', as: 'product' })

db.Tag.hasMany(db.ProductTag, { foreignKey: 'tagId' })
db.ProductTag.belongsTo(db.Tag, { foreignKey: 'tagId', as: 'tag' })

db.sequelizeMain = sequelizeMain

module.exports = db
