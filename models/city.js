const classMethod = require('./class-methods/city')

module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define("City", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        },
      name: {
        type: DataTypes.STRING
      },
      regionID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
        tableName: 'city',
        timesStamp: false
    });
  
    return  classMethod(City, sequelize)
  }
