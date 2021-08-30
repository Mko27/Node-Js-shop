const express = require('express')
const router = express.Router()
const CategoryServices = require('./services/category.service')
const { checkCategoryDelete, checkCategoryName } = require('../middlewares/checkCategory.middlware')
const { validateCreateCategory, validateIdCategory, validateCategoryUpdateParams } = require('../middlewares/validations/category.validation')

router.get('/',
  CategoryServices.getAllCategories)

router.post('/',
  checkCategoryName,
  validateCreateCategory,
  CategoryServices.createCategory)

router.delete('/:id',
  checkCategoryDelete,
  validateIdCategory,
  CategoryServices.deleteCategoryById)

router.patch('/:id',
  checkCategoryName,
  validateCategoryUpdateParams,
  CategoryServices.updateCategoryById)

module.exports = router
