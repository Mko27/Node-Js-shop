const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const { validateCreateProduct } = require('../middlewares/validations/product.validation')
const { ensureAuthenticated } = require('../config/auth')

router.get('/',
  ProductServices.getAllProducts)

router.get('/add',
  ensureAuthenticated,
  ProductServices.appendCities,
  ProductServices.createAnnouncementForm
)

router.get('/my-announcements',
  ensureAuthenticated,
  ProductServices.userAnnouncements)

router.post('/add',
  validateCreateProduct,
  ProductServices.createAnnouncement)

router.patch('/:id',
)

router.delete('/:id',
  ProductServices.deleteProductById
)

module.exports = router
