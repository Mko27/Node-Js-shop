const express = require('express')
const router = express.Router()
const regionsRouter = require('./regions.api')
const citiesRouter = require('./cities.api')
const usersRouter = require('./users.api')
const categoriesRouter = require('./categories.api')
const productsRouter = require('./products.api')
const userProductsRouter = require('./user-products.api')
const tagsRouter = require('./tags.api')

router.use('/reg', regionsRouter)
router.use('/cities', citiesRouter)
router.use('/users', usersRouter)
router.use('/category', categoriesRouter)
router.use('/products', productsRouter)
router.use('/my-announcements', userProductsRouter)
router.use('/tags', tagsRouter)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
