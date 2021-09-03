const models = require('../../models')
const { Product } = models

const getAllProducts = (req, res, next) => {
  console.log('products req', req.user)
  return Product.getProducts()
    .then((products) => res.send(products))
    .catch(next)
}

module.exports = {
  getAllProducts
}
