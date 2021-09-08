const models = require('../../models')
const { ProductCategory } = models

const createProductCategory = (req, res, next) => {
  console.log('Product Category ', req.body)
  const data = req.body

  return ProductCategory.createProductCategory(data)
    .then(() => res.json({ msg: 'successfully created' }))
    .catch(next)
}

module.exports = {
  createProductCategory
}
