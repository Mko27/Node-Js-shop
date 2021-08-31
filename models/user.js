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
      type: DataTypes.STRING
    },
    surname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    phone: {
      type: DataTypes.STRING
    },
    registeredAt: {
      type: DataTypes.DATE
    },
    lastLogedAt: {
      type: DataTypes.DATE
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    blocked: {
      type: DataTypes.BOOLEAN
    },
    salt: {
      type: DataTypes.STRING
    },
    hash: {
      type: DataTypes.STRING
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
