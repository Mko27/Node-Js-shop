const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const { getProductListByCategoryQuery } = require('../lib/product')

router.get('/',
  ProductServices.getAllProducts)

router.get('/by-category/:categoryId',
  getProductListByCategoryQuery)

router.get('/:productId',
  ProductServices.getProductById)

module.exports = router
