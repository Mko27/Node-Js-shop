var express = require('express');
var router = express.Router();
const RegionServices = require('./services/regions.service')
const { validateCreateRegion, validateIdRegion, validateRegionUpdateParams } = require('../middlewares/validations/region.validation');

router.get('/', 
    RegionServices.getAllRegions)

router.get('/add', function (req, res, next) {
    res.render('regionAdd')
})

router.get('/:id',
    validateIdRegion,
    RegionServices.getRegionById)

router.patch('/:id', 
    validateRegionUpdateParams, 
    RegionServices.updateRegionById)

router.delete('/:id', 
    validateIdRegion,
    RegionServices.deleteRegionById)

router.post('/',
    validateCreateRegion,
    RegionServices.regionCreate)  



module.exports = router;
