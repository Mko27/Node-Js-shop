const classMethod = require('./class-methods/tag')

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'tag',
    timestamps: false
  })

  return classMethod(Tag, sequelize)
}
