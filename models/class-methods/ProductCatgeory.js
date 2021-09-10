const { Op } = require('sequelize')

module.exports = (ProductCategory, sequelize) => {
  ProductCategory.createProductCategory = (data) => {
    return ProductCategory.create(data)
  }

  ProductCategory.deleteProductCategory = () => {

  }

  ProductCategory.findProductCategory = (data) => {
    const query = {
      where: {
        [Op.and]: [
          { CategoryId: data.parentId,
            ProductId: data.ProductId
          }
        ]
      },
      raw: true
    }

    return ProductCategory.findOne(query)
  }
  return ProductCategory
}
