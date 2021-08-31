const classMethod = require('./class-methods/region')

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'region',
    timestamps: false
  })

  return classMethod(Region, sequelize)
}
