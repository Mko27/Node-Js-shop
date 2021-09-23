const models = require('../models')
const { ProductCategory } = models

module.exports = {
  checkProductCategoryExist: (categoryId, productId, next) => {
    return ProductCategory.findProductCategory(categoryId, productId)
      .then((element) => {
        if (element) {
          return true
        }
        return false
      })
      .catch(next)
  }
}
