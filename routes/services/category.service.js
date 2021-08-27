const  models = require('../../models');
const {Category} = models

const getAllCategories = (req, res, next) => {
    return Category.getCategories()
        .then((categories) => {
            console.log(categories)
            return res.render('category', {categories})
        })
        .catch(next)
}

const createCategory = (req, res, next) => {
    console.log(req.body)
    const data = req.body

    return Category.createCategory(data)
        .then(() => res.redirect('/category'))
        .catch(next)
}

const deleteCategoryById = (req, res, next) => {
    const data = req.params;
    console.log('================= deleted')
    return Category.deleteCategoryById(data.id)
        .then(() => res.redirect('/category'))
        .catch(next)
}

const updateCategoryById = (req, res, next) => {
    const data = req.params
    console.log('req.params', data)
    const elem = req.body
    console.log('elem', elem)
    return Category.updateCategoryById(data.id, elem)
      .then(() => res.json({msg: "Successfully updated"}))
      .catch(next)
  }

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategoryById,
    updateCategoryById
}