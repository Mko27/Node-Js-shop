const { Op } = require('sequelize')

module.exports = (ProductCategory, sequelize) => {
  ProductCategory.createProductCategory = (data) => {
    return ProductCategory.create(data)
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
