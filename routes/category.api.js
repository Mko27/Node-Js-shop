const express = require('express')
const router = express.Router()
const CategoryServices = require('./services/category.service')
const { checkCategoryDelete, checkCategoryNameOrSlug } = require('../middlewares/checkCategory.middlware')
const { validateCreateCategory, validateIdCategory, validateCategoryUpdateParams, validateCategoryList } = require('../middlewares/validations/category.validation')

router.get('/',
  validateCategoryList,
  CategoryServices.getCategoriesByQuantity)

router.post('/',
  validateCreateCategory,
  checkCategoryNameOrSlug,
  CategoryServices.createCategory)

router.delete('/:id',
  validateIdCategory,
  checkCategoryDelete,
  CategoryServices.deleteCategoryById)

router.patch('/:id',
  validateCategoryUpdateParams,
  checkCategoryNameOrSlug,
  CategoryServices.updateCategoryById)

module.exports = router
