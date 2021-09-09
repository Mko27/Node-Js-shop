const models = require('../models')
const { Category } = models

const buildTree = (categories, id = 0, link = 'parentId') =>
  categories
    .filter(category => category[link] === id)
    .map(category => ({ ...category, children: buildTree(categories, category.id) }))

const appendCategories = (req, res, next) => {
  return Category.getCategories().then((categories) => {
    const categoriesTree = buildTree(categories)

    console.log('000000 ', JSON.stringify(categoriesTree, null, 2))
    res.locals.__categories = categoriesTree
    next()
  }).catch(next)
}

module.exports = {
  appendCategories
}
