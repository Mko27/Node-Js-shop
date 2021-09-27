const classMethod = require('./class-methods/ProductTag')

module.exports = (sequelize, DataTypes) => {
  const ProductTag = sequelize.define('ProductTag', {
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
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'productTag',
    timestamps: false
  })

  return classMethod(ProductTag, sequelize)
}
