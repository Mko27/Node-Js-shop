const models = require('../../models')
const { ProductCategory } = models

const createProductCategory = (req, res, next) => {
  const data = {
    CategoryId: req.body.CategoryId,
    ProductId: req.body.id
  }

  return ProductCategory.createProductCategory(data)
    .then(() => res.json({ msg: 'successfully created' }))
    .catch(next)
}

module.exports = {
  createProductCategory
}
