const express = require('express')
const router = express.Router()
const CategoryServices = require('./services/category.service')
const { checkCategoryDelete, checkCategoryName } = require('../middlewares/checkCategory.middlware')
const { validateCreateCategory, validateIdCategory, validateCategoryUpdateParams, validateCategoryList } = require('../middlewares/validations/category.validation')

router.get('/',
  validateCategoryList,
  CategoryServices.getCategoriesPagination)

router.post('/',
  validateCreateCategory,
  checkCategoryName,
  CategoryServices.createCategory)

router.delete('/:id',
  validateIdCategory,
  checkCategoryDelete,
  CategoryServices.deleteCategoryById)

router.patch('/:id',
  validateCategoryUpdateParams,
  checkCategoryName,
  CategoryServices.updateCategoryById)

module.exports = router
