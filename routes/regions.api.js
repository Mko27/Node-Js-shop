var express = require('express');
var router = express.Router();
const db = require('../config/index');
const  models = require('../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const RegionServices = require('./services/regions.service')
const RegionError = require('../middlewares/validations/RegionError')
const RegValidation = require('../middlewares/validations/RegValidation')


/* GET users listing. */

router.get('/', RegionServices.getAllRegions);

router.post('/add', RegionServices.addRegion)  

router.post('/search', RegionServices.getRegionById)

router.post('/delete', RegionServices.deleteRegionById)

router.get('*', function (req, res , next) {
    return next(RegionError.notFound())
})

module.exports = router;
