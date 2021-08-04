var express = require('express');
var router = express.Router();
const RegionServices = require('./services/regions.service')
const { validateCreateRegion, validateIdRegion } = require('../middlewares/validations/region.validation');


/* GET users listing. */

router.get('/', 
    RegionServices.getAllRegions)

router.get('/add', function (req, res, next) {
    res.render('regionAdd')
})

router.get('/delete', function (req, res ,next) {
    res.render('regionDelete')
})

router.get('/:id/:name', 
    validateIdRegion, 
    RegionServices.updateRegionById)

router.get('/:id',
    validateIdRegion,
    RegionServices.getRegionById)

router.post('/delete', 
    validateIdRegion,
    RegionServices.deleteRegionById)

router.post('/add',
    validateCreateRegion,
    RegionServices.addRegion)  



module.exports = router;
