const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const ProductCategoryServices = require('./services/productCategory.service')
const { validateCreateProduct, validateIdProduct, validateUpdateProduct } = require('../middlewares/validations/product.validation')
const { ensureAuthenticated } = require('../config/auth')

router.get('/',
  ProductServices.getAllProducts)

router.get('/my-announcements/add',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.createAnnouncementForm)

router.get('/my-announcements',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.userAnnouncements)

router.post('/my-announcements/add',
  validateCreateProduct,
  ProductCategoryServices.createProductCategory,
  ProductServices.createAnnouncement)

router.patch('/my-announcements/:id',
  validateUpdateProduct,
  ProductServices.updateProductById)

router.delete('/my-announcements/:id',
  validateIdProduct,
  ProductServices.deleteProductById)

module.exports = router
