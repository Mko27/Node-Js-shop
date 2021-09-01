const express = require('express')
const router = express.Router()
const CategoryServices = require('./services/category.service')
const { checkCategoryDelete, checkCategoryName, checkCategorySlug } = require('../middlewares/checkCategory.middlware')
const { validateCreateCategory, validateIdCategory, validateCategoryUpdateParams, validateCategoryList } = require('../middlewares/validations/category.validation')

router.get('/',
  validateCategoryList,
  CategoryServices.getCategoriesPagination)

router.post('/',
  validateCreateCategory,
  checkCategoryName,
  checkCategorySlug,
  CategoryServices.createCategory)

router.delete('/:id',
  validateIdCategory,
  checkCategoryDelete,
  CategoryServices.deleteCategoryById)

router.patch('/:id',
  validateCategoryUpdateParams,
  checkCategoryName,
  checkCategorySlug,
  CategoryServices.updateCategoryById)

module.exports = router
