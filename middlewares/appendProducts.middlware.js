const models = require('../models')
const { Product } = models

const appendProducts = (req, res, next) => {
  return Product.getProducts().then((products) => {
    res.locals.__products = products
    next()
  }).catch(next)
}

module.exports = {
  appendProducts
}
