const express = require('express')
const router = express.Router()
const TagsServices = require('./services/tags.service')

router.get('/', 
  TagsServices.getAllTags)

router.post('/',
  TagsServices.createTag)

module.exports = router