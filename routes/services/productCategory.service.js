const models = require('../../models')
const { ProductCategory } = models

const createProductCategory = (req, res, next) => {
  console.log('Product Category ', req.body)
  const { ProductId, CategoryId } = req.body
  const createData = { ProductId, CategoryId }

  return ProductCategory.createProductCategory(createData)
    .then(() => next())
    .catch(next)
}

const createParentCategory = (req, res, next) => {
  const { ProductId, parentId } = req.body
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
