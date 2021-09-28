const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const { getProductListByCategoryQuery, getProductDataById } = require('../lib/product')
const { validateProductsList } = require('../middlewares/validations/product.validation')

router.get('/',
  ProductServices.getProductsByQuantity)

router.get('/by-category/:categoryId',
  getProductListByCategoryQuery)

router.get('/:productId',
  validateProductsList,
  getProductDataById)

module.exports = router
