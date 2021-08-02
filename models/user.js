const classMethod = require('./class-methods/user')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
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
              type: DataTypes.STRING
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
              type: DataTypes.STRING.BINARY
          },
          hash: {
              type: DataTypes.STRING.BINARY
          }
    }, 
    {
        tableName: 'user',
        timesStamp: true
    });

    return classMethod(User, sequelize)
}