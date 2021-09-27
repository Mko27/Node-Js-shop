const classMethod = require('./class-methods/productCategory')

module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      autoIncrement: true,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'productCategory',
    timestamps: false
  })

  return classMethod(ProductCategory, sequelize)
}
