const models = require('../models')
const { ProductTag } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistNameError } = ErrorsUtil

module.exports = {
  checkTagIsAppendedProduct: (req, res, next) => {
    const productId = parseInt(req.params.id, 10)
    const tagId = parseInt(req.body.tagId, 10)
    return ProductTag.findByProductIdAndTagId(productId, tagId)
      .then((productTag) => {
        if (productTag) {
          return next(new ExistNameError('This tag is appended'))
        }

        return next()
      })
      .catch(next)
  }
}
