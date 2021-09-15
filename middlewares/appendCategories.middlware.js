const models = require('../models')
const { Category } = models

const buildTree = (categories, id = 0, key = 'parentId') =>
  categories
    .filter(category => category[key] === id)
    .map(category => {
      category.children = buildTree(categories, category.id)
      return category
    })

// const buildTreeReduce = (categories, id = 0, key = 'parentId') =>
//   categories.reduce((acc, category) => {
//     if (category[key] !== id) {
//       return acc
//     }
//     category.children = buildTreeReduce(categories, category.id)
//     acc.push(category)
//     return acc
//   }, [])

const appendCategories = (req, res, next) => {
  return Category.getCategories().then((categories) => {
    const categoriesTree = buildTree(categories)

    res.locals.__categories = categoriesTree
    return next()
  }).catch(next)
}

module.exports = {
  appendCategories
}
