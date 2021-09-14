const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const ProductCategoryServices = require('./services/productCategory.service')
const { validateCreateProduct, validateIdProduct, validateUpdateProduct } = require('../middlewares/validations/product.validation')
const { checkProductCategoryParent } = require('../middlewares/checkProductCategory.middlware')
const { ensureAuthenticated } = require('../config/auth')

router.get('/',
  ProductServices.getAllProducts)

router.get('/:category',
  ProductServices.getProductsByCategoryId)

router.get('/my-announcements/add',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.createAnnouncementForm)

router.get('/my-announcements/edit/:id',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.editAnnouncementForm)

router.get('/my-announcements',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.userAnnouncements)

router.post('/my-announcements/add',
  validateCreateProduct,
  ProductServices.createAnnouncement)

router.post('/my-announcements/edit/:id/category',
  ProductCategoryServices.createProductCategory,
  checkProductCategoryParent,
  ProductCategoryServices.createParentCategory
)

router.patch('/my-announcements/edit/:id',
  validateUpdateProduct,
  ProductServices.updateProductById)

router.delete('/my-announcements/:id',
  validateIdProduct,
  ProductServices.deleteProductById)

module.exports = router
