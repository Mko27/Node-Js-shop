const express = require('express')
const router = express.Router()
const ProductServices = require('./services/products.service')
const ProductCategoryServices = require('./services/productCategories.service')
const ProductTagsServices = require('./services/productTags.service')
const { validateCreateProduct, validateIdProduct, validateUpdateProduct } = require('../middlewares/validations/product.validation')
const { validateDeleteOrCreateProductCategory } = require('../middlewares/validations/productCategory.validation')
const { ensureAuthenticated } = require('../lib/auth')
const { getProductDataAndEditForm } = require('../lib/product')
const { multerImageUpload } = require('../middlewares/productFilesUpload.middlware')
const { checkProductCategoryExist } = require('../middlewares/checkProductCategory.middlware')
const { validateProductImages } = require('../middlewares/validations/productImages.validation')
const { validateCreateOrDeleteProductTag } = require('../middlewares/validations/productTag.validation')
const { checkProductImagesLimit } = require('../middlewares/checkProductImagesLimit.middlware')
const { checkTagIsAppendedProduct } = require('../middlewares/checkProductTag.middlware')
const { getImageSizes } = require('../middlewares/getImagesSizesAndResize.middlware')

router.use('*', ensureAuthenticated)

router.get('/',
  ProductServices.appendCities,
  ProductServices.userAnnouncements)

router.get('/add',
  ProductServices.appendCities,
  ProductServices.createAnnouncementForm)

router.get('/edit/:id',
  ProductServices.appendCities,
  getProductDataAndEditForm)

router.get('/edit/:id/images',
  ProductServices.userProductImages)

router.get('/edit/:id/tags',
  ProductServices.appendTagForm)

router.post('/edit/:id/tags',
  validateCreateOrDeleteProductTag,
  checkTagIsAppendedProduct,
  ProductTagsServices.appendProductTag)

router.delete('/edit/:id/tags',
  validateCreateOrDeleteProductTag,
  ProductTagsServices.deleteProductTag)

router.post('/add',
  validateCreateProduct,
  ProductServices.createAnnouncement)

router.post('/edit/:id/images',
  multerImageUpload,
  checkProductImagesLimit,
  getImageSizes,
  validateProductImages,
  ProductServices.createImages)

router.delete('/images/:imageId',
  ProductServices.deleteImageById)

router.post('/edit/:id/category',
  validateDeleteOrCreateProductCategory,
  checkProductCategoryExist,
  ProductCategoryServices.createProductCategory)

router.delete('/edit/:id',
  validateDeleteOrCreateProductCategory,
  ProductCategoryServices.deleteProductCategory)

router.patch('/edit/:id',
  validateUpdateProduct,
  ProductServices.updateProductById)

router.delete('/:id',
  validateIdProduct,
  ProductServices.deleteProductById)

module.exports = router
