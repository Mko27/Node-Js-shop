const classMethod = require('./class-methods/image')

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
          id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true
          },
          order: {
            type: DataTypes.INTEGER
          },
          data: {
            type: DataTypes.STRING
          },
          createdAt: {
              type: DataTypes.DATE
          },
          updatedAt: {
              type: DataTypes.DATE
          },
          width: {
              type: DataTypes.FLOAT
          },
          height: {
            type: DataTypes.FLOAT
          },
          size: {
            type: DataTypes.FLOAT
          },
          originalWidth: {
            type: DataTypes.FLOAT
          },
          originalHeight: {
            type: DataTypes.FLOAT
          },
          thumb: {
              type: DataTypes.BOOLEAN
          },
          mimeType: {
              type: DataTypes.STRING
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
        timesStamp: true
    });

    return classMethod(Image, sequelize)
}