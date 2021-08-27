var express = require('express')
var router = express.Router()
const RegionServices = require('./services/regions.service')
const { checkRegionName } = require('../middlewares/checkRegion.middlware')
const { validateCreateRegion, validateIdRegion, validateRegionUpdateParams } = require('../middlewares/validations/region.validation')

router.get('/', 
    RegionServices.getAllRegions)

router.get('/:id',
    validateIdRegion,
    RegionServices.getRegionById)

router.patch('/:id',
    checkRegionName,
    validateRegionUpdateParams, 
    RegionServices.updateRegionById)

router.delete('/:id', 
    validateIdRegion,
    RegionServices.deleteRegionById)

router.post('/',
    checkRegionName,
    validateCreateRegion,
    RegionServices.regionCreate)  



module.exports = router;
