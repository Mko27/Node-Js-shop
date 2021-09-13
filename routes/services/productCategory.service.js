const models = require('../../models')
const { ProductCategory } = models

const createProductCategory = (req, res, next) => {
  console.log('product category ', req.params)
  const ProductId = req.params.id
  const { CategoryId } = req.body
  const createData = { ProductId, CategoryId }

  return ProductCategory.createProductCategory(createData)
    .then((elem) => {
      console.log('create product category ', elem)
      return next()
    })
    .catch(next)
}

const createParentCategory = (req, res, next) => {
  const ProductId = req.params.id
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
