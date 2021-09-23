const models = require('../models/index')
const { Product, ProductCategory } = models
const getProductListByCategoryQuery = (req, res, next) => {
  const categoryId = parseInt(req.params.id, 10)
  const query = {
    include: [{
      model: ProductCategory,
      where: {
        categoryId
      } }]
  }

  return Product.getByCategories(query)
    .then((announcements) => {
      return res.render('announcements', { announcements: announcements.rows })
    })
    .catch(next)
}

const getProductDataAndEditForm = (req, res, next) => {
  const productId = parseInt(req.params.id, 10)
  console.log(productId)
  const query = {
    where: { id: productId },
    include: [{
      model: ProductCategory,
      where: {
        productId
      },
      required: false
    }],
    logging: console.log
  }

  return Product.findById(query)
    .then((product) => {
      const pr = JSON.parse(JSON.stringify(product))
      console.log('prod', pr)
      res.render('editAnnouncement', { product: pr })
    })
    .catch(next)
}

module.exports = {
  getProductListByCategoryQuery,
  getProductDataAndEditForm
}
