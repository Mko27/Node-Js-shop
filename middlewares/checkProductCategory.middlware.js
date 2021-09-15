const models = require('../models')
const { ProductCategory } = models

module.exports = {
  checkProductCategoryParent: (req, res, next) => {
    const { parentId, ProductId } = req.body
    const data = {
      parentId,
      ProductId
    }

    return ProductCategory.findProductCategory(data)
      .then((element) => {
        if (element) {
          return 0
        }
        return next()
      })
      .catch(next)
  }
}
