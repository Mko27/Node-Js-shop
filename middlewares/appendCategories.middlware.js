const models = require('../models')
const { Category } = models

const appendCategories = (req, res, next) => {
  return Category.getCategories().then((categories) => {
    res.locals.__categories = categories
    next()
  }).catch(next)
}

module.exports = {
  appendCategories
}
