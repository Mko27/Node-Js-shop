const { Op } = require('sequelize')

module.exports = (ProductCategory, sequelize) => {
  ProductCategory.createProductCategory = (data) => {
    console.log('data ', data)
    const query = {
      where: data,
      defaults: data
    }
    return ProductCategory.findOrCreate(query)
  }

  ProductCategory.findProductCategory = (CategoryId, ProductId) => {
    const query = {
      where: {
        [Op.and]: [
          { CategoryId },
          { ProductId }
        ]
      },
      raw: true
    }

    return ProductCategory.findOne(query)
  }

  return ProductCategory
}
