module.exports = (ProductTag, sequelize) => {

  ProductTag.findAll = () => {
    const query = {
      raw: true
    }

    return ProductTag.findAll(query)
  }

  ProductTag.createProductTag = (productId, tagId) => {
    return ProductTag.create(productId, tagId)
  }

  ProductTag.createProductTag = (productId, tagId) => {
    return ProductTag.create(productId, tagId)
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

    return ProductCategory.destroy(query)
  }

  return ProductTag
}
