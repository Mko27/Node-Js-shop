const models = require('../models')
const { ProductCategory } = models
const { ErrorsUtil } = require('../utils/index')
const { ProductCategoryError } = ErrorsUtil

module.exports = {
  checkProductCategoryExist: (req, res, next) => {
    const productId = parseInt(req.params.id, 10)
    const categoryId = parseInt(req.body.categoryId, 10)

    return ProductCategory.findProductCategory(categoryId, productId)
      .then((element) => {
        if (element) {
          return next(new ProductCategoryError('This category is appended'))
        }
        return next()
      })
      .catch(next)
  }
}
