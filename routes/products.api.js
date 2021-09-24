const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const ProductCategoryServices = require('./services/productCategory.service')
const { validateCreateProduct, validateIdProduct, validateUpdateProduct } = require('../middlewares/validations/product.validation')
// const { validateDeleteOrCreateProductCategory } = require('../middlewares/validations/productCategory.validation')
const { ensureAuthenticated } = require('../lib/auth')
const { getProductListByCategoryQuery, getProductDataAndEditForm } = require('../lib/product')
const { multerImageUpload } = require('../middlewares/productFilesUpload.middlware')

router.get('/',
  ProductServices.getAllProducts)

router.get('/my-announcements',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.userAnnouncements)

router.get('/:id',
  getProductListByCategoryQuery)

router.get('/my-announcements/add',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.createAnnouncementForm)

router.get('/my-announcements/edit/:id',
  ensureAuthenticated,
  ProductServices.appendCities,
  getProductDataAndEditForm)

router.post('/my-announcements/add',
  multerImageUpload,
  validateCreateProduct,
  ProductServices.createAnnouncement)

router.post('/my-announcements/edit/:id/category',
  // validateDeleteOrCreateProductCategory,
  ProductCategoryServices.createProductCategory)

router.delete('/my-announcements/edit/:id',
  // validateDeleteOrCreateProductCategory,
  ProductCategoryServices.deleteProductCategory)

router.patch('/my-announcements/edit/:id',
  validateUpdateProduct,
  ProductServices.updateProductById)

router.delete('/my-announcements/:id',
  validateIdProduct,
  ProductServices.deleteProductById)

module.exports = router
