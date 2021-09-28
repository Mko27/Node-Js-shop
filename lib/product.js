const models = require('../models/index')
const { Product, ProductCategory, Image } = models

const getProductListByCategoryQuery = (req, res, next) => {
  const categoryId = parseInt(req.params.categoryId, 10)
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

const getProductDataById = (req, res, next) => {
  const productId = parseInt(req.params.productId, 10)
  const query = {
    where: { id: productId },
    include: [{
      model: Image,
      where: {
        productId
      },
      attributes: ['path'],
      required: false
    }]
  }

  return Product.getProductDataById(query)
    .then((product) => res.render('productAnnouncement', { product }))
    .catch(next)
}

const getProductDataAndEditForm = (req, res, next) => {
  const productId = parseInt(req.params.id, 10)
  const query = {
    where: { id: productId },
    include: [{
      model: ProductCategory,
      where: {
        productId
      },
      attributes: ['categoryId'],
      required: false
    }]
  }

  return Product.findByIdForUser(query)
    .then((product) => {
      const pr = JSON.parse(JSON.stringify(product))
      res.locals.__product = pr
      res.render('editAnnouncement', { product: pr })
    })
    .catch(next)
}

module.exports = {
  getProductListByCategoryQuery,
  getProductDataAndEditForm,
  getProductDataById
}
