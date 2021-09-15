const classMethod = require('./class-methods/productCategory')

module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      autoIncrement: true,
      primaryKey: true
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryId: {
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
