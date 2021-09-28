const express = require('express')
const router = express.Router()
const TagsServices = require('./services/tags.service')
const { validateCreateTag, validateTagUpdateParams, validateIdTag } = require('../middlewares/validations/tag.validation')
const { checkSlugOrTitle } = require('../middlewares/checkTag.middlware')

router.get('/',
  TagsServices.getAllTags)

router.post('/',
  validateCreateTag,
  checkSlugOrTitle,
  TagsServices.createTag)

router.delete('/:id',
  validateIdTag,
  TagsServices.deleteTag)

router.patch('/:id',
  validateTagUpdateParams,
  TagsServices.updateTag)

module.exports = router
