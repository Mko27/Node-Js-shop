const classMethod = require('./class-methods/tag')

module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("Tag", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            },
          slug: {
            type: DataTypes.STRING
          },
          title: {
            type: DataTypes.STRING
          }
    }, 
    {
        tableName: 'tag',
        timestamps: false
    });

    return classMethod(Tag, sequelize)
}