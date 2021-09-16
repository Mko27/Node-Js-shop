const models = require('../models')
const { ProductCategory } = models

module.exports = {
  checkProductCategoryExist: (CategoryId, ProductId, next) => {
    return ProductCategory.findProductCategory(CategoryId, ProductId)
      .then((element) => {
        if (element) {
          return true
        }
        return false
      })
      .catch(next)
  }
}
