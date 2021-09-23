const { Op } = require('sequelize')

module.exports = (ProductCategory, sequelize) => {
  ProductCategory.createProductCategory = (data) => {
    console.log('data ', data)
    const query = {
      where: data,
      defaults: data,
      raw: true
    }
    return ProductCategory.findOrCreate(query)
  }

  ProductCategory.findProductCategory = (categoryId, productId) => {
    const query = {
      where: {
        [Op.and]: [
          { categoryId },
          { productId }
        ]
      },
      raw: true
    }

    return ProductCategory.findOne(query)
  }

  ProductCategory.deleteProductCategory = (categoryId, productId) => {
    const query = {
      where: {
        [Op.and]: [
          { categoryId },
          { productId }
        ]
      }
    }

    return ProductCategory.destroy(query)
  }

  return ProductCategory
}
