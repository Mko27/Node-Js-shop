var express = require('express');
var router = express.Router();
const db = require('../config/index');
const  models = require('../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const RegionServices = require('./services/regions.service')
// const RegionError = require('../middlewares/validations/RegionError')
// const RegValidation = require('../middlewares/validations/RegValidation')
const { validateCreateRegion, validateIdRegion } = require('../middlewares/validations/region.validation');
const { handleError } = require('../middlewares/validations/error-handler.middleware')


/* GET users listing. */

router.get('/', RegionServices.getAllRegions);

router.post('/add',
 validateCreateRegion,
 RegionServices.addRegion)  

router.post('/search', validateIdRegion, RegionServices.getRegionById)

router.post('/delete', validateIdRegion, RegionServices.deleteRegionById)

module.exports = router;
