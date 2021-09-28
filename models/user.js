const classMethod = require('./class-methods/user')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registeredAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lastLogedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    blocked: {
      type: DataTypes.BOOLEAN
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'user',
    createdAt: 'registeredAt',
    updatedAt: 'lastLogedAt',
    timestamps: true
  })

  return classMethod(User, sequelize)
}
