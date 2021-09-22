const models = require('../models')
const { Category } = models

const buildTree = (categories, id = 0, key = 'parentId') =>
  categories.reduce((acc, category) => {
    if (category[key] === id) {
      category.children = buildTree(categories, category.id)
      acc.push(category)
    }

    return acc
  }, [])

const appendCategories = (req, res, next) => {
  return Category.getCategories()
    .then((categories) => {
      res.locals.__categories = buildTree(categories)
      res.locals.__categoriesList = categories
      console.log(res.locals.__categoriesList)
      return next()
    })
    // .then(categoriesTree => {
    //   res.locals.__categories = categoriesTree
    //   console.log(JSON.stringify(categoriesTree, null, 2))
    //   return next()
    // })
    .catch(next)
}

module.exports = {
  appendCategories
}
