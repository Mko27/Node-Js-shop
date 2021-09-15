const models = require('../models/index')
const { Product, ProductCategory } = models
const getProductListByCategoryQuery = (req, res, next) => {
  const CategoryId = parseInt(req.params.id, 10)
  const query = {
    include: [{
      model: ProductCategory,
      where: {
        CategoryId
      } }]
  }

  return Product.getByCategories(query)
    .then((announcements) => res.render('announcements', { announcements: announcements.rows }))
    .catch(next)
}

module.exports = {
  getProductListByCategoryQuery
}
