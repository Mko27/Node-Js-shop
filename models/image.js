const classMethod = require('./class-methods/image')

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    width: {
      type: DataTypes.FLOAT
    },
    height: {
      type: DataTypes.FLOAT
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    originalWidth: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    originalHeight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    thumb: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'image',
    timestamps: true
  })

  return classMethod(Image, sequelize)
}
