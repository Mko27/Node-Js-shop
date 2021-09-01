const models = require('../models')
const { Category } = models
const { ErrorsUtil } = require('../utils/index')
const { CategoryDeleteError, ExistNameError } = ErrorsUtil

module.exports = {
  checkCategoryDelete: (req, res, next) => {
    console.log('check')
    const parentId = req.params.id

    return Category.findByParentId(parentId)
      .then((category) => {
        if (category.count > 0) {
          return next(new CategoryDeleteError('This category is parent'))
        }

        return next()
      })
      .catch(next)
  },

  checkCategoryName: (req, res, next) => {
    console.log('check')
    const name = req.body.name
    console.log('req name ', name)

    return Category.findByName(name)
      .then((category) => {
        if (category) {
          return next(new ExistNameError('This name exist'))
        }

        return next()
      })
      .catch(next)
  },

  checkCategorySlug: (req, res, next) => {
    const slug = req.body.slug

    return Category.findBySlug(slug)
      .then((category) => {
        if (category) {
          return next(new ExistNameError('this slug exist'))
        }

        return next()
      })
      .catch(next)
  }
}
