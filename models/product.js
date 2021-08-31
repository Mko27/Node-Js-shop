const classMethod = require('./class-methods/product')

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.FLOAT
    },
    address: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    publishedAt: {
      type: DataTypes.DATE
    },
    soldedAt: {
      type: DataTypes.DATE
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'product',
    timestamps: true
  })

  return classMethod(Product, sequelize)
}
