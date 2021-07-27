const classMethod = require('./class-methods/category')

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
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
          status: {
              type: DataTypes.INTEGER
          },
          parentId: {
              type: DataTypes.INTEGER
          },
          slug: {
              type: DataTypes.STRING
          }
    }, 
    {
        tableName: 'category',
        timesStamp: false
    });

    return classMethod(Category, sequelize)
}