const classMethod = require('./class-methods/city')

module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
        },
      name: {
        type: DataTypes.STRING
      }
    },
    {
        tableName: 'region',
        timesStamp: false
    });
  
    return  classMethod(Region, sequelize)
  }