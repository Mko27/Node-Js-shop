const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const { getProductListByCategoryQuery } = require('../lib/product')

router.get('/',
  ProductServices.getAllProducts)

router.get('/:id',
  getProductListByCategoryQuery)

module.exports = router
