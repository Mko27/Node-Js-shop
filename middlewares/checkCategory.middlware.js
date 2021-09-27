const models = require('../models')
const { Category } = models
const { ErrorsUtil } = require('../utils/index')
const { CategoryDeleteError, ExistNameError } = ErrorsUtil

module.exports = {
  checkCategoryDelete: (req, res, next) => {
    const parentId = parseInt(req.params.id, 10)

    return Category.findByParentIdCategoriesCount(parentId)
      .then((count) => {
        if (count > 0) {
          return next(new CategoryDeleteError('This category is parent'))
        }

        return next()
      })
      .catch(next)
  },

  checkCategoryNameOrSlug: (req, res, next) => {
    const { name, slug } = req.body

    return Category.findByNameOrSlug(name, slug)
      .then((category) => {
        if (category) {
          return next(new ExistNameError('This name or slug exist'))
        }

        return next()
      })
      .catch(next)
  }

  // checkCategorySlug: (req, res, next) => {
  //   const slug = req.body.slug

  //   return Category.findBySlug(slug)
  //     .then((category) => {
  //       if (category) {
  //         return next(new ExistNameError('this slug exist'))
  //       }

  //       return next()
  //     })
  //     .catch(next)
  // }
}
