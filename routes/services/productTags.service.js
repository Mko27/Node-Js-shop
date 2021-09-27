const models = require('../../models')
const { ProductTag } = models

const appendProductTag = (req, res, next) => {
  const productId = parseInt(req.params.id, 10)
  const tagId = parseInt(req.body.tagId, 10)
  const data = { productId, tagId }
  return ProductTag.createProductTag(data)
    .then(() => res.json({ msg: 'successfully appended' }))
    .catch(next)
}

const deleteProductTag = (req, res, next) => {
  const productId = parseInt(req.params.id, 10)
  const tagId = parseInt(req.body.tagId, 10)

  return ProductTag.deleteProductTag(productId, tagId)
    .then(() => res.json({ msg: 'successfully deleted' }))
    .catch(next)
}

module.exports = {
  appendProductTag,
  deleteProductTag
}
