const { Op } = require('sequelize')

module.exports = (ProductTag, sequelize) => {

  ProductTag.createProductTag = (data) => {
    return ProductTag.create(data)
  }

  ProductTag.findByProductIdAndTagId = (productId, tagId) => {
    const query = {
      where: {
        [Op.and]: [
          { productId },
          { tagId }
        ]
      },
      raw: true
    }

    return ProductTag.findOne(query)
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
