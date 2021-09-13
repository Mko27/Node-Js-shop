const express = require('express')
const router = express.Router()
const RegionServices = require('./services/regions.service')
const { checkRegionName, checkRegionDelete } = require('../middlewares/checkRegion.middlware')
const { validateCreateRegion, validateIdRegion, validateRegionUpdateParams } = require('../middlewares/validations/region.validation')

router.get('/',
  RegionServices.getAllRegions)

router.get('/:id',
  validateIdRegion,
  RegionServices.getRegionById)

router.patch('/:id',
  validateRegionUpdateParams,
  checkRegionName,
  RegionServices.updateRegionById)

router.delete('/:id',
  validateIdRegion,
  checkRegionDelete,
  RegionServices.deleteRegionById)

router.post('/',
  validateCreateRegion,
  checkRegionName,
  RegionServices.regionCreate)

module.exports = router
