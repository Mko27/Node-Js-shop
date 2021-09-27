const models = require('../../models')
const { Category } = models
const { getPagingData } = require('../../utils/pagination.util')

const getCategoriesByQuantity = (req, res, next) => {
  const page  = parseInt(req.query.page, 10)
  const name = req.query.name || ''
  const limit = 5
  const offset = page ? page * limit : 0

  return Category.getCategoriesByQuantity(limit, offset, name)
    .then((data) => {
      const {rows: categories, totalItems} = getPagingData(data, page)
      const totalPages = Math.ceil(totalItems/limit)
      return res.render('category', { categories, totalPages })
    })
    .catch(next)
}

const getAllCategories = (req, res, next) => {
  return Category.getCategories()
    .then((categories) => {
      res.json({ select: categories })
      return next()
    })
    .catch(next)
}

// const getCategoriesPagination = (req, res, next) => {
//   console.log(req.query)
//   const page = parseInt(req.query.page, 10)
//   const limit = parseInt(req.query.limit, 10) || 3

//   const offset = page ? page * limit : 0

//   return Category.getCategoriesPagination(limit, offset)
//     .then((categories) => res.render('category', { categories: categories.rows }))
//     .catch(next)
// }

const createCategory = (req, res, next) => {
  const data = req.body

  return Category.createCategory(data)
    .then(() => res.redirect('/category'))
    .catch(next)
}

const deleteCategoryById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)

  return Category.deleteCategoryById(data)
    .then(() => res.json({ msg: 'Successfully deleted' }))
    .catch(next)
}

const updateCategoryById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)
  const categoryData = req.body

  return Category.updateCategoryById(data, categoryData)
    .then(() => res.json({ msg: 'Successfully updated' }))
    .catch(next)
}

module.exports = {
  getAllCategories,
  getCategoriesByQuantity,
  createCategory,
  deleteCategoryById,
  updateCategoryById
}
