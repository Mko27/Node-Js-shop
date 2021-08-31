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
        if (category) {
          console.log(category)
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
  }
}
