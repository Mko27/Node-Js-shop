const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')

router.get('/',
  ProductServices.getAllProducts)

module.exports = router
