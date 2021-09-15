const models = require('../../models')
const { ProductCategory } = models

const createProductCategory = (req, res, next) => {
  const ProductId = parseInt(req.params.id, 10)
  const { CategoryId } = req.body
  const createData = { ProductId, CategoryId }

  return ProductCategory.createProductCategory(createData)
    .then((elem) => {
      return next()
    })
    .catch(next)
}

const createParentCategory = (req, res, next) => {
  const ProductId = parseInt(req.params.id, 10)
  const { parentId } = req.body
  const createData = {
    ProductId,
    CategoryId: parentId
  }

  return ProductCategory.createProductCategory(createData)
    .then(() => res.json({ msg: 'successfully created' }))
    .catch(next)
}

module.exports = {
  createProductCategory,
  createParentCategory
}
