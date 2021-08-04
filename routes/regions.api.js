var express = require('express');
var router = express.Router();
const RegionServices = require('./services/regions.service')
const { validateCreateRegion, validateIdRegion } = require('../middlewares/validations/region.validation');


/* GET users listing. */

router.get('/', RegionServices.getAllRegions);

router.get('/add', function (req, res, next) {
    res.render('regionsAdd')
})

router.post('/add',
 validateCreateRegion,
 RegionServices.addRegion)  

router.post('/search', validateIdRegion, RegionServices.getRegionById)

router.post('/delete', validateIdRegion, RegionServices.deleteRegionById)

module.exports = router;
