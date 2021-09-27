const { Op } = require('sequelize')

module.exports = (ProductTag, sequelize) => {
  ProductTag.findAll = () => {
    const query = {
      raw: true
    }

    return ProductTag.findAll(query)
  }

  ProductTag.createProductTag = (data) => {
    return ProductTag.create(data)
  }

  ProductTag.deleteProductTag = (productId, tagId) => {
    const query = {
      where: {
        [Op.and]: [
          { tagId },
          { productId }
        ]
      }
    }

    return ProductTag.destroy(query)
  }

  return ProductTag
}
