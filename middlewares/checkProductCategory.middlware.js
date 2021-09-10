const models = require('../models')
const { ProductCategory } = models

module.exports = {
  checkProductCategoryParent: (req, res, next) => {
    console.log('checcck ', req.body)
    const { parentId, ProductId } = req.body
    const data = {
      parentId,
      ProductId
    }

    return ProductCategory.findProductCategory(data)
      .then((element) => {
        console.log(element)
        if (element) {
          return 0
        }
        return next()
      })
      .catch(next)
  }
}
