const models = require('../../models')
const { Category } = models

const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0

  return { limit, offset }
}

const getPagingData = (data, page) => {
  const { count: totalItems, rows: categories } = data
  const currentPage = page ? +page : 0

  return { totalItems, categories, currentPage }
}

const getCategoriesByQuantity = (req, res, next) => {
  console.log(req.query)
  const { page, size } = req.query
  const name = req.query.name || ''

  const { limit, offset } = getPagination(page, size)

  return Category.getCategoriesByQuantity(limit, offset, name)
    .then((data) => {
      const response = getPagingData(data, page)

      return res.render('category', { categories: response.categories })
    })
    .catch(next)
}

const getAllCategories = (req, res, next) => {
  return Category.getCategories()
    .then((categories) => {
      console.log(categories)
      return res.render('category', { categories })
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
  console.log(req.body)
  const data = req.body

  return Category.createCategory(data)
    .then(() => res.redirect('/category'))
    .catch(next)
}

const deleteCategoryById = (req, res, next) => {
  const data = req.params
  console.log('================= deleted')
  return Category.deleteCategoryById(data.id)
    .then(() => res.json({ msg: 'Successfully deleted' }))
    .catch(next)
}

const updateCategoryById = (req, res, next) => {
  const data = req.params
  console.log('req.params', data)
  const elem = req.body
  console.log('elem', elem)
  return Category.updateCategoryById(data.id, elem)
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
